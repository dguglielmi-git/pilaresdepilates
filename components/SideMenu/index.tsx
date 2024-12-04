"use client";
import { sourceSansPro400 } from "@/styles/fonts/SourceSansPro";
import { NodeMenu } from "@/types/NodeMenu";
import { SideMenuProps } from "@/types/SideMenuProps";
import Icon from "@mdi/react";
import isEmpty from "lodash/isEmpty";
import Image from "next/image";
import { useState } from "react";
import Styles from "./SideMenu.module.scss";

const SideMenu = ({ menuItems }: SideMenuProps) => {
  const [selectedByLevel, setSelectedByLevel] = useState<number[]>([]);
  const [idVisible, setIdVisible] = useState<boolean[]>([]);

  const selectItem = (item: NodeMenu) => {
    if (idVisible[item.id] === undefined) {
      idVisible[item.id] = true;
    } else {
      const temp = [...idVisible];
      temp[item.id] = !temp[item.id];
      setIdVisible(temp);
    }
    setSelectedByLevel((prevSelected) => {
      const updatedSelected = [...prevSelected];
      updatedSelected[item.level] = item.id;

      if (item.level > 0) {
        const parentItem = menuItems.find((menuItem) =>
          menuItem.nodes.includes(item)
        );
        updatedSelected[item.level - 1] = parentItem ? parentItem.id : -1;
      }

      updatedSelected.splice(item.level + 1);
      return updatedSelected;
    });
  };

  const isItemSelected = (item: NodeMenu) =>
    selectedByLevel[item.level] === item.id;

  const renderNodes = (nodes: NodeMenu[]) => {
    return nodes.map((item: NodeMenu) => (
      <div key={item.id}>
        <div
          className={`${Styles["sidemenu__menuarea-menuitem"]} ${
            isItemSelected(item) ? Styles["active"] : ""
          }`}
          onClick={() => selectItem(item)}
        >
          <div className={Styles["sidemenu__menuarea-menuitem-icon"]}>
            <Icon
              path={item.icon}
              size={item.iconSize}
              color={`${isItemSelected(item) ? "white" : "rgb(4, 71, 134)"}`}
            />
          </div>
          <div className={Styles["sidemenu__menuarea-menuitem-text"]}>
            <h4 className={sourceSansPro400.className}>{item.label}</h4>
          </div>
        </div>
        {!isEmpty(item.nodes) && idVisible[item.id] && (
          <div className={`${Styles["sidemenu__menuarea-menuitem-subitem"]}`}>
            {renderNodes(item.nodes)}
          </div>
        )}
      </div>
    ));
  };

  return (
    <div className={Styles["sidemenu"]}>
      <div className={Styles["sidemenu__header"]}>
        <div className={Styles["sidemenu__header-logo"]}>
          <Image
            src="/logo_small.png"
            alt="Logo Snappy"
            width={100}
            height={100}
          />
        </div>
      </div>
      <div className={Styles["sidemenu__menuarea"]}>
        {renderNodes(menuItems)}
      </div>
      <div className={Styles["sidemenu__footer"]}></div>
    </div>
  );
};

export default SideMenu;
