import { Fragment } from "react";
import { Provider } from "react-redux";
import store from "../components/Store/index";
import Head from "next/head";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import Layout from "../components/Layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="keywords" content="idle game, incremental, game" />
        <meta name="author" content="Nick Schroder" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>IdleWeb</title>
      </Head>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </Fragment>
  );
}

export default MyApp;
