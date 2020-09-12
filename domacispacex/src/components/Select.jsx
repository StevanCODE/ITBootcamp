import React from "react"
import {v4 as uuidv4} from "uuid"


let today = new Date();
let date = today.getFullYear()
let years = []
for(let i = 2006; i <= date; i++){
    years.push(i)
}
export const Select = ({setYear}) => {
    return (
        <select key = {uuidv4()} onChange = {(event) => {
            setYear(event.target.value)
        }}>
        {years.map((el, i) => {
                if(i === 0){
                    return(
                        <option key = {uuidv4()} value = {"Choose a Year"}> Choose a Year</option>
                    )
                }
                else if(i === 1){
                    return(
                        <option key = {uuidv4()} value = {"Show All"}> Show All</option>
                    )
                }
                else {
                return(
                <option key = {uuidv4()} value = {el}>{el}</option>
                    )
            }

        })}
        </select>
    )

}