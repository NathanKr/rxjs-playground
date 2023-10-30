import { fromEvent } from "rxjs";

export function registerHandlers() {
  // clicks is of type Observable<Event>
  const clicks = fromEvent(document, "click");

  // subscribe on ALL 'click' events in the DOM --> every click is written to the console
  clicks.subscribe((event) => console.log(event));
}
