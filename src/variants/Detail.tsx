import * as React from "react";
import {
  NumberInput,
  ReferenceInput,
  required,
  SelectInput,
  TextInput,
  ArrayInput,
  SimpleFormIterator,
} from "react-admin";
import { InputAdornment, Grid } from "@mui/material";
import { ProductReferenceSelect } from "../products/RefInput";

export const VariantEditDetails = () => (
  <Grid container columnSpacing={2}>
    <Grid size={{ xs: 12, sm: 8 }}>
      <TextInput source="variantName" validate={req} />
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
);

const req = [required()];
