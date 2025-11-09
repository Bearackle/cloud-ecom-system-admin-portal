import * as React from "react";
import {
  NumberInput,
  ReferenceInput,
  required,
  SelectInput,
  TextInput,
  ArrayInput,
  Edit,
  SimpleFormIterator,
  SimpleForm,
} from "react-admin";
import { InputAdornment, Grid } from "@mui/material";

export const ImageEditDetails = () => (
  <Edit>
    <SimpleForm>
      <Grid container columnSpacing={2}>
        <Grid size={{ xs: 12, sm: 8 }}>
          <TextInput source="id" validate={req} />
        </Grid>
        <Grid size={{ xs: 12, sm: 12 }}>
          <TextInput source="url" validate={required()} fullWidth />
        </Grid>
      </Grid>
    </SimpleForm>
  </Edit>
);

const req = [required()];

export default ImageEditDetails;
