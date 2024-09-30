import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/RootLayout";
import MainPage from "./pages/Home";
import ProductsPage from "./pages/Products";
import ProductDetailsPage from "./pages/ProductDetails";
import AboutPage from "./pages/About";
import FAQPage from "./pages/FAQPage";
import ErrorPage from './pages/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "shop",
        children: [
          {
            index: true,
            element: <ProductsPage />
          }, 
          {
            path: ":productId",
            element: <ProductDetailsPage />
          }
        ]
      },
      {
        path: 'about', 
        element: <AboutPage />
      },
      {
        path: 'faq', 
        element: <FAQPage />
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
