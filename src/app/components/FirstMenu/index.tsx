"use client";

import React, { useState } from "react";
import Link from "next/link";
import style from "./styles.module.css";
import { listItems } from "./utils/listItems";

export const FirstMenu = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (indexItem: number) => {
    setActiveIndex(indexItem);
  };

  return (
    <div className={style.container}>
      <div className={style.navigation}>
        <ul>
          {listItems.map((item, indexItem) => (
            <li
              key={indexItem}
              onClick={() => handleClick(indexItem)}
              className={`${style.list} ${
                activeIndex === indexItem ? style.active : ""
              }`}
            >
              <Link href="#">
                <span className={style.icon}>{item.icon()}</span>
                <span className={style.text}>{item.label}</span>
              </Link>
            </li>
          ))}
          <div className={style.indicator}></div>
        </ul>
      </div>
    </div>
  );
};
