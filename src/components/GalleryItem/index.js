import React from "react";
import { Typography } from "@material-ui/core";
import { useCategories } from "../../hooks";
import styles from "./styles.module.css";

export const GalleryItem = ({ title, category, imageUrl, shortDescription }) => {
  const { getColor } = useCategories();

  return (
    <div className={styles.container}>
      <div className={styles.image} style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className={styles.category} style={{ "backgroundColor": getColor(category) }}>
          <Typography variant="body2"><b>{category}</b></Typography>
        </div>
      </div>
      <div className={styles.content}>
        <Typography variant="body1" className={styles.title}>{title}</Typography>
        <Typography variant="body1" className={styles.description}>{shortDescription}</Typography>
      </div>
    </div>
  );
};
