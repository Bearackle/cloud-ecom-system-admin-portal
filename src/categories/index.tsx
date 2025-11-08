import BookIcon from "@mui/icons-material/Book";
import CategoryCreate from "./Create";
import CategoryList from "./List";
import CategoryEdit from "./Edit";
// import ProductList from "./List";
// import ProductDetail from "./Detail";

export default {
  create: CategoryCreate,
  list: CategoryList,
  edit: CategoryEdit, 
  icon: BookIcon,
  recordRepresentation: "title",
};
