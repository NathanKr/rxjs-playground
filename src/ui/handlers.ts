import { fromEvent, throttleTime } from "rxjs";

export function registerHandlers() {
  document
    .getElementById("s1")
    ?.addEventListener("click", subscribeToClickEvents);
  document
    .getElementById("s2")
    ?.addEventListener("click", subscribeWithThrottleToClickEvents);
}

export function subscribeToClickEvents() {
  // clicks is of type Observable<Event>
  const clicks = fromEvent(document, "click");

  // subscribe on ALL 'click' events in the DOM --> every click is written to the console
  clicks.subscribe((event) => console.log(event));
}

export function subscribeWithThrottleToClickEvents() {
  // clicks is of type Observable<Event>
  const clicks = fromEvent(document, "click");

  // --- emit one event every 2000 ms
  const result = clicks.pipe(throttleTime(2000));
  // subscribe on ALL 'click' events in the DOM --> one click per 2000 ms is written to the console
  result.subscribe((event) => console.log(event));
}
