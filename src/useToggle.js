import React from "react";

export default function useToggle() {
  const [toggle, setToggle] = React.useState(false);

  const switchToggle = () => {
    setToggle(!toggle);
  };

  return [toggle, switchToggle];
}
