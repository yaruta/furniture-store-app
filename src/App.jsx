import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./util/http";

import RootLayout from "./pages/RootLayout";
import HomePage, { loader as heroLoader } from "./pages/Home";
import ProductsPage from "./pages/Products";
import ProductDetailsPage from "./pages/ProductDetails";
import AboutPage from "./pages/About";
import FAQPage from "./pages/FAQPage";
import ErrorPage from "./pages/Error";
import FavoritesPage from "./pages/Favorites";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: heroLoader,
      },
      {
        path: "shop",
        children: [
          {
            index: true,
            element: <ProductsPage />,
          },
          {
            path: ":productId",
            element: <ProductDetailsPage />,
          },
        ],
      },
      {
        path: "favorites",
        element: <FavoritesPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "faq",
        element: <FAQPage />,
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
