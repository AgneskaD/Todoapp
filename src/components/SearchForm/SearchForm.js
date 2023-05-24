import { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../Button/Button";
import { updateColumns } from "../../redux/store";
import TextInput from '../TextInput/TextInput';

const SearchForm = () => {
  const [title, setTitle] = useState("");

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

export default SearchForm;