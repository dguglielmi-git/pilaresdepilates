import { menuHomeItems } from "@/shared/menuHomeItems";
import MainDashboard from "../MainDashboard";
import SideMenu from "../SideMenu";
import Styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={Styles["home"]}>
      <div className={Styles["home__left"]}>
        <SideMenu menuItems={menuHomeItems} />
      </div>
      <div className={Styles["home__right"]}>
        <MainDashboard />
      </div>
    </div>
  );
};

export default Home;
