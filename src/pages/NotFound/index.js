import React from "react";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export const NotFound = () => {
  return (
    <main className={styles.container}>
      <div className={styles.message}>
        <Typography variant="h2">404</Typography>
        <Typography variant="body2">
          Ooops... URL is not found! <Link to="/" className={styles.link}>Do you want to go to the home page?</Link>
        </Typography>
      </div>
    </main>
  );
};
