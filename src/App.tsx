import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { router } from "./routers/router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {router.map((route) => {
          return <Route path={route.path} element={route.element}></Route>;
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
