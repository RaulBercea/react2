import SearchPage from "./pages/searchPage";
import DetailPage from "./pages/DetailPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FirebaseLogin from "./pages/firebaselogin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SearchPage />,
  },
  {
    path: "/shows/:showId",
    element: <DetailPage />,
  },
  {
    path: "/login",
    element: <FirebaseLogin />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
