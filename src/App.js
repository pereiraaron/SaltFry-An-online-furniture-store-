import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer.js/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
import AboutScreen from "./screens/AboutScreen/AboutScreen";
import ErrorScreen from "./screens/ErrorPage/ErrorScreen";
import ProductScreen from "./screens/ProductScreen/ProductScreen";
import CartScreen from "./screens/CartScreen/CartScreen";
import ProductListScreen from "./screens/ProductListScreen/ProductListScreen";
import CheckoutScreen from "./screens/CheckoutScreen/CheckoutScreen";

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route path="/checkout" component={CheckoutScreen} />
        <Route path="/cart/:id?" component={CartScreen} />
        <Route path="/products/:id" component={ProductScreen} />
        <Route path="/products" component={ProductListScreen} />
        <Route path="/about" component={AboutScreen} />
        <Route exact path="/" component={HomeScreen} />
        <Route path="/login" component={LoginScreen} />
        <Route path="/register" component={RegisterScreen} />
        <Route path="*" component={ErrorScreen} />
      </Switch>
    </Router>
  );
}

export default App;
