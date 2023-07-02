import { useCallback, useEffect, useState } from "react";

export const useFormField = (initialValue) => {
  const [isFault, setIsFault] = useState(false);
  const [value, setValue] = useState(initialValue);
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  useEffect(() => {
    if (!value || value.length < 3) {
      setIsFault(true);
    } else {
      setIsFault(false);
    }
  }, [value]);

  return { value, onChange, isFault, setValue };
};
