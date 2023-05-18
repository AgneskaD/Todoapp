import styles from "./TextInput.module.scss";

const TextInput = (props) => {
  return (
    <input
      type="text"
      value={props.value}
      onChange={props.onChange}
      className={styles.input}
      placeholder={props.placeholder}
    />
  );
};

export default TextInput;