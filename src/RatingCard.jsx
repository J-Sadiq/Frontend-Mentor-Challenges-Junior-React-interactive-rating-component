import { useState } from "react";
import star from "./assets/images/icon-star.svg";
import thankYou from "./assets/images/illustration-thank-you.svg";

function RatingCard() {
  const [number, setNumber] = useState(0);

  function handleNumberChange(e) {
    // Update The State
    setNumber(e.target.textContent);

    // Remove selected class from all childs
    const parent = e.target.parentElement;
    parent.querySelectorAll(".rateNumber").forEach((element) => {
      element.classList.remove("selected");
    });

    // add selected class to the slected item
    e.target.classList.add("selected");
  }

  // Click the Submit Button
  function handleSubmit() {
    document.querySelector(".rating-card").classList.add("hidden");
    document.querySelector(".result-card").classList.remove("hidden");
  }

  console.log(number);
  return (
    <>
      {/* Rating Card */}
      <article className="rating-card card">
        <header>
          <div className="star-box">
            <img src={star} alt="" />
          </div>
        </header>
        <div className="main">
          <h1 className="title">How did we do?</h1>
          <p className="description">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
        </div>
        <ul className="rateNumbers">
          {[1, 2, 3, 4, 5].map((number, index) => (
            <li
              className="rateNumber"
              key={index}
              onClick={(e) => handleNumberChange(e)}
            >
              {number}
            </li>
          ))}
        </ul>
        <button className="btn-submit" onClick={handleSubmit}>
          Submit
        </button>
      </article>
      {/* Result Card */}
      <article className="result-card card hidden">
        <header>
          <img src={thankYou} alt="" />
          <div>
            <p className="star-chossen">You select {number} out 0f 5</p>
          </div>
        </header>
        <div>
          <h1 className="title result-title">Thank You</h1>
          <p className="description result-description">
            We apperciate you taking the time to give a rating. if you ever need
            more support. don't esitate to get in touch!
          </p>
        </div>
      </article>
    </>
  );
}

export default RatingCard;
