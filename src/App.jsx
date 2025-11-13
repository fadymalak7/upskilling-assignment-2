import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import MainLayout from "./Layouts/MainLayout";
import Home from "./Pages/Home/Home";
import Cars from "./Pages/cars/Cars";
import CarDetails from "./Pages/CarDetails/CarDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <h1 className="text-danger">Error</h1>,
      children: [
        { index: true, element: <Home /> },
        { path: "/cars", element: <Cars /> },
        { path: "/car-details/:id", element: <CarDetails /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
