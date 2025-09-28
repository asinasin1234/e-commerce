import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import WishList from "./Pages/WishList/WishList";
import AddCart from "./Pages/AddCart/AddCart";
import { useLocalStorage } from "./hooks/localStorage";
import ProductDetail from "./components/ProductDetail/ProductDetail";

function App() {
  const [wishlist, setWishlist] = useLocalStorage("wishlist", []);
  const [cart, setCart] = useLocalStorage("cart", []);

  const addToWishlist = (product) => {
    if (!wishlist.find((item) => item.id === product.id)) {
      setWishlist([...wishlist, product]);
    }
  };

  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, qty) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, qty) } : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const toggleWishlist = (product) => {
    if (wishlist.some((item) => item.id === product.id)) {
      setWishlist(wishlist.filter((item) => item.id !== product.id));
    } else {
      setWishlist([...wishlist, product]);
    }
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              toggleWishlist={toggleWishlist}
              wishlist={wishlist}
            />
          }
        />
        <Route
          path="/Products"
          element={
            <Products
              wishlist={wishlist}
              addToCart={addToCart}
              toggleWishlist={toggleWishlist}
              cart={cart}
            />
          }
        />
        <Route
          path="/product/:id"
          element={
            <ProductDetail
              wishlist={wishlist}
              addToCart={addToCart}
              toggleWishlist={toggleWishlist}
              cart={cart}
            />
          }
        />
        <Route
          path="/WishList"
          element={
            <WishList
              wishlist={wishlist}
              removeFromWishlist={removeFromWishlist}
            />
          }
        />
        <Route
          path="/AddCart"
          element={
            <AddCart
              cart={cart}
              updateQuantity={updateQuantity}
              removeFromCart={removeFromCart}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
