import { useEffect, useState } from "react";
import axios from "axios";

export default function ComponentWithUseEffect() {
  const [showStatement, setShowStatement] = useState(false);
  const [boxPicked, setBoxPicked] = useState(0);
  const [image, setImage] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setShowStatement(true);
    }, 2000);
  }, []);

  useEffect(() => {
    if (boxPicked === 0) {
      setImage("");
    } else {
      fetchImage(boxPicked);
    }
  }, [boxPicked]);

  const fetchImage = async (boxId) => {
    if (boxId === 1) {
      const response = await axios.get(
        "https://randomfox.ca/floof/?ref=apilist.fun"
      );
      setImage(response.data.image);
    }
  };

  //   const [countOne, setCountOne] = useState(0);
  //   const [countTwo, setCountTwo] = useState(0);

  //   useEffect(() => {
  //     console.log("SOMETHING CHANGED");
  //   }, [countOne, countTwo]);

  //   useEffect(() => {
  //     console.log("SOMETHING ELSE CHANGED");
  //   }, [countTwo]);

  return (
    <div>
      {showStatement && (
        <>
          <h1 className="scary-text">Pick A Box</h1>
          <div className="box-container">
            <div
              id="1"
              className="box"
              onClick={(e) => setBoxPicked(parseInt(e.target.id))}
            >
              <h2>1</h2>
            </div>
            <div
              id="2"
              className="box"
              onClick={(e) => setBoxPicked(parseInt(e.target.id))}
            >
              <h2>2</h2>
            </div>
            <div
              id="3"
              className="box"
              onClick={(e) => setBoxPicked(parseInt(e.target.id))}
            >
              <h2>3</h2>
            </div>
          </div>
        </>
      )}
      {image && <img src={image} alt="" className="animal-image" />}
      {/* <h1>{countOne}</h1>
      <h1>{countTwo}</h1>
      <button onClick={() => setCountOne(countOne + 1)}>Add</button>
      <button onClick={() => setCountTwo(countTwo + 1)}>Add</button> */}
    </div>
  );
}
