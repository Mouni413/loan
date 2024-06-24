import { Outlet } from "react-router-dom";
import Header from "./header/Header";

const MainLayout = () => {
  return (
    <>
      <Header />
      <div style={{ paddingTop: 50 }}>
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
