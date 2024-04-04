import React, { useState } from "react";
import Blog from "./page/blog/blogs";
import PlanCare from "./page/plan/planCare";
import Header from "./Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import Shop from "./page/shop";
import Home from "./page/home";

const App = () => {
  const [shopCart, setShopCart] = useState(false);
  const [count,setCount] = useState(0);
  return (
    <Router>
      <>
        <Header setShopCart={setShopCart} count={count} />
        <Routes>
          <Route
            path="/shop"
            element={
              <Shop
                shopCart={shopCart}
                setShopCart={setShopCart}
                count={count}
                setCount={setCount}
              />
            }
          />
          <Route path="/blog" element={<Blog />} />
          <Route path="/plan" element={<PlanCare />} />
          <Route
            path="/"
            element={<Home count={count} setCount={setCount} />}
          />
        </Routes>
        <Footer />
      </>
    </Router>
  );
};

export default App;
