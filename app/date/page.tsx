"use client";
import { SetStateAction, useState } from "react";

function MyForm() {
  const [birthdate, setBirthdate] = useState("");
  const date = new Date("2024-06-12");
  const isoDateString = date.toISOString();
  
  const handleInputChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setBirthdate(event.target.value);
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="birthdate">Enter your birthdate:</label>
        <input
          type="date"
          id="birthdate"
          name="birthdate"
          value={birthdate}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>

      <div>
        <h1>Date Format</h1>

        <div>
          <p>{birthdate}</p>
          <p> date is {isoDateString}</p>
        </div>
      </div>
    </div>
  );
}

export default MyForm;
