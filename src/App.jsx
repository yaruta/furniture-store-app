/**
 * Main application component that sets up routing, authentication, and query client.
 * 
 * @file App.js
 */
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
import NewsletterPage, { action as newsletterAction } from "./pages/Newsletter";
import AuthenticationPage from "./pages/Authentication";
import AuthProvider from "./store/authContext";

/**
 * Defines the application routes.
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, // Root layout of the application
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, // Home page
        element: <HomePage />, 
        loader: heroLoader,
      },
      {
        path: "shop", // Shop section
        children: [
          {
            index: true, // Products listing page
            element: <ProductsPage />,
          },
          {
            path: ":productId", // Dynamic product details page based on productId
            element: <ProductDetailsPage />,
          },
        ],
      },
      {
        path: "favorites", // Favorites page
        element: <FavoritesPage />,
      },
      {
        path: "about", // About page
        element: <AboutPage />,
      },
      {
        path: "faq", // FAQ page
        element: <FAQPage />,
      },
      {
        path: "cart", // Shopping cart page
        element: <CartPage />,
      },
      {
        path: "newsletter", // Newsletter subscription page
        element: <NewsletterPage />,
        action: newsletterAction,
      },
      {
        path: "auth", // Authentication page
        element: <AuthenticationPage />,
      },
      {
        path: "checkout", // Checkout process root
        element: <CheckoutRoot />,
        children: [
          {
            path: "userinfo", // User information form
            element: <UserFormPage />,
          },
          {
            path: "delivery", // Delivery details form
            element: <DeliveryFormPage />,
          },
          {
            path: "payment", // Payment information form
            element: <PaymentFormPage />,
          },
          {
            path: "summary", // Order summary page
            element: <SummaryPage />,
          },
          {
            path: "completed", // Order completion page
            element: <CompletedPage />,
          },
        ],
      },
    ],
  },
]);

/**
 * Main application component.
 * 
 * Sets up authentication, query client provider, and router provider.
 * Also handles clearing local storage for cart and favorites after a week.
 * 
 * @returns {JSX.Element} The main application component.
 */

function App() {
  useEffect(() => {
    /**
     * Clears local storage items for cart and favorites after 7 days.
     */
    const timer = setTimeout(() => {
      localStorage.removeItem("cart");
      localStorage.removeItem("favorites");
    }, 1000 * 60 * 60 * 24 * 7);

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  return (
    <AuthProvider> {/* Provides authentication context */}
      <QueryClientProvider client={queryClient}> {/* Provides React Query client */}
        <RouterProvider router={router} /> {/* Provides application routing */}
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;
