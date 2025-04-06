import HomeFooter from "@/components/footer/footer.component";
import HomeHeader from "@/components/header/header.component";
import { Outlet } from "react-router-dom";

const CustomerPageLayout = () => {
  return (
    <div>
      <HomeHeader />
      <Outlet />
      <HomeFooter />
    </div>
  );
};

export default CustomerPageLayout;
