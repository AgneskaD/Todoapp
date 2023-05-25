import { Hero } from "../Hero/Hero";
import { SearchForm } from "../SearchForm/SearchForm";
import { Lists } from "../Lists/Lists";

export const Home = () => {
  return (
    <>
      <Hero />
      <SearchForm />
      <Lists />
    </>
  );
};