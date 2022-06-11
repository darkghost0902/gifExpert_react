import React from "react"

import GifExpert from "./GifExpert";
import { createRoot } from 'react-dom/client';
import './index.css';
//console.log(nuevo);
const divroot=createRoot(document.getElementById("root"));
divroot.render(<GifExpert/>);

