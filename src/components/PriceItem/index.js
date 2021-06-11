import React from "react";
import { Typography } from "@material-ui/core";
import styles from "./styles.module.css";

export const PriceItem = ({ title, description, price, imageUrl }) => {
  return (
    <div className={styles.container}>
      <div className={styles.image} style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className={styles.price}>
          <Typography variant="body2"><b>{price}</b> uah</Typography>
        </div>
      </div>
      <div className={styles.content}>
        <Typography variant="body1" className={styles.title}>{title}</Typography>
        <Typography variant="body1" className={styles.description}>{description}</Typography>
      </div>
    </div>
  );
};
