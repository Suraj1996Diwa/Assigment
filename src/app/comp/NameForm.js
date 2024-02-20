"use client"

import React, { useState } from 'react';
import axios from 'axios';


const NameForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [country, setCountry] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const agifyResponse = await axios.get(`https://api.agify.io?name=${name}`);
      const genderizeResponse = await axios.get(`https://api.genderize.io?name=${name}`);
      const nationalizeResponse = await axios.get(`https://api.nationalize.io?name=${name}`);

      setAge(agifyResponse.data.age);
      setGender(genderizeResponse.data.gender);
      setCountry(nationalizeResponse.data.country[0].country_id);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
      <p>name: {name}</p>
      <p>Age: {age}</p>
      <p>Gender: {gender}</p>
      <p>Country: {country}</p>
    </form>
  );
};

export default NameForm;