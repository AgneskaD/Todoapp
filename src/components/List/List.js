import styles from './List.module.scss';
import Column from "./../Column/Column";
import ColumnForm from "./../ColumnForm/ColumnForm";
import { useState } from "react";
import shortid from "shortid";

const List = () => {
    const [columns, setColumns] = useState([
        {
            id: 1,
            title: "Books",
            icon: "book",
            cards: [
              { id: 1, title: "Eloquent JavaScript." },
              {
                id: 2,
                title: "Interaktywne strony WWW dla każdego.",
              },
            ],
          },
          {
            id: 2,
            title: "Movies",
            icon: "film",
            cards: [
              { id: 1, title: "React - The complete Guide" },
              {
                id: 2,
                title: "The complete JS course",
              },
            ],
          },
          {
            id: 3,
            title: "Framework",
            icon: "code",
            cards: [
              { id: 1, title: "HTML" },
              {
                id: 2,
                title: "CSS + SCSS",
              },
            ],
          },
      ]);
    
      const addColumn = (newColumn) => {
        setColumns([
            ...columns,
            {
                id: shortid(),
                title: newColumn.title,
                icon: newColumn.icon,
                cards: [],
              },
          ]);
      };
    
    return (
        <div className={styles.list}>
         <header className={styles.header}>
        <h2 className={styles.title}>
          Things to do<span>soon!</span>
        </h2>
          </header>
          <p className={styles.description}>
        Interesting things I want to check out
      </p>
      <section className={styles.columns}>
      {columns.map((column) => (
        <Column
        key={column.id}
        id={column.id}
        title={column.title}
        icon={column.icon}
        cards={column.cards}
      />
        ))}
      </section>
      <ColumnForm action={addColumn} />
      </div>
    );
  };
  
  export default List;