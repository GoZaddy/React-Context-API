import {createContext} from "react";

const ThemeContext = createContext(["light", () => {}]);
console.log(createContext);
export default ThemeContext;