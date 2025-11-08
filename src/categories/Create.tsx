import { Grid } from "@mui/material";
import * as React from "react";
import {
  Create,
  TabbedForm,
  TextInput,
  required,
  useCreateContext,
  useDefaultTitle,
  ArrayInput,
  SimpleFormIterator,
  SimpleForm,
} from "react-admin";
import { CategoryReferenceSelect } from "./RefInput";
const RichTextInput = React.lazy(() =>
  import("ra-input-rich-text").then((module) => ({
    default: module.RichTextInput,
  }))
);

const CategoryTitle = () => {
  const appTitle = useDefaultTitle();
  const { defaultTitle } = useCreateContext();

  return (
    <>
      <title>{`${appTitle} - ${defaultTitle}`}</title>
      <span>{defaultTitle}</span>
    </>
  );
};
const handleSubmit = (values) => {
  // Log dữ liệu form khi submit
  console.log(values);
};
const CategoryCreate = () => (
  <Create title={<CategoryTitle />}>
    <SimpleForm>
      <Grid container columnSpacing={2}>
        <Grid size={{ xs: 12, sm: 8 }}>
          <TextInput source="categoryName" validate={required()} />
        </Grid>
        <Grid size={{ xs: 12, sm: 4 }}>
          <CategoryReferenceSelect source="parentId" validate={required()} />
        </Grid>
        <Grid size={{ xs: 12, sm: 12 }}>
          <TextInput source="imgUrl" validate={required()} fullWidth />
        </Grid>
      </Grid>
    </SimpleForm>
  </Create>
);

export default CategoryCreate;
