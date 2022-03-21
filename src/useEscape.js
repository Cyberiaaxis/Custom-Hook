import React from "react";

export default function useEscape() {
  const [escape, setEscape] = React.useState(false);

  const closeToggle = (e) => {
    if (e.key === "Escape") {
      setEscape(true);
    }
  };

  return [escape, closeToggle];
}
