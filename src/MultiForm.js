import React from "react";
import { useState } from "react";

export function MultiForm() {
  const [count, setCount] = useState(1);
  const [myCar, setMyCar] = useState("");
  const [myColor, setMyColor] = useState("");
  const [myref, setMyRef] = useState();

  const handleChange = (event) => {
    setMyCar(event.target.value);
  };
  const handleChange2 = (event) => {
    setMyColor(event.target.value);
  };
  const handleChange3 = (event) => {
    setMyRef(event.target.value);
  };

  return (
    <div>
      <form>
        {count === 1 ? (
          <div>
            <label>MAKE</label>
            <input type="text" name="car" value={myCar} />
            <select value={myCar} onChange={handleChange}>
              <option value="AUDI">AUDI</option>
              <option value="BMW">BMW</option>
              <option value="VAUXHAL">VAUXHAL</option>
              <option value="MERCEDES">MERCEDES</option>
              <option value="PEUGEOT">PEUGEOT</option>
              <option value="RENAULT">RENAULT</option>
            </select>
            <button type="submit" onClick={() => setCount(count + 1)}>
              Next
            </button>
          </div>
        ) : null}
        {count === 2 ? (
          <div>
            <label>Color</label>
            <input type="text" name="color" value={myColor} />
            <select value={myColor} onChange={handleChange2}>
              <option value="Red">Red</option>
              <option value="Orange">Orange</option>
              <option value="Blue">Blue</option>
              <option value="Black">Black</option>
            </select>
            <button type="submit" onClick={() => setCount(count + 1)}>
              Next
            </button>
          </div>
        ) : null}
        {count === 3 ? (
          <div>
            <label>Code</label>
            <input
              type="text"
              name="ref"
              value={myref}
              onChange={handleChange3}
            />
            <button type="submit" onClick={() => setCount(count + 1)}>
              Done
            </button>
          </div>
        ) : null}

        {count === 4 ? (
          <div>
            <p>
              I have a <b> {myCar} </b> and the colour is <b> {myColor} </b>.
              {myColor === "Red" ? <p>THE CAR IS RED! NICE!!</p> : <p> </p>}
            </p>
            REF: {myref}
          </div>
        ) : null}
      </form>
    </div>
  );
}
