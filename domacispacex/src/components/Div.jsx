import React from "react"
import {v4 as uuidv4} from "uuid"

export const Div = ({launches,year,launchYear}) => {
    if(year === "Show All" || year == ""){
        return (
            launches.map(el => {
                  return (
                      <div key = {uuidv4()} id = "launches">
                      <p> {el.mission_name} </p>
                      <p> {el.launch_year}</p>
                      <img id = "img" src = {el.links.mission_patch} alt = {`${el.name} Mission Image`}></img>
                      </div>
                      )
                })
          )
    }
    else {
        return (
            launchYear.map(el => {
                return(
                   <div key = {uuidv4()} id = "launches">
                   <p> {el.mission_name} </p>
                   <p> {el.launch_year}</p>
                   <img id = "img" src = {el.links.mission_patch} alt = {`${el.name} Mission Image`}></img>
                   </div>
                )
            })
        )
    }

  }
  


