import { useState } from "react";
//import Input from "./input";
import DropSelect from "./dropSelector";
import { bookData } from "./data";
import "./styles.css";

//mui.com/components,text-fields/

export default function Search() {
  const [valueSearch, setValueSerach] = useState("");
  const [valueDrop, setValueDrop] = useState("");
  const [display, setDisplay] = useState(false);
  console.log("dropValue===", valueDrop);

  return (
    <div className="Home">
      <h1 className="LibrarySearch">Library Search</h1>
      <p>Search for books by keyword, title, or author</p>
      <br />
      <Inputs
        setValueSerach={setValueSerach}
        setValueDrop={setValueDrop}
        setDisplay={setDisplay}
      />
      {display ? (
        <SearchResults valueSearch={valueSearch} valueDrop={valueDrop} />
      ) : (
        <img className="UO" src="UO.png" alt="UO" />
      )}
    </div>
  );
}

function Inputs(props) {
  const { setValueSerach } = props;
  const { setValueDrop } = props;
  const { setDisplay } = props;
  const [selection, setSelection] = useState("Keyword");
  const [input, setInput] = useState("");
  const [select, setSelect] = useState("");

  function submit() {
    //if empty do help statement
    //else lift the state
    setValueSerach(input);
    setValueDrop(selection);
  }

  function setTheDisplay() {
    setDisplay(true);
  }
  return (
    <div>
      <select
        name="dropdown"
        onChange={(event) => {
          setSelection(event.target.value);
        }}
        className="dropdown"
      >
        <option value="Keyword">Keyword</option>
        <option value="Title">Title</option>
        <option value="Author">Author</option>
      </select>
      <input
        type="text"
        id="test"
        className="input"
        placeholder="Search..."
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button
        onClick={() => {
          submit();
          setTheDisplay();
        }}
        className="mGlass"
      >
        <span role="img" aria-label="search glass">
          {" "}
          &#x1F50E;
        </span>
      </button>
    </div>
  );
}

function Filter(input, props) {
  let filter = input.toUpperCase();

  switch (props) {
    case "title":
      console.log("title " + filter);
      break;
    case "keyword":
      searchByKeyword();
      console.log("keyword " + filter);
      break;
    case "author":
      console.log("author " + filter);
      break;
    default:
      return;
  }
}

export function searchByKeyword(data = [], keyword = "", value = "") {
  let finalArray = [];

  for (let i = 0; i < data.length; i++) {
    let obj1 = data[i];
    if (
      obj1[keyword] &&
      obj1[keyword].toLowerCase().indexOf(value.toLowerCase()) >= 0
    ) {
      finalArray.push(obj1);
    }
  }
  return finalArray;
}

function SearchResults(props) {
  const { valueDrop = "keyword" } = props;
  const { valueSearch = "" } = props;
  let data = searchByKeyword(bookData, valueDrop, valueSearch);
  console.log(valueDrop);
  console.log("DATA=", data);
  return (
    <>
      <h3>Results</h3>
      <fieldset className="text">
        {data.map((book, index) => (
          <div key={index}>
            <li>
              {book.Title}, {book.Author}
            </li>
          </div>
        ))}
      </fieldset>
    </>
  );
}
