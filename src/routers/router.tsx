import Admin from "../pages/Admin";
import ItemDetail from "../pages/ItemDetail";
import ItemList from "../pages/ItemList";
import Login from "../pages/Login";
import ShoppingCart from "../pages/ShoppingCart";
import Top from "../pages/Top";

export const router = [
  {
    path: "/",
    element: <Top></Top>,
  },
  {
    path: "login",
    element: <Login></Login>,
  },
  {
    path: "admin",
    element: <Admin></Admin>,
  },
  {
    path: "itemList",
    element: <ItemList></ItemList>,
  },
  {
    path: "itemDetail",
    element: <ItemDetail></ItemDetail>,
  },
  {
    path: "shoppingCart",
    element: <ShoppingCart></ShoppingCart>,
  },
];
