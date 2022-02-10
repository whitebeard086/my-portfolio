import React, { useState } from "react";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import { Container } from "./LayoutStyles";

export const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  }

  return (
    <Container>
      <Sidebar isOpen={isOpen} toggleSideBar={toggleSideBar} />
      <Header toggleSideBar={toggleSideBar} />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};
