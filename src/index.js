import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Prices } from "./pages/Prices";
import { NotFound } from "./pages/NotFound";
import { Portfolio } from "./pages/Portfolio";
import { StylesProvider } from "@material-ui/core";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ErrorBoundary } from "./components/ErrorBoundary";

const Root = () => {
  return (
    <React.StrictMode>
      <StylesProvider injectFirst={true}>
        <Provider store={store}>
          <BrowserRouter>
            <ErrorBoundary>
              <Navbar />
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/prices" component={Prices} />
                  <Route path="/portfolio" render={(params) => <Portfolio path={params.match.path} />} />
                  <Route path="*" component={NotFound} />
                </Switch>
              <Footer />
            </ErrorBoundary>
          </BrowserRouter>
        </Provider>
      </StylesProvider>
    </React.StrictMode>
  );
};

const rootNode = document.querySelector("#root");

ReactDOM.render(<Root />, rootNode);
