import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  // If the values are in localStorage already, use them to initialize our useState call
  const [value, setStoredValue] = useState(() => {
    if (window.localStorage.getItem(key)) {
      return JSON.parse(window.localStorage.getItem(key)); // parse the string saved in local
      //storage back into a JavaScript object

      //Different syntax to achieve same reslut.
      //   const item = window.localStorage.getItem(key);
      //   return item ? JSON.parse(item) : initialValue;
      //   above is: if item exist then return SON.parse(item) else return initialValue
    }
    return initialValue;
  });
  const setValue = (newValue) => {
    // Save state
    setStoredValue(newValue);
    //Update the state of storedValue with value as well
    // Save to local storage
    window.localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, setValue];
};
