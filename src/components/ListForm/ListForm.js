import styles from "../ColumnForm/ColumnForm.module.scss";
import { Button } from "../Button/Button";
import { TextInput } from "../TextInput/TextInput";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addList } from "../../redux/listsRedux";

export const ListForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addList({ title, description }));
    setTitle("");
    setDescription("");
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
          Description:
        </label>
        <TextInput
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className={styles.button}>
        <Button>Add new list</Button>
      </div>
    </form>
  );
};
