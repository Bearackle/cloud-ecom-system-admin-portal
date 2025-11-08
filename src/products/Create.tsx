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
} from "react-admin";
import { ProductEditDetails, ProductAttributes } from "./Detail";
const RichTextInput = React.lazy(() =>
  import("ra-input-rich-text").then((module) => ({
    default: module.RichTextInput,
  }))
);

const ProductTitle = () => {
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
const ProductCreate = () => (
  <Create title={<ProductTitle />}>
    <TabbedForm>
      <TabbedForm.Tab
        label="Chi tiết"
        value="details"
        sx={{ maxWidth: "40em" }}
      >
      <ProductEditDetails />
      </TabbedForm.Tab>
      <TabbedForm.Tab label="Hình ảnh" path="images" sx={{ maxWidth: "40em" }}>
        <ArrayInput source="images" label="Product Images">
          <SimpleFormIterator>
            <TextInput source="url" label="Image URL" validate={required()} />
          </SimpleFormIterator>
        </ArrayInput>
      </TabbedForm.Tab>
      <TabbedForm.Tab label="Thuộc tính" path="attributes">
        <ProductAttributes />
      </TabbedForm.Tab>
      <TabbedForm.Tab label="Mô tả" path="description">
        <React.Suspense fallback={<div>Loading editor...</div>}>
          <RichTextInput source="description" />
        </React.Suspense>
      </TabbedForm.Tab>
    </TabbedForm>
  </Create>
);

export default ProductCreate;
