import React from "react";
import "./app.css";
import { routers } from "./routers";
import MainLayout from "./Components/Layouts";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {routers.map((route, index) => {
            const Layouts = route.layout ? route.layout : MainLayout;
            const path = route.path;
            const Components = route.components;
            return (
              <Route
                key={index}
                path={path}
                element={
                  <Layouts>
                    <Components />
                  </Layouts>
                }
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
