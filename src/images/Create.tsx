// import { Grid } from "@mui/material";
// import * as React from "react";
// import {
//   Create,
//   TabbedForm,
//   TextInput,
//   required,
//   useCreateContext,
//   useDefaultTitle,
//   ArrayInput,
//   SimpleFormIterator,
//   SimpleForm,
//   ImageInput,
//   ImageField,
// } from "react-admin";
// const RichTextInput = React.lazy(() =>
//   import("ra-input-rich-text").then((module) => ({
//     default: module.RichTextInput,
//   }))
// );

// const ImageTitle = () => {
//   const appTitle = useDefaultTitle();
//   const { defaultTitle } = useCreateContext();

//   return (
//     <>
//       <title>{`${appTitle} - ${defaultTitle}`}</title>
//       <span>{defaultTitle}</span>
//     </>
//   );
// };
// const ImageCreate = () => (
//   <Create title={<ImageTitle />}>
//     <SimpleForm>
//       <Grid container columnSpacing={2}>
//         <Grid size={{ xs: 12, sm: 12 }}>
//           <ImageInput
//             source="file" // tên field backend sẽ nhận (MultipartFile file)
//             label="Upload Image"
//             accept="image/*"
//             validate={required()}
//           >
//             <ImageField source="src" title="title" />
//           </ImageInput>
//         </Grid>
//       </Grid>
//     </SimpleForm>
//   </Create>
// );

// export default ImageCreate;

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
  ImageInput,
  ImageField,
} from "react-admin";
const RichTextInput = React.lazy(() =>
  import("ra-input-rich-text").then((module) => ({
    default: module.RichTextInput,
  }))
);

const ImageTitle = () => {
  const appTitle = useDefaultTitle();
  const { defaultTitle } = useCreateContext();

  return (
    <>
      <title>{`${appTitle} - ${defaultTitle}`}</title>
      <span>{defaultTitle}</span>
    </>
  );
};
const ImageCreate = () => (
  <Create title={<ImageTitle />}>
    <SimpleForm>
      <Grid container columnSpacing={2}>
        <Grid size={{ xs: 12, sm: 12 }}>
          <ImageInput
            source="file" // tên field backend sẽ nhận (MultipartFile file)
            label="Upload Image"
            accept="image/*"
            validate={required()}
          >
            <ImageField source="src" title="title" />
          </ImageInput>
        </Grid>
      </Grid>
    </SimpleForm>
  </Create>
);

export default ImageCreate;
