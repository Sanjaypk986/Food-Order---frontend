import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import HomePage from "../pages/common/home/HomePage";
import UserLayout from "../layout/UserLayout";
import OrderNow from "../pages/common/OrderNow";
import HelpPage from "../pages/common/HelpPage";
import MyOrders from "../pages/user/MyOrders";
import UserAuth from "./proectedRoutes/UserAuth";
import SignupPage from "../pages/user/SignupPage";
import LoginPage from "../pages/user/LoginPage";
import LogoutPage from "../pages/user/LogoutPage";
import FoodDetails, { loader as foodLoader } from "../pages/common/FoodDetails";
import CartPage from "../pages/user/cart/CartPage";
import ContactPage from "../pages/common/ContactPage";
import PaymentSuccess from "../pages/user/PaymentSuccess";
import PaymentCancel from "../pages/user/PaymentCancel";
import RestaurantLogin from "../pages/restaurant/RestaurantLogin";
import RestaurantLayout from "../layout/RestaurantLayout";
import RestaurantAuth from "./proectedRoutes/RestaurantAuth";
import RestaurantSignupPage from "../pages/restaurant/RestaurantSignupPage";
import RestaurantLogoutPage from "../pages/restaurant/RestaurantLogout";
import RestaurantHome from "../pages/restaurant/RestaurantHome";
import OrdersPage from "../pages/restaurant/OrdersPage";
import RestaurantFoodsPage from "../pages/restaurant/RestaurantFoodsPage";
import UpdateFood from "../pages/restaurant/UpdateFood";
import CreateFood from "../pages/restaurant/CreateFood";
import RestaurantDetails , {loader as restaurantLoader} from "../pages/common/restaurantPage/RestaurantDetails";
import ErrorPage from './../error-page';
import AdminLogin from "../pages/admin/AdminLogin";
import AdminAuth from "./proectedRoutes/AdminAuth";
import Adminlayout from "../layout/AdminLayout";
import AdminDashBoard from "../pages/admin/admin dashboard/AdminDashBoard";
import AdminLogoutPage from "../pages/admin/AdminLogout";
import ForgotPassword from "../pages/user/ForgotPassword";
import ResetPassword from "../components/user/ResetPassword";
import RestaurantForgotPassword from "../pages/restaurant/RestaurantForgotPassword";
import RestaurantResetPassword from "../components/restaurant/RestaurantResetPassword";

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
        loader: foodLoader,
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
      {
        path: "restaurant/login",
        element: <RestaurantLogin />,
      },
      {
        path: "restaurant/signup",
        element: <RestaurantSignupPage />,
      },
      {
        path: "restaurant/:restaurantId",
        element: <RestaurantDetails/>,
        loader: restaurantLoader,
      },
       {
         path: "login/admin",
         element: <AdminLogin/>,
       },
       {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "reset-password",
        element: <ResetPassword />,
      },
      {
        path: "restaurant/forgot-password",
        element: <RestaurantForgotPassword/>,
      },
      {
        path: "restaurant/reset-password",
        element: < RestaurantResetPassword/>,
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
    errorElement: <ErrorPage />,
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
        loader: foodLoader,
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
        element: <LogoutPage />,
      },
      {
        path: "payment/success",
        element: <PaymentSuccess />,
      },
      {
        path: "payment/cancel",
        element: <PaymentCancel />,
      },
      {
        path: "restaurant/:restaurantId",
        element: <RestaurantDetails/>,
        loader: restaurantLoader,
      },
      
    ],
  },
  {
    path: "restaurants",
    element: (
      <RestaurantAuth>
        <RestaurantLayout />
      </RestaurantAuth>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <RestaurantHome/>,
      },
      {
        path: "orders",
        element: <OrdersPage/>,
      },

      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "logout",
        element: <RestaurantLogoutPage />,
      },
      {
        path: "foods",
        element: <RestaurantFoodsPage/>,
      },
      {
        path: "update-food/:foodId",
        element: <UpdateFood/>,
      },
      {
        path:"create-food",
        element: <CreateFood />,
      }
    ],
  },
  {
    path: "admin",
    element: (
      <AdminAuth >
        <Adminlayout />
      </AdminAuth>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <AdminDashBoard/>,
      },
      {
        path: "orders",
        element: <OrdersPage/>,
      },

      {
        path: "restauarnts",
        element: <ContactPage />,
      },
      {
        path: "logout",
        element: <AdminLogoutPage />,
      },
      {
        path: "foods",
      },
    ],
  },
]);
