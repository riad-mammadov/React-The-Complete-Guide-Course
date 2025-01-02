import { useState } from "react";
function Greeting() {
  const [changedText, setChangedText] = useState();

  function changeTextHandler() {
    setChangedText(true);
  }
  return (
    <div>
      <h2>Hello world</h2>
      {!changedText && <p>Its good to see you</p>}
      {changedText && <p>Changed</p>}
      <button onClick={changeTextHandler}>Change text</button>
    </div>
  );
}

export default Greeting;
