import * as React from "react";
import {
  DataTable,
  DateField,
  Edit,
  EditButton,
  Pagination,
  ReferenceManyField,
  ReferenceManyCount,
  required,
  TabbedForm,
  TextInput,
  useDefaultTitle,
  useEditContext,
  ArrayInput,
  SimpleFormIterator,
} from "react-admin";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import EditNoteIcon from "@mui/icons-material/EditNote";
import ReviewIcon from "@mui/icons-material/Comment";

import { ProductEditDetails, ProductAttributes } from "./Detail";

const RichTextInput = React.lazy(() =>
  import("ra-input-rich-text").then((module) => ({
    default: module.RichTextInput,
  }))
);

const ProductTitle = () => {
  const appTitle = useDefaultTitle();
  const { defaultTitle } = useEditContext();
  return (
    <>
      <title>{`${appTitle} - ${defaultTitle}`}</title>
      <span>{defaultTitle}</span>
    </>
  );
};

const ProductEdit = () => {
  return (
    <Edit title={<ProductTitle />}>
      <TabbedForm>
        <TabbedForm.Tab
          label="Hình ảnh"
          sx={{ maxWidth: "40em", minHeight: 48 }}
          iconPosition="start"
          icon={<PhotoCameraIcon />}
        >
          <ArrayInput source="images" label="Product Images">
            <SimpleFormIterator>
              <TextInput
                source="id"
                label="Image ID"
                disabled // nếu bạn không muốn user sửa ID
              />
              <TextInput
                source="imgUrl"
                label="Image URL"
                validate={required()}
              />
            </SimpleFormIterator>
          </ArrayInput>
        </TabbedForm.Tab>
        <TabbedForm.Tab
          label="Chi tiết"
          path="details"
          sx={{ maxWidth: "40em", minHeight: 48 }}
          iconPosition="start"
          icon={<AspectRatioIcon />}
        >
          <ProductEditDetails />
        </TabbedForm.Tab>
        <TabbedForm.Tab
          label="Mô tả"
          path="description"
          sx={{ maxWidth: "40em", minHeight: 48 }}
          iconPosition="start"
          icon={<EditNoteIcon />}
        >
          <RichTextInput source="description" label="" validate={req} />
        </TabbedForm.Tab>
        <TabbedForm.Tab label="Thuộc tính">
          <ProductAttributes />
        </TabbedForm.Tab>
      </TabbedForm>
    </Edit>
  );
};
const req = [required()];

export default ProductEdit;
