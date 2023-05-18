import styles from "./ColumnForm.module.scss";
import { useState } from "react";
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

const ColumnForm = (props) => {
    const [title, setTitle] = useState("");
    const [icon, setIcon] = useState("");

    const handleSubmit = (e) => {
    e.preventDefault();
    props.action({ title: title, icon: icon });
    setTitle("");
    setIcon("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div>
        {" "}
        <label for="title" className={styles.label}>
          Title:
        </label>
        <TextInput
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        {" "}
        <label for="icon" className={styles.label}>
          Icon:
        </label>
        <TextInput
          type="text"
          value={icon}
          onChange={(e) => setIcon(e.target.value)}
        />
      </div>
      <div className={styles.button}>
        {" "}
        <Button>Add column</Button>{" "}
      </div>
    </form>
  );
};

export default ColumnForm;
