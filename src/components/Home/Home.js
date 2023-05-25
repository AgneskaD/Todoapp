import { Hero } from "../Hero/Hero";
import { SearchForm } from "../SearchForm/SearchForm";
import { List } from "../List/List";

export const Home = () => {
  return (
    <div>
      <Hero />
      <SearchForm />
      <List />
    </div>
  );
};