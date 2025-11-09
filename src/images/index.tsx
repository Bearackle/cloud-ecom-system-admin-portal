import BookIcon from "@mui/icons-material/Book";
import ImageCreate from "./Create";
import ImageList from "./List";
import { ImageEditDetails } from "./Detail";

export default {
  create: ImageCreate,
  list: ImageList,
  edit: ImageEditDetails,
  icon: BookIcon,
  recordRepresentation: "title",
};
