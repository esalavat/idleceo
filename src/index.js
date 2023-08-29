import React from "react";
import Game from "./Game.jsx";
import { createRoot } from 'react-dom/client';
import "./game.scss";

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Game />);