import styles from './List.module.scss';
import Column from "../Column/Column";

const List = () => {
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
        <Column title="HTML" />
        <Column title="CSS + SCSS" />
        <Column title="JavaScript" />
      </section>
      </div>
    );
  };
  
  export default List;