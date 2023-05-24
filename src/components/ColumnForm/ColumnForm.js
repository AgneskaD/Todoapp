import styles from "./ColumnForm.module.scss";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addColumn } from "../../redux/store";
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

const ColumnForm = () => {

    const [title, setTitle] = useState("");
    const [icon, setIcon] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_COLUMN", payload: { title, icon } });
    setTitle("");
    setIcon("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title" className={styles.label}>
          Title:
        </label>
        <TextInput
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="icon" className={styles.label}>
          Icon:
        </label>
        <TextInput
          type="text"
          value={icon}
          onChange={(e) => setIcon(e.target.value)}
        />
      </div>
      <div className={styles.button}>
      <Button>Add column</Button>
      </div>
    </form>
  );
};

export default ColumnForm;
