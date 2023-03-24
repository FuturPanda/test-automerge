import { useState } from "react";
import Navbar from "./components/Navbar";
import { sendMessage } from "./controllers/sendMessage";

function App() {
  const [input, setInput] = useState("");
  const [listElement, setListElement] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (listElement == []) sendMessage([input]);
    else sendMessage([...listElement, input]);
    setListElement([...listElement, input]);
    setInput("");
  };
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <>
      {/* <Navbar /> */}
      <div className="container">
        <div className="container2">
          <ul className="messages"></ul>
          <form action="">
            <input
              type="text"
              onChange={handleInputChange}
              placeholder="Your text here"
              value={input}
            />
            <button type="submit" onClick={handleSubmit}>
              {" "}
              Save{" "}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
