import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../error-page";
import RootLayout from "../layout/rootLayout";
import HomePage from "../pages/common/home/HomePage";
import UserLayout from "../layout/UserLayout";
import OrderNow from "../pages/common/OrderNow";
import HelpPage from "../pages/common/helpPage";
import MyOrders from "../pages/user/myOrders";
import CartPage from "../pages/user/cartPage";
import UserAuth from "./proectedRoutes/userAuth";
import SignupPage from "../pages/user/signupPage";
import LoginPage from "../pages/user/loginPage";
import LogoutPage from "../pages/user/LogoutPage";
import ContactPage from "../pages/common/contactPage";
import FoodDetails,{loader as foodLoader} from "../pages/common/FoodDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "order-now",
        element: <OrderNow />,
      },
      {
        path: "order-now/:foodId",
        element: <FoodDetails />,
        loader : foodLoader
      },
      {
        path: "help",
        element: <HelpPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "signup",
        element: <SignupPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
  {
    path: "user",
    element: (
      <UserAuth>
        <UserLayout />
      </UserAuth>
    ),
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "my-orders",
        element: <MyOrders />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "order-now",
        element: <OrderNow />,
      },
      {
        path: "order-now/:foodId",
        element: <FoodDetails />,
        loader : foodLoader
      },
      {
        path: "help",
        element: <HelpPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "logout",
        element: <LogoutPage/>,
      },
    ],
  },
]);
