import { useState } from "react";
import "./Carousel.css";
import Card from "./Card";


/** Carousel: displays images and arrows to navigate through them
 * 
 * Props:
 * - photos: array of {src, caption} objects
 * - title: string describing the collection of images
 * 
 * State:
 * - currCardIdx: integer for current card index
 * 
 * App --> Carousel --> Card
 */
 function Carousel({ photos, title }) {
  const [currCardIdx, setCurrCardIdx] = useState(0);
  const [shouldHide, setShouldHide] = useState(false);

  const toggleHide = () => {
    setShouldHide(!shouldHide);
  };

  const currCard = photos[currCardIdx];
  const total = photos.length;
  const cardNum = currCardIdx + 1;
  let classname;

  //Increments currCardIdx state by 1
  function goForward() {
    setCurrCardIdx(currCardIdx < 3 ? currCardIdx + 1 : 0);
  }

  function goBackward() {
    setCurrCardIdx( currCardIdx > 0 ? currCardIdx - 1 :  0)
  }

  return (
    <div className="Carousel">
      <h1>{title}</h1>
      <div className="Carousel-main">
        {cardNum === 1 ? <i className="" /> : <i className="bi bi-arrow-left-circle"
        onClick={goBackward}
        />
        }
        <Card
          caption={currCard.caption}
          src={currCard.src}
          currNum={cardNum}
          totalNum={total}
        />
        {cardNum === 3 ? <i className="" /> : <i className="bi bi-arrow-right-circle"
        onClick={goForward}
        />
        }
      </div>
    </div>
  );
}

export default Carousel;
