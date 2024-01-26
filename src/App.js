import { BrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import AllRepositories from "./pages/AllRepositories";
import RepositoryDetails from "./pages/RepositoryDetails";

const router = BrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: '/all-repositories',
    element: <AllRepositories />
  },
  {
    path: '/repository/:repoId',
    element: <RepositoryDetails />
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

