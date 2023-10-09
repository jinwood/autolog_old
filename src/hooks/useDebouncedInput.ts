import { useState, useEffect, type ChangeEvent } from "react";

export default function useDebouncedInput(
  initialValue: string | number,
  delay = 300,
) {
  const [inputValue, setInputValue] = useState(initialValue);
  const [debouncedValue, setDebouncedValue] = useState(initialValue);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const debounce = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        setDebouncedValue(inputValue);
      }, delay);
    };

    debounce();

    return () => {
      clearTimeout(timer);
    };
  }, [inputValue, delay]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return {
    inputValue,
    debouncedValue,
    handleInputChange,
  };
}
