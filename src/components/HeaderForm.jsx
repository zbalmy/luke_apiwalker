import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const HeaderForm = () => {
  const [category, setCategory] = useState("");
  const [id, setId] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/${category}/${id}`);
  };

  return (
    <div>
      <h1>Luke APIwalker</h1>
      <form onSubmit={handleSubmit}>
        <p>
          Category:
          <select
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option hidden>Choose a category</option>
            <option value="planets">Planet</option>
            <option value="people">People</option>
          </select>
          ID:
          <input
            type="text"
            name="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <button>Search</button>
        </p>
      </form>
    </div>
  );
};

export default HeaderForm;
