import Hero from './components/Hero/Hero.js';
import SearchForm from './components/SearchForm/SearchForm.js';
import List from './components/List/List.js';
import Container from "./components/Container/Container";
import { NavBar } from "./components/NavBar/NavBar";

const App = () => {
  return (
    <main>
      <NavBar />
     <Container>
        <Hero />
        <SearchForm />
        <List />
    </Container>
    </main>
  );
};

export default App;