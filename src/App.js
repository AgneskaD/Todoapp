import Container from "./components/Container/Container";
import { NavBar } from "./components/NavBar/NavBar";
import { Home } from "./components/Home/Home";
import { Favourite } from "./components/Favourite/Favourite";
import { About } from "./components/About/About";

const App = () => {
  return (
    <main>
      <NavBar />
     <Container>
     <Home />
     <Favourite />
     <About />
    </Container>
    </main>
  );
};

export default App;