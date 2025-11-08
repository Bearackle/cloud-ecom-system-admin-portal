import BookIcon from "@mui/icons-material/Book";
import ProductCreate from "./Create";
import ProductEdit from "./Edit";
import ProductList from "./List";
//import ProductDetail from "./Detail";

export default {
  list: ProductList,
  create: ProductCreate,
  edit: ProductEdit,
  //show: ProductDetail,
  icon: BookIcon,
  recordRepresentation: "title",
};
