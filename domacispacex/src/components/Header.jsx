import React from 'react';
import {v4 as uuidv4} from "uuid"


export const Header = ({info}) => {
    return ( 
    <>
    <header key = {uuidv4()} id = "header"> {info.name} </header>
    <header key = {uuidv4()} id = "header2"> {info.ceo} </header>
    </>
    )
  
  }