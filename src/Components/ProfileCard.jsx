import React, { useState } from "react";

function ProfileCard() {
  const [name, setName] = useState("John Doe");
  const [edit, setEdit] = useState(false);

  return (
    <div style={{
      width: "300px",
      margin: "50px auto",
      padding: "20px",
      border: "1px solid #ccc",
      borderRadius: "10px",
      textAlign: "center"
    }}>
      <h2>Profile</h2>

      {!edit ? (
        <>
          <p>Name: {name}</p>
          <button onClick={() => setEdit(true)}>Edit</button>
        </>
      ) : (
        <>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br /><br />
          <button onClick={() => setEdit(false)}>Save</button>
        </>
      )}
    </div>
  );
}

export default ProfileCard;