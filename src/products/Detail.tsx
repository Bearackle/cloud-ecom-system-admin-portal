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
import { CategoryReferenceSelect } from "../categories/RefInput";
import { BrandReferenceSelect } from "../brands/RefInput";

export const ProductEditDetails = () => (
  <Grid container columnSpacing={2}>
    <Grid size={{ xs: 12, sm: 8 }}>
      <TextInput source="productName" validate={req} />
    </Grid>
    <Grid size={{ xs: 12, sm: 4 }}>
      <CategoryReferenceSelect source="categoryId" validate={required()} />
    </Grid>
    <Grid size={{ xs: 0, sm: 4 }}>
      <BrandReferenceSelect source="brandId" validate={required()} />
    </Grid>
    <Grid size={{ xs: 12, sm: 4 }}>
      <NumberInput
        source="price"
        InputProps={{
          startAdornment: <InputAdornment position="start">VND</InputAdornment>,
        }}
        validate={req}
      />
    </Grid>
  </Grid>
);
export const ProductAttributes = () => (
  <Grid container columnSpacing={2}>
    <Grid size={{ xs: 12, sm: 24 }}>
      <ArrayInput source="attributes" label="Thuộc tính sản phẩm">
        <SimpleFormIterator>
          <TextInput
            source="attributeName"
            label="Tên thuộc tính"
            validate={required()}
          />
          <TextInput
            source="attributeValue"
            label="Giá trị thuộc tính"
            validate={required()}
          />
        </SimpleFormIterator>
      </ArrayInput>
    </Grid>
  </Grid>
);

const req = [required()];
