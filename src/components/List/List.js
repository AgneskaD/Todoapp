import styles from './List.module.scss';
import Column from "../Column/Column";
import { useEffect, useState } from "react";

const List = () => {
    const [columns, setColumns] = useState([
        { id: 1, title: "Books", icon: "book" },
        { id: 2, title: "Movies", icon: "film" },
        { id: 3, title: "Games", icon: "gamepad" },
      ]);
    
      useEffect(() => {
        setTimeout(() => {
          setColumns([...columns, { id: 4, title: "Test column" }]);
        }, 2000);
      }, []);
    
    return (
      <div className='list'>
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
          <Column key={column.id} title={column.title} icon={column.icon} />
        ))}
      </section>
      </div>
    );
  };
  
  export default List;