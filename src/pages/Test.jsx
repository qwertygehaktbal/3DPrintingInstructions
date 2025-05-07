import React from "react";
import Button from "../components/Button";

const Test = () => {
  return (
    <div className="space-y-4 p-4">
      <Button>Default Button</Button>

      <Button variant="start">Start</Button>

      <Button variant="secondary">Secondary Button</Button>

      <Button variant="danger">Danger Button</Button>

      <Button to="/about">Go to About Page</Button>

      <Button
        href="https://example.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        External Link
      </Button>
    </div>
  );
};

export default Test;
