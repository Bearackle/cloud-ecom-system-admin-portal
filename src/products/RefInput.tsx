import { SelectInput, useDataProvider } from "react-admin";
import { useEffect, useState } from "react";

export const ProductReferenceSelect = ({ source, validate }) => {
  const dataProvider = useDataProvider();
  const [choices, setChoices] = useState([]);

  useEffect(() => {
    dataProvider.getRef("products").then((response) => {
      //   let data = Array.isArray(response)
      //     ? response
      //     : Array.isArray(response.data)
      //     ? response.data
      //     : [];

      //   data = data.map((item) => ({
      //     ...item,
      //     id: BigInt(item.id).toString(),
      //   }));
      // setChoices(data);
      if (Array.isArray(response)) setChoices(response);
      else if (Array.isArray(response.data)) setChoices(response.data);
      else setChoices([]);
    });
  }, []);
  console.log("choices", choices);
  return choices.length === 0 ? null : (
    <SelectInput
      source={source}
      choices={choices}
      optionText="productName"
      optionValue="id"
      validate={validate}
    />
  );
};
