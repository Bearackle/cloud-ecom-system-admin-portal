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
import { ProductReferenceSelect } from "../products/RefInput";
const RichTextInput = React.lazy(() =>
  import("ra-input-rich-text").then((module) => ({
    default: module.RichTextInput,
  }))
);

const VariantTitle = () => {
  const appTitle = useDefaultTitle();
  const { defaultTitle } = useCreateContext();

  return (
    <>
      <title>{`${appTitle} - ${defaultTitle}`}</title>
      <span>{defaultTitle}</span>
    </>
  );
};

const VariantCreate = () => (
  <Create title={<VariantTitle />}>
    <SimpleForm>
      <Grid container columnSpacing={2}>
        <Grid size={{ xs: 12, sm: 8 }}>
          <TextInput source="variantName" validate={required()} />
        </Grid>
        <Grid size={{ xs: 12, sm: 4 }}>
          <TextInput source="quantity" validate={required()} />
        </Grid>
        <Grid size={{ xs: 12, sm: 12 }}>
          <TextInput source="imgUrl" validate={required()} fullWidth />
        </Grid>
        <Grid size={{ xs: 12, sm: 12 }}>
          <ProductReferenceSelect source="productId" validate={required()} />
        </Grid>
      </Grid>
    </SimpleForm>
  </Create>
);

export default VariantCreate;
