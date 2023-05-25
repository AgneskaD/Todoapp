import { Result } from "antd";
import { PageTitle } from "../PageTitle/PageTitle";
import styles from "../Hero/Hero.module.scss";

export const PageNotFound = () => {
  return (
    <>
      <PageTitle style={styles.title}>404 ERROR</PageTitle>
      <p className={styles.subtitle}>
        The page you are looking for does not exist. <br />
        How you got here is a mystery.
      </p>
      <Result status="404" />

      <p className={styles.subtitle}>
        But you can click the link below to go back to the homepage.
      </p>
      <PageTitle style={styles.title}>
        <a href="/">E.T. GO HOME</a>
      </PageTitle>
    </>
  );
};