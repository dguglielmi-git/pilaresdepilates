"use client";
import { getDashboardCards } from "@/api/dashboard";
import { sourceSansProBold } from "@/styles/fonts/SourceSansPro";
import { DashBoardCard } from "@/types/DashboardCard";
import { useEffect, useState } from "react";
import LanguageSelector from "../LanguageSelector";
import DashboardCard from "./DashboardCard";
import Styles from "./MainDashboard.module.scss";

const MainDashboard = () => {
  const [dataCards, setDataCards] = useState<DashBoardCard[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: DashBoardCard[] = await getDashboardCards();
        setDataCards(response);
        console.log(response);
      } catch (error) {
        console.error(`Error fetching dataCards - Error: ${error}`);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={Styles["maindashboard"]}>
      <div className={Styles["maindashboard__header"]}>
        <h1 className={sourceSansProBold.className}>Main Dashboard</h1>
      </div>
      <div className={Styles["maindashboard__body"]}>
        <div className={Styles["maindashboard__body-header"]}>
          <div className={Styles["maindashboard__body-header-language"]}>
            <LanguageSelector />
          </div>
          <div className={Styles["maindashboard__body-header-datetime"]}>
            <span>Sunday, 28th May 10:00:00 a.m</span>
          </div>
        </div>

        <div className={Styles["maindashboard__body-cards"]}>
          {dataCards.map((card) => (
            <DashboardCard
              key={card.id}
              icon={card.icon}
              iconSize={card.iconSize}
              bodyText={card.bodyText}
              statusQuantity={card.statusQuantity}
              statusLabel={card.statusLabel}
              link={card.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
