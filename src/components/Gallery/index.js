import React, { useMemo } from "react";
import { useCategories } from "../../hooks";
import { Button, Typography } from "@material-ui/core";
import { Link, useRouteMatch } from "react-router-dom";
import { GalleryItem } from "../GalleryItem";
import styles from "./styles.module.css";

export const Gallery = ({ category, gallery }) => {
  const categories = useCategories();

  const filteredGallery = useMemo(() => {
    if (category !== "all") {
      return gallery.filter((item) => item.category.toLowerCase() === category.toLowerCase());
    }

    return gallery;
  }, [ category, gallery ]);

  const { url, params } = useRouteMatch();

  const getStyle = (current) => {
    if (current.toLowerCase() === "all" && url === "/portfolio") {
      return { backgroundColor: "lightgrey" };
    }

    if (current.toLowerCase() === params?.category?.toLowerCase()) {
      return { backgroundColor: categories.getColor(params?.category) };
    }

    return null;
  };

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <Typography variant="h2" className={styles.title}>Portfolio</Typography>
      </div>
      <div className={styles.categories}>
        <Typography variant="body1">Category:</Typography>
        <Link to="/portfolio" className={styles.button} style={getStyle("All")}>
          <Button variant="outlined" style={{ color: !!getStyle("All") ? "#ffffff" : null }}>All</Button>
        </Link>
        {categories.list.map(({ hash, value, to }) => {
          return (
            <Link key={hash} to={`/portfolio/${to}`} className={styles.button} style={getStyle(value)}>
              <Button variant="outlined" style={{ color: !!getStyle(value) ? "#ffffff" : null }}>{value}</Button>
            </Link>
          );
        })}
      </div>
      {!!filteredGallery.length ? (
        <div className={styles.gallery}>
          {filteredGallery.map((item) => <GalleryItem key={item.hash} {...item} />)}
        </div>
      ) : (
        <div className={styles.nothing}>
          <Typography variant="body2" className={styles.message}>Nothing to display...</Typography>
        </div>
      )}
    </div>
  );
};
