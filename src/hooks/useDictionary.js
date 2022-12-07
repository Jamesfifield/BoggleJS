import { useState } from "react";
import dictionary from "../api/dictionary";

export const useDictionary = (initValue = null) => {
  const [wordList, setWordList] = useState(initValue);
  const addWord = (list, word = "", onRej) => {
    if (word.length > 2 && !wordList.includes(word)) {
      dictionary
        .get(`/${word}`)
        .then((e) => setWordList([...list, word]))
        .catch((err) => {
          if (onRej) onRej(err);
        });
    } else {
      setWordList([...list]);
    }
  };

  return [wordList, addWord];
};
