import styles from "./CardForm.module.scss";
import { useState } from "react";
import Button from "./../Button/Button";
import TextInput from "./../TextInput/TextInput";

const CardForm = ({ action, columnId }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    action({ title }, columnId);
    setTitle("");
  };

  return (
    <form className={styles.cardForm} onSubmit={handleSubmit}>
   <TextInput
        className={styles.input}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    <Button>+</Button>
    </form>
  );
};

export default CardForm;
