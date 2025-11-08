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
  SimpleForm,
} from "react-admin";

import { VariantEditDetails } from "./Detail";

const RichTextInput = React.lazy(() =>
  import("ra-input-rich-text").then((module) => ({
    default: module.RichTextInput,
  }))
);

const VariantTitle = () => {
  const appTitle = useDefaultTitle();
  const { defaultTitle } = useEditContext();
  return (
    <>
      <title>{`${appTitle} - ${defaultTitle}`}</title>
      <span>{defaultTitle}</span>
    </>
  );
};

const VariantEdit = () => (
  <Edit title={<VariantTitle />}>
    <SimpleForm>
      <VariantEditDetails />
    </SimpleForm>
  </Edit>
);

const req = [required()];

export default VariantEdit;
