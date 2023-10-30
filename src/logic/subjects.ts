import { Subject } from "rxjs";
import { NumberAndSender } from "../types/types";

// Creating an RxJS Subject as an example of an Observable to represent numberStream
export const numberStream = new Subject<number>();

// You might have some method or logic that emits numbers to this stream
export function sendNumber(num: number): void {
  // Emitting a number to the stream
  numberStream.next(num);
}

// Creating a Subject representing the number and sender stream
export const numberAndSenderStream = new Subject<NumberAndSender>();

// Example of emitting values into the stream
export function sendNumberWithSender(
  number: number,
  sender: chrome.runtime.MessageSender
) : void {
  numberAndSenderStream.next([number, sender]);
}
