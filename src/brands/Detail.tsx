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

export const BrandEditDetails = () => (
  <Grid container columnSpacing={2}>
    <Grid size={{ xs: 12, sm: 8 }}>
      <TextInput source="brandName" validate={req} />
    </Grid>
    <Grid size={{ xs: 12, sm: 12 }}>
      <TextInput source="avtImgUrl" validate={required()} fullWidth />
    </Grid>
  </Grid>
);

const req = [required()];
