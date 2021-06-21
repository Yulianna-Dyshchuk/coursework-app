import React from "react";
import { Typography } from "@material-ui/core";
import styles from "./styles.module.css";
import { PriceItem } from "../../components/PriceItem";

export const D1 = () => (
  <Typography variant="body2">
    <br />
    Consultations / Meetings
    <br />
    <b>8 hours</b>
    of photo shooting
    <br />
    <b>Author photo processing</b>
    <br />
    Return <b>of 500 photos</b>
    <br />
    <b>15 photos</b>
    in the first 10 days
    <br />
    Printing <b>25 photo</b>
    <br />
    Photo on <b>a flash drive</b>
    <br />
    Return <b>in the original box</b>
    <br />
    <br />
    Return <b>in 30 days</b>
  </Typography>
);

export const D2 = () => (
  <Typography variant="body2">
    <br />
    Consultations / Meetings
    <br />
    <b>12 hours of photo shooting</b>
    <br />
    <b>Author photo processing</b>
    <br />
    Return <b>of 700 photos</b>
    <br />
    <b>15 photos</b> in the first 10 days
    <br />
    Printing <b>35 photo</b>
    <br />
    Photo on <b>a flash drive</b>
    <br />
    Return <b>in the original box</b>
    <br />
    <br />
    Return <b>in 40 days</b>
  </Typography>
);

export const D3 = () => (
  <Typography variant="body2">
    <br />
    Consultations / Meetings
    <br />
    <b>14 hours</b> of photo shooting
    <br />
    <b>Author photo processing</b>
    <br />
    Return <b>of 900 photos</b>
    <br />
    <b>15 photos</b> in the first 10 days
    <br />
    Printing <b>30x40 photobook</b>
    <br />
    Photo on <b>a flash drive</b>
    <br />
    Return <b>in the original box</b>
    <br />
    <br />
    Return <b>in 50 days</b>
  </Typography>
);

export const Prices = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Typography variant="h2" className={styles.title}>Prices</Typography>
      </div>
      <div className={styles.wrapper}>
        <PriceItem
          title="STANDART"
          description={<D1 />}
          price={500}
          imageUrl="https://blog.pokupon.ua/wp-content/uploads/2019/08/image3-9.jpg"
        />
        <PriceItem
          title="PREMIUM"
          description={<D2 />}
          price={1250}
          imageUrl="https://blog.pokupon.ua/wp-content/uploads/2019/08/image14-5.jpg"
        />
        <PriceItem
          title="ALL INCLUSIVE"
          description={<D3 />}
          price={2500}
          imageUrl="https://blog.pokupon.ua/wp-content/uploads/2019/08/image27-3.jpg"
        />
      </div>
    </div>
  );
};
