import React from "react";
import styled from "styled-components";

export default function SearchBar() {
  const Button = styled.button`
    font-family: "Open Sans", sans-serif;
    font-weight: 500;
    font-size: 16px;
    background-color: #000000;
    color: whitesmoke;
    padding: 3px 20px;
    cursor: pointer;
  `;
  const Input = styled.input`
    font-family: "Open Sans", sans-serif;
    font-weight: 500;
    font-size: 16px;
  `;
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  const handleClick = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <Input type="text" name="search" onChange={handleChange} />
      <Button onClick={handleClick}>Search</Button>
    </div>
  );
}
