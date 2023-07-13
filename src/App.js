import React, { useEffect, useState } from "react";
import data from "./data";
import "./App.css";
import copy from "copy-to-clipboard";


const App = () => {
  const [text, settext] = useState("");
  const [author, setauthor] = useState("");
  const [numberArray, setNumberArray] = useState([1]);

  const ferin = () => {
    var value = [];
    var n = 0;
    var min = 1;
    var max = data.length - 1;
    for (var i = 0; i < 1; i++) {
      value.push(Math.floor(Math.random() * (max - min + 1) + min));
    }
    return value;
  };
  useEffect(() => {
    const number = ferin();
    setNumberArray([number]);
    settext(`${data[number].text}`);
    setauthor(`${data[number].author}`);
    // console.log("i am nummbr"+number);
  }, []);
  function genHandler() {
    const nextNumber = ferin();
    setNumberArray([nextNumber]);
    settext(`${data[nextNumber].text}`);
    setauthor(`${data[nextNumber].author}`);
  }
  function copyhandler(){
    copy(text);
    alert("You have copied");
  }

  return (
    <div className="warpper ">
      <div className="continer ">
        <div className="quotes">
        <div className="textDiv">{text}</div>
        <button className="clickm" onClick={copyhandler}>Copy this</button></div>
        <div className="author">-{author}</div>
        <div className="buttons">
          <div className="leftButton">
            <a href="https://twitter.com/"  className="firstTwet">
              <div className="tweeter">
              <button className="FirstF">tweeter</button></div>
            </a>
            <a href="https://www.tumblr.com/ " className="secondtumblr">
              <div className="Linkind">
              <button className="FirstS">Tumblr</button></div>
             
            </a>
          </div>
          <div className="rightButton" onClick={genHandler}>
            <button className="secondBu">New quotes</button>
          </div>
        </div>
      </div>
      <div className="name">Shreyas</div>
    </div>
  );
};

export default App;
