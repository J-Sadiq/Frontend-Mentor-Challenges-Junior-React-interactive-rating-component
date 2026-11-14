import star from "./assets/images/icon-star.svg";
import thankYou from "./assets/images/illustration-thank-you.svg";

function RatingCard() {
  return (
    <>
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
        <div className="rateNumbers">
          <div className="rateNumber">1</div>
          <div className="rateNumber">2</div>
          <div className="rateNumber">3</div>
          <div className="rateNumber">4</div>
          <div className="rateNumber">5</div>
        </div>
        <button className="btn-submit">Submit</button>
      </article>
      <article className="result-card card hidden">
        <header>
          <img src={thankYou} alt="" />
          <div>
            <p className="star-chossen">You select 4 out 0f 5</p>
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
