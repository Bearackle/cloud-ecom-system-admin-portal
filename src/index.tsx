import * as React from "react";
import { Admin, Resource, CustomRoutes } from "react-admin";
import { createRoot } from "react-dom/client";
import { Route } from "react-router-dom";

import authProvider from "./authProvider";
import CustomRouteLayout from "./CustomRouteLayout";
import CustomRouteNoLayout from "./CustomRouteNoLayout";
import customeDataProvider from "./CustomDataProvider";
import i18nProvider from "./i8nProvider";
import Layout from "./Layout";
import products from "./products";
import category from "./categories";
import brand from "./brands";
import { queryClient } from "./queryClient";
import variants from "./variants";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Admin
      authProvider={authProvider}
      dataProvider={customeDataProvider}
      i18nProvider={i18nProvider}
      queryClient={queryClient}
      title="Admin Portal"
      layout={Layout}
    >
      <Resource name="brands" {...brand} />
      <Resource name="categories" {...category} />
      <Resource name="products" {...products} />
      <Resource name="variants" {...variants} />
    </Admin>
  </React.StrictMode>
);
