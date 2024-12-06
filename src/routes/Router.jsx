import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Edit from "../pages/edit";
import Register from "../pages/Create";
import PostDetail from "../pages/PostDetail";


const router = createBrowserRouter([
  { path: "/", element: <Home />},
  { path: "/login", element: <Login />},
  { path: "/register", element: <Register />},
  { path: "/create", element: <Create />},
  { path: "/", element: <Edit />},
  { path: "/postDetail", element: <PostDetail />},
]);
export default router;