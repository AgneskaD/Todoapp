import styles from "./Column.module.scss";

const Column = (props) => {
  return (
    <article>
      <h2>{props.title}</h2>
    </article>
  );
};

export default Column;