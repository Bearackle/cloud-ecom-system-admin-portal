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
const RichTextInput = React.lazy(() =>
  import("ra-input-rich-text").then((module) => ({
    default: module.RichTextInput,
  }))
);

const BrandTitle = () => {
  const appTitle = useDefaultTitle();
  const { defaultTitle } = useCreateContext();

  return (
    <>
      <title>{`${appTitle} - ${defaultTitle}`}</title>
      <span>{defaultTitle}</span>
    </>
  );
};
const BrandCreate = () => (
  <Create title={<BrandTitle />}>
    <SimpleForm>
      <Grid container columnSpacing={2}>
        <Grid size={{ xs: 12, sm: 8 }}>
          <TextInput source="brandName" validate={required()} />
        </Grid>
        <Grid size={{ xs: 12, sm: 12 }}>
          <TextInput source="avtImgUrl" validate={required()} fullWidth />
        </Grid>
      </Grid>
    </SimpleForm>
  </Create>
);

export default BrandCreate;
