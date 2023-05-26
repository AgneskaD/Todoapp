import styles from "./SearchForm.module.scss";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../Button/Button";
import { TextInput } from "../TextInput/TextInput";
import {
  selectSearchInputValue,
  updateColumns,
} from "../../redux/searchInputRedux";

export const SearchForm = () => {
  const searchInputValue = useSelector((state) =>
    selectSearchInputValue(state)
  );
  const [title, setTitle] = useState(searchInputValue);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault(e);
    dispatch(updateColumns({ title }));
  };

    return (
       <form className={styles.searchForm} onSubmit={handleSubmit}>
      <TextInput
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder={"Search..."}
      />
      <Button>
        <span className="fa fa-search" />
      </Button>
    </form>
    );
};

