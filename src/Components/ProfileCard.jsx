import React, { useState } from "react";

function ProfileCard() {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john@example.com");
  const [phone, setPhone] = useState("123-456-7890");
  const [edit, setEdit] = useState(false);

  return (
    <div
      style={{
        width: "320px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        textAlign: "center",
      }}
    >
      <h2>Profile</h2>

      {!edit ? (
        <>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Phone:</strong> {phone}</p>

          <button onClick={() => setEdit(true)}>Edit</button>
        </>
      ) : (
        <>
          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br /><br />

          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br /><br />

          <input
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <br /><br />

          <button onClick={() => setEdit(false)}>Save</button>
        </>
      )}
    </div>
  );
}

export default ProfileCard;
