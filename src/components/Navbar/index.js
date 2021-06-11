import React, { useEffect, useRef, useState } from "react";
import { Typography } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import { Link, useHistory } from "react-router-dom";
import { classes } from "../../utils";
import { NavbarSelect } from "../NavbarSelect";
import { useApi, useCategories, useQuery } from "../../hooks";
import styles from "./styles.module.css";

export const Navbar = () => {
  const ref = useRef();
  const api = useApi();
  const query = useQuery();
  const categories = useCategories();
  const history = useHistory();
  const [ offset, setOffset ] = useState(0);
  const [ search, setSearch ] = useState(query.get("search") !== null ? query.get("search") : "");
  const [ isSearchInput, setIsSearchInput ] = useState(query.get("search") !== null);

  useEffect(() => {
    window.addEventListener("scroll", () => setOffset(window.pageYOffset));

    return () => window.removeEventListener("scroll", () => {});
  }, []);

  useEffect(() => {
    api.getCategories({ debug: true }).then((data) => categories.set(data));
  }, []);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!!search) {
      history.push(`/portfolio?search=${search}`);
    } else {
      history.push(`/portfolio`);
      setIsSearchInput(false);
    }

    ref.current.blur();
  };

  const handleShowInput = () => {
    setIsSearchInput(true);

    setTimeout(() => {
      ref.current.focus();
    }, 100);
  };

  return (
    <header className={classes(styles.container, offset > 70 ? styles.containerHidden : "")}>
      <Link to="/" className={styles.navLink}>
        <Typography variant="overline" component="h1" className={styles.author}>Yulianna Dyshchuk</Typography>
      </Link>
      <nav className={styles.menu}>
        <Link to="/prices" className={styles.navLink}>
          <Typography variant="subtitle1">Prices</Typography>
        </Link>
        <Link to="/contacts" className={classes(styles.hm24, styles.navLink)}>
          <Typography variant="subtitle1">Contacts</Typography>
        </Link>
        <NavbarSelect links={categories.list} baseUrl="/portfolio" />
      </nav>
      <form className={styles.search} onSubmit={handleSubmit}>
        {isSearchInput ? (
          <input
            ref={ref}
            type="text"
            value={search}
            className={styles.searchInput}
            placeholder="Enter your request..."
            onChange={handleChange}
          />
        ) : <SearchIcon className={styles.searchIcon} onClick={handleShowInput} />}
      </form>
    </header>
  );
};
