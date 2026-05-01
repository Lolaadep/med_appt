import React, { useState } from "react";

function GiveReviews() {
  const [review, setReview] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Give Review</h2>

      <textarea
        placeholder="Write your review..."
        value={review}
        disabled={submitted}
        onChange={(e) => setReview(e.target.value)}
        style={{ width: "300px", height: "100px" }}
      />

      <br /><br />

      <button onClick={handleSubmit} disabled={submitted}>
        Submit
      </button>

      {submitted && <p>Review submitted successfully!</p>}
    </div>
  );
}

export default GiveReviews;