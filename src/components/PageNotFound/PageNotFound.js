/* eslint-disable react/jsx-no-undef */

import { PageTitle } from "../PageTitle/PageTitle";
import { Link } from "react-router-dom";
import styles from "../Hero/Hero.module.scss";

export const PageNotFound = () => {
  return (
    <>
      <PageTitle style={styles.title}>404 ERROR</PageTitle>
      <p className={styles.subtitle}>
        The page you are looking for does not exist. <br />
        How you got here is a mystery.
      </p>
      // eslint-disable-next-line react/jsx-no-undef
      <Result status="404" />

      <p className={styles.subtitle}>
        But you can click the link below to go back to the homepage.
      </p>
      <PageTitle style={styles.title}>
        <Link to="/">E.T. GO HOME</Link>
      </PageTitle>
    </>
  );
};