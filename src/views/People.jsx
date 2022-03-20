import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const People = () => {
  const { id } = useParams();
  const [people, setPeople] = useState();

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/${id}`)
      .then((res) => {
        console.log(res.data);
        setPeople(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return people ? (
    <div>
      <h1>{people.name}</h1>
      <h4>Height: {people.height}</h4>
      <h4>Mass: {people.mass}</h4>
      <h4>Hair Color: {people.hair_color}</h4>
      <h4>Skin Color: {people.skin_color}</h4>
    </div>
  ) : (
    <h1>No such person. Pleae try another ID. </h1>
  );
};

export default People;
