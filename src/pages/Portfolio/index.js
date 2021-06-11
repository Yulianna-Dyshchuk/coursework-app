import React, { useEffect, useMemo, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { Gallery } from "../../components/Gallery";
import { useApi, useQuery } from "../../hooks";
import styles from "./styles.module.css";

export const Portfolio = ({ path }) => {
  const api = useApi();
  const query = useQuery();
  const [ gallery, setGallery ] = useState([]);

  useEffect(() => {
    api.getGallery({ debug: true }).then((data) => setGallery(data));
  }, []);

  const filteredGallery = useMemo(() => {
    const search = query.get("search")?.toLowerCase() || "";

    return gallery.filter((item) => item.title.toLowerCase().includes(search));
  }, [ gallery, query.get("search") ]);

  return (
    <main className={styles.container}>
      <Switch>
        <Route exact path={`${path}/`} render={() => <Gallery category="all" gallery={filteredGallery} />} />
        <Route
          exact
          path={`${path}/:category`}
          render={(params) => <Gallery category={params.match.params.category} gallery={gallery} />}
        />
      </Switch>
    </main>
  );
};
