import Button from "../Button/Button";
import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput';

const SearchForm = () => {
    return (
        <form className={styles.searchForm}>
           <TextInput placeholder="Search..." />
           <Button text="Search" />
        </form>
    );
};

export default SearchForm;