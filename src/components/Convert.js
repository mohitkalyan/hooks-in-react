import React, { useState, useEffect } from "react";
import axios from "axios";

console.log(process.env);

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("");
  const [debauncedText, setDebauncedText] = useState(text);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebauncedText(text);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debauncedText,
            target: language.value,
            key: process.env.REACT_APP_KEY,
          },
        }
      );
      setTranslated(data.data.translations[0].translatedText);
    };
    doTranslation();
  }, [language, debauncedText]);

  return (
    <div>
      <h1 className="ui header"> {translated} </h1>
    </div>
  );
};

export default Convert;
