"use client";
import {
  sourceSansPro400,
  sourceSansPro600,
} from "@/styles/fonts/SourceSansPro";
import { DashboardCardProps } from "@/types/DashboardCardProps";
import Icon from "@mdi/react";
import Link from "next/link";
import Styles from "./DashboardCard.module.scss";

const DashboardCard = ({
  icon,
  iconSize,
  bodyText,
  statusQuantity,
  statusLabel,
  link,
}: DashboardCardProps) => {
  return (
    <div className={Styles["dashboardcard"]}>
      <Link href={link}>
        <div className={Styles["dashboardcard-icon"]}>
          <Icon path={icon} size={iconSize} />
        </div>
        <div className={Styles["dashboardcard-body"]}>
          <h2 className={sourceSansPro600.className}>{bodyText}</h2>
        </div>
        <div className={Styles["dashboardcard-status"]}>
          <div className={Styles["dashboardcard-status-quantity"]}>
            <span className={sourceSansPro400.className}>{statusQuantity}</span>
          </div>
          <div className={Styles["dashboardcard-status-label"]}>
            <span className={sourceSansPro400.className}>{statusLabel}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DashboardCard;
