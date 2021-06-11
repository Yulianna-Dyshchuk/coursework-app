import React from "react";
import styles from "./styles.module.css";

export const FooterSocialLink = ({ to = "", icon = null }) => {
  return (
    <a href={to} className={styles.a}>
      {icon}
    </a>
  );
};
