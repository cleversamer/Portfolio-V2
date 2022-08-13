import { useState } from "react";

const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(!!initialValue);

  return { value, setValue };
};

export default useToggle;
