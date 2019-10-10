import React from "react";
import { CharacterDiv } from './componentStyles';

export default function CharacterCard(props) {
  const { name, gender, species, url, image } = props;
  
  return (
    <CharacterDiv>
      <div>
        <img src={image} alt=""/>
      </div>
      <p><span>Name:</span> {name}</p>
      <p><span>Gender:</span> {gender}</p>
      <p><span>Species:</span> {species}</p>
      <p id='link'><span>Link:</span> {url}</p>
    </CharacterDiv>);
}