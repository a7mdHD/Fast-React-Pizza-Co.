import Home from "./ui/Home.jsx";
import Menu from "./features/menu/Menu.jsx";

const routes = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/menu",
    element: <Menu />
  }
];

export default routes;