import React, { useState, useEffect } from "react";
import axios from "axios";
//  Feature debouncing
const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("");
  const [debouncedText, setdebouncedText] = useState(text);

  // Add useEffect Hook to set wait time for user keystrokes (watches text)
  useEffect(() => {
    const timerId = setTimeout(() => {
      // This function will be invoked as the user types without pausing
      setdebouncedText(text);
    }, 1000);

    // useEffect's cleanup function will invoke the returned function right after the next render happens.
    return () => {
      clearTimeout(timerId);
    };
    // We set useEffect to watch text because text is the data that gets modified in the parent component and is flowed down to this component. --> Gotta know how the data flows from parent to child (& vice versa)
  }, [text]);

  // Watches debouncedText --> this is the one which will get called after our timerId goes off
  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms - IwDlM",
          },
        }
      );

      setTranslated(data.data.translations[0].translatedText);
    };

    doTranslation();
  }, [language, debouncedText]);

  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  );
};

export default Convert;
