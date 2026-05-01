import React, { useState } from "react";

function GiveReviews() {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!rating) {
      alert("Please select a rating before submitting.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Give Review</h2>

      {/* Rating Selector */}
      <div style={{ marginBottom: "15px" }}>
        <label>
          Rating:{" "}
          <select
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            disabled={submitted}
          >
            <option value="">Select rating</option>
            <option value="1">1 - Poor</option>
            <option value="2">2 - Fair</option>
            <option value="3">3 - Good</option>
            <option value="4">4 - Very Good</option>
            <option value="5">5 - Excellent</option>
          </select>
        </label>
      </div>

      <textarea
        placeholder="Write your review..."
        value={review}
        disabled={submitted}
        onChange={(e) => setReview(e.target.value)}
        style={{ width: "300px", height: "100px" }}
      />

      <br />
      <br />

      <button
        onClick={handleSubmit}
        disabled={submitted || !review}
      >
        Submit
      </button>

      {submitted && (
        <div>
          <p>Review submitted successfully!</p>
          <p>Rating: {rating}/5</p>
          <p>Review: {review}</p>
        </div>
      )}
    </div>
  );
}

export default GiveReviews;
