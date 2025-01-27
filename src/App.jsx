import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Landingpage from "./pages/landingpage";
import About from "./pages/About";
import LastMonthExpenses from "./pages/LastMonthExpenses";
import TrackExpenses from "./pages/TrackExpenses";
import Login from "./pages/Login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Nav />
          <Landingpage />
          <Footer />
        </>
      ),
    },
    {
      path: "/aboutus",
      element: (
        <>
          <Nav />
          <About />
          <Footer />
        </>
      )
    },
    {
      path: "/lme",
      element: (
        <>
          <Nav />
          <LastMonthExpenses />
          <Footer />
        </>
      )
    },
    {
      path: "/trackexpenses",
      element: (
        <>
          <Nav />
          <TrackExpenses />
          <Footer />
        </>
      )
    },
    {
      path: "/login",
      element: (
        <>
          <Nav />
          <Login />
          <Footer />
        </>
      )
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
