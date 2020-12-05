import React from "react";
import NavMenu from "./NavMenu";

const MainSection = ({ openDrawer, setOpenDrawer }) => {
  return (
    <main style={{ display: "flex" }}>
      <NavMenu openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
      <h2>Main Section</h2>
    </main>
  );
};

export default MainSection;
