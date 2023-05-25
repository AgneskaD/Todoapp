import styles from './List.module.scss';
import Column from "./../Column/Column";
import ColumnForm from "./../ColumnForm/ColumnForm";
import { useSelector } from "react-redux";
import {
  selectAllColumns,
  selectColumnsByList,
  selectListById,
} from "../../redux/store";

export const List = () => {
  const columns = useSelector(selectAllColumns);
  const listData = useSelector((state) => selectListById(state));
  const filteredColumns = useSelector((state) =>
    selectColumnsByList(state, listData)
  );
      
    return (
        <div className={styles.list}>
         <header className={styles.header}>
        <h2 className={styles.title}>
        {listData.title}
          <span>soon!</span>
        </h2>
          </header>
          <p className={styles.description}>{listData.description}</p>
      <section className={styles.columns}>
      {filteredColumns.map((column) => (
         <Column key={column.id} {...column} />
        ))}
      </section>
      <ColumnForm />
      </div>
    );
  };
  
