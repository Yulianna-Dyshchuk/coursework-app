import React from "react";
import { Typography } from "@material-ui/core";
import { FooterLink } from "../FooterLink";
import styles from "./styles.module.css";

export const FooterList = ({ title, list, children }) => {
  return (
    <div className={styles.container}>
      <Typography variant="subtitle1" className={styles.title}>{title}</Typography>
      {list && list.map((item, index) => <FooterLink key={index} {...item} />)}
      {children}
    </div>
  );
};
