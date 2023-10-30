import { registerHandlers } from "./handlers";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h3>Click on subscribe button -> Click on the UI -> check console</h3>
    <p>Refresh the page to unsubscribe</p>
    <button id='s1'>subscribeToClickEvents</button>
    <button id='s2'>subscribeWithThrottleToClickEvents</button>
  </div>
`;

registerHandlers();
