import { expect, test } from "vitest";
import {
  numberAndSenderStream,
  numberStream,
  sendNumber,
  sendNumberWithSender,
} from "../src/logic/subjects";

test("sendNumber is ok", () => {
  let res;
  numberStream.subscribe((n) => {
    res = n;
  });
  sendNumber(23);
  expect(res).toBe(23);
});

test("sendNumberWithSender is ok", () => {
  // numberStream is an RxJs Observable
  let n1, sender1;
  numberAndSenderStream.subscribe(([n, sender]) => {
    n1 = n;
    sender1 = sender;
  });
  const sender: chrome.runtime.MessageSender = {};
  sendNumberWithSender(2, sender);
  expect(n1).toBe(2);
  expect(sender1).toEqual({})
});
