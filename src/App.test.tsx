import React from "react";
import { render, screen, renderHook } from "@testing-library/react";
import App from "./App";
import { useWrappedCallback } from "./components/Button";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("returns logged in user", () => {
  let { result: r1 } = renderHook(() =>
    useWrappedCallback(() => 1, {
      pre: (v) => v + 1,
      post: (v) => v + 2,
    })
  );

  expect(r1.current(5)).toEqual(3);

  let { result: r2 } = renderHook(() =>
    useWrappedCallback((v) => v * 2, {
      pre: (v) => v + 1,
      post: (v) => v + 2,
    })
  );

  expect(r2.current(5)).toEqual(14);
});
