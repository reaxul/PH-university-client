import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { adminPaths } from "./admin.routes";
import { RouteGenerator } from "../utils/routeGenerator";
import { facultyPaths } from "./faculty.routes";
import { studentPaths } from "./student.routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "about", element: <About /> }],
  },
  {
    path: "/admin",
    element: <App />,
    children: RouteGenerator(adminPaths),
  },
  {
    path: "/student",
    element: <App />,
    children: RouteGenerator(studentPaths),
  },
  {
    path: "/faculty",
    element: <App />,
    children: RouteGenerator(facultyPaths),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;