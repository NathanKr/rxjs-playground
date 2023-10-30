import {  registerHandlers2 } from "./handlers";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>RxJs + TypeScript</h1>
    <button>ClickMe</button>
  </div>
`;

registerHandlers2();
