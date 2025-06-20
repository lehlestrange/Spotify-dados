import React from "react";

export default function topHundredSongs(props:any){
    
    return (
        <>
        </>
    )
}

/*To store duplicate values from an array, loop through the array and keep track of how many times each value appears (using an object or Map). Then, collect the values that appear more than once into a new array.

Example approach:

Count occurrences of each value.
Store values with a count greater than 1 in a new array.
This way, you get an array of all duplicate values.*/

/*const arr = ["a", "b", "a", "c", "b", "a"];
const counts: { [key: string]: number } = {};

arr.forEach(song => {
  counts[value] = (counts[value] || 0) + 1;
});*/

// counts = { a: 3, b: 2, c: 1 }