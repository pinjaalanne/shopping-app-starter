import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import Root from "./routes/Root";
import About from "./routes/About";
import Products from "./routes/Products";
import Product from "./routes/Product";
import Cart from "./routes/Cart";
import NotFound404 from "./routes/NotFound404";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/products/:id",
          element: <Product />,
        },
        {
          path: "/Cart",
          element: <Cart />,
        },
        {
          path: "*",
          element: <NotFound404 />,
        }
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider
        router={router}>
      </RouterProvider>
    </Provider >);
}

export default App;
