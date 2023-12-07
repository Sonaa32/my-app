import { useState } from "react";
import styles from "./Rating.module.css";

export function Rating() {
  const [rating, setRating] = useState<number | undefined>(undefined);
  const [Submit, setSubmit] = useState(false);

  function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmit(true);
  }

  return Submit ? (
    <div className={styles.panel}>
      <img
        className={styles.illustrationThankYou}
        src="/images/illustration-thank-you.svg"
      ></img>
      <p className={styles.selected}> You have seletced {rating} out of 5</p>
      <h1 className={`${styles.h1} ${styles.center}`}> Thank you!</h1>

      <p className={`${styles.p} ${styles.center}`}>
        We appricate you taking the time to give a rating. if you ever need more
        suport, don't hesitate to get in touch!
      </p>
    </div>
  ) : (
    <form
      onSubmit={(handleFormSubmit) => setSubmit(true)}
      className={styles.panel}
    >
      <img className={styles.star} src="/images/icon-star.svg"></img>

      <h1 className={styles.h1}> How did we do? </h1>
      <p className={styles.p}>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering !
      </p>
      {[1, 2, 3, 4, 5].map((rating) => (
        <button
          type="button"
          key={rating}
          className={styles.button1}
          onClick={()  =>  setRating (rating)}
        >
          {rating}
        </button>
      ))}

      <button disabled={Rating === undefined} className={styles.submit}>
        Submit
      </button>
    </form>
  );
}
