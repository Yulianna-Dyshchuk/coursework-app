import React from "react";
import { Typography } from "@material-ui/core";
import { FooterList } from "../FooterList";
import { Instagram, Facebook, Telegram, WhatsApp } from '@material-ui/icons';
import data from "./data.json";
import styles from "./styles.module.css";
import { classes } from "../../utils";
import { FooterSocialLink } from "../FooterSocialLink";

export const Footer = () => {
  const socialList = [
    { to: "", icon: <Instagram className={classes(styles.icon, styles.instagramIcon)} /> },
    { to: "", icon: <Facebook className={classes(styles.icon, styles.facebookIcon)} /> },
    { to: "", icon: <Telegram className={classes(styles.icon, styles.telegramIcon)} /> },
    { to: "", icon: <WhatsApp className={classes(styles.icon, styles.whatsappIcon)} /> },
  ];

  return (
    <footer className={styles.container}>
      <div className={styles.common}>
        {data.columns.map(({ title, links }, index) => {
          if (index !== data.columns.length - 1) {
            return <FooterList key={index} title={title} list={links} />;
          }

          return (
            <FooterList key={index} title={title} list={links}>
              <div className={styles.social}>
                {socialList.map((link, index) => <FooterSocialLink key={index} {...link} />)}
              </div>
            </FooterList>
          );
        })}
      </div>
      <div className={styles.rights}>
        <Typography variant="body2" className={styles.rightsText}>@All rights reserved! 2021</Typography>
      </div>
    </footer>
  );
};
