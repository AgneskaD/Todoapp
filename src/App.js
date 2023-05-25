import { Routes, Route } from "react-router-dom";

import Container from "./components/Container/Container";
import { NavBar } from "./components/NavBar/NavBar";
import { Home } from "./components/Home/Home";
import { Favourite } from "./components/Favourite/Favourite";
import { About } from "./components/About/About";
import { PageNotFound } from "./components/Error/PageNotFound";


const App = () => {
  return (
    <main>
      <NavBar />
     <Container>
     <Routes>
          <Route path="/" element={<Home />} />
          <Route path="favourite" element={<Favourite />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
    </Container>
    </main>
  );
};

export default App;