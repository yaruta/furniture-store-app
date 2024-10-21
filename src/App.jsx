import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./util/http";
import { useEffect } from "react";

import RootLayout from "./pages/RootLayout";
import HomePage, { loader as heroLoader } from "./pages/Home";
import ProductsPage from "./pages/Products";
import ProductDetailsPage from "./pages/ProductDetails";
import AboutPage from "./pages/About";
import FAQPage from "./pages/FAQPage";
import ErrorPage from "./pages/Error";
import FavoritesPage from "./pages/Favorites";
import CartPage from "./pages/CartPage";
import CheckoutRoot from "./pages/checkout/CheckoutRoot";
import UserFormPage from "./pages/checkout/UserFormPage";
import DeliveryFormPage from "./pages/checkout/DeliveryFormPage";
import PaymentFormPage from "./pages/checkout/PaymentFormPage";
import SummaryPage from "./pages/checkout/SummaryPage";
import CompletedPage from "./pages/checkout/CompletedPage";

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
      {
        path: "cart",
        element: <CartPage />
      },
      {
        path: "checkout",
        element: <CheckoutRoot />,
        children: [
          {
            path: "userinfo",
            element: <UserFormPage />
          },
          {
            path: "delivery",
            element: <DeliveryFormPage />
          },
          {
            path: "payment",
            element: <PaymentFormPage />
          },
          {
            path: "summary",
            element: <SummaryPage />
          },
          {
            path: "completed",
            element: <CompletedPage />
          }
        ]
      }
    ],
  },
]);

function App() {
  useEffect(() => {
    const timer = setTimeout(() => {
      localStorage.removeItem("cart");
      localStorage.removeItem("favorites");
    }, 1000*60*60*24*7);

    return () => clearTimeout(timer);
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
