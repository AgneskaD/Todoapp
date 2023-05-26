import styles from './List.module.scss';
import Column from "./../Column/Column";
import { ColumnForm } from "./../ColumnForm/ColumnForm";
import { SearchForm } from "../SearchForm/SearchForm";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { selectColumnsByList } from "../../redux/columnsRedux";

export const List = () => {
  const { listId } = useParams();

  const listData = useSelector((state) => selectListById(state, listId));
  const filteredColumns = useSelector((state) =>
  selectColumnsByList(state, listId)
  );
      
    if (!listData) return <Navigate to="/" />;
    return (
        <div className={styles.list}>
         <header className={styles.header}>
         <h2 className={styles.title}>{listData.title}</h2>
          </header>
          <p className={styles.description}>{listData.description}</p>
          <SearchForm />
      <section className={styles.columns}>
      {filteredColumns.map((column) => (
         <Column key={column.id} {...column} />
        ))}
      </section>
      <ColumnForm listId={listId} />
      </div>
    );
  };
  
