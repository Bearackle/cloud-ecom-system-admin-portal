import { SelectInput, useDataProvider } from "react-admin";
import { useEffect, useState } from "react";

export const BrandReferenceSelect = ({ source, validate }) => {
  const dataProvider = useDataProvider();
  const [choices, setChoices] = useState([]);

  useEffect(() => {
    dataProvider.getArray("brands").then((response) => {
      // nếu response là mảng trực tiếp
      if (Array.isArray(response)) setChoices(response);
      // nếu response là object { data: [...] }
      else if (Array.isArray(response.data)) setChoices(response.data);
      else setChoices([]); // fallback
    });
  }, []);

  return choices.length === 0 ? null : (
    <SelectInput
      source={source}
      choices={choices}
      optionText="brandName"
      optionValue="id"
      validate={validate}
    />
  );
};
