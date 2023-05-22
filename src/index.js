import { createRoot } from "react-dom/client";
import App from './App';
import './styles/normalize.scss';
import './styles/global.scss';
import 'font-awesome/css/font-awesome.min.css';

const container = document.querySelector("#root");

createRoot(container).render(<App />);