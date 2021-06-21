import React from "react";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export const FooterLink = ({ to = "", label, type, target }) => {
  return !type && !target ? (
    <Link to={to} className={styles.link}>
      <Typography variant="body2">{label}</Typography>
    </Link>
  ) : (
    <a href={to} type={type} target={target} className={styles.link}>
      <Typography variant="body2">{label}</Typography>
    </a>
  );
};
