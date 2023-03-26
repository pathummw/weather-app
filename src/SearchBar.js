import React, { useState, useRef } from "react";
import styled from "styled-components";

export default function SearchBar(props) {
  const Button = styled.button`
    font-family: "Open Sans", sans-serif;
    font-weight: 500;
    font-size: 16px;
    background-color: #000000;
    color: whitesmoke;
    padding: 3px 20px;
    cursor: pointer;
    border: none;
    height: 50px;
  `;
  const Input = styled.input`
    font-family: "Open Sans", sans-serif;
    font-weight: 500;
    font-size: 16px;
    border: none ;
    height: 50px;
    padding: 0 10px ;
  `;

  const inputRef = useRef();
  const handleClick = () => {
    const name = inputRef.current.value;
    props.setSearchField(name);
  };

  return (
    <div>
      <Input type="text" ref={inputRef} name="search" placeholder="Enter city" />
      <Button onClick={handleClick}>Search</Button>
    </div>
  );
}
