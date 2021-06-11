import React from "react";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { classes } from "../../utils";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import styles from "./styles.module.css";

export const NavbarSelect = ({ links = [], baseUrl = "/" }) => {
  return (
    <div className={styles.navSelect}>
      <Link to="/portfolio" className={styles.textDecorationNone}>
        <Typography variant="subtitle1">Portfolio</Typography>
      </Link>
      {!!links && !!links.length ? (
        <React.Fragment>
          <ArrowDropDownIcon />
          <div className={styles.navSelectPopup}>
            {links.map(({ hash, value, to }) => {
              return (
                <Link key={hash} to={`${baseUrl}/${to}`} className={classes(styles.navLink, styles.navSelectItem)}>
                  <Typography variant="subtitle1">{value}</Typography>
                  <ArrowRightIcon type="right" className={styles.navSelectItemIcon} color="action" />
                </Link>
              );
            })}
          </div>
        </React.Fragment>
      ) : null}
    </div>
  );
};
