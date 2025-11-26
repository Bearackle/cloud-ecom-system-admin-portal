import { fetchUtils } from "react-admin";

const apiUrl = "https://dinhhuan.id.vn";

const httpClient = (url, options = {}) => {
  const token = localStorage.getItem("authToken");
  if (!options.headers) {
    options.headers = new Headers({ "Content-Type": "application/json" });
  }
  options.headers.set("Authorization", `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};

const customDataProvider = {
  getList: async (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      _page: page,
      _perPage: perPage,
      _sort: field,
      _order: order,
    };

    if (params.filter && Object.keys(params.filter).length > 0) {
      query.filter = JSON.stringify(params.filter);
    }
    const url = `${apiUrl}/${resource}?${fetchUtils.queryParameters(query)}`;

    const { json, headers } = await httpClient(url);
    return {
      data: json.data,
      total: json.meta.totalElements,
    };
  },
  getArray: async (resource, params) => {
    const url = `${apiUrl}/${resource}`;
    const response = await httpClient(url);
    return {
      data: response.json,
    };
  },
  getRef: async (resource, params) => {
    const url = `${apiUrl}/${resource}/ref`;
    const response = await httpClient(url);
    return {
      data: response.json,
    };
  },
  getOne: async (resource, params) => {
    const url = `${apiUrl}/${resource}/${params.id}`;
    const response = await httpClient(url);
    return { data: response.json };
  },

  create: async (resource, params) => {
    console.log("Creating resource:", resource, "with params:", params);
    if (params.data.file && params.data.file.rawFile) {
      const formData = new FormData();
      formData.append("file", params.data.file.rawFile);

      // Nếu muốn gửi thêm các field khác, append ở đây
      Object.keys(params.data).forEach((key) => {
        if (key !== "file") {
          formData.append(key, params.data[key]);
        }
      });

      // Gửi request multipart/form-data
      const response = await fetch(`${apiUrl}/${resource}`, {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${await response.text()}`);
      }

      const json = await response.json();
      return { data: json };
    }
    const response = await httpClient(`${apiUrl}/${resource}`, {
      method: "POST",
      body: JSON.stringify(params.data),
    });
    return { data: response.json };
  },
  update: async (resource, params) => {
    console.log("Updating resource:", resource, "with params:", params);
    const response = await httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: "PUT",
      body: JSON.stringify(params.data),
    });
    return { data: response.json };
  },
  delete: async (resource, params) => {
    console.log("Deleting resource:", resource, "with id:", params.id);
    const response = await httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: "DELETE",
    });
    // React Admin chỉ cần trả về object { data: deletedRecord }
    return { data: params.previousData || { id: params.id } };
  },
};

export default customDataProvider;
