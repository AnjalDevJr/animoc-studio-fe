import HomeFooter from "@/components/footer/footer.component";
import HomeHeader from "@/components/header/header.component";
import { Outlet } from "react-router-dom";

const HomePageLayout = () => {
  return (
    <>
      <HomeHeader />
      <Outlet />
      <HomeFooter />
    </>
  );
};

export default HomePageLayout;
