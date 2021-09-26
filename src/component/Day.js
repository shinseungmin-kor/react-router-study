import dummy from '../db/data.json';
import React from 'react';
import { useParams } from "react-router-dom";

function Day() {

    const { day } = useParams();
    const wordList = dummy.words.filter(word => word.day === Number(day));
    // console.log(wordList);
    // console.log(a)


    return (
        <>
        <h2>day {day}</h2>
        <table>
            <tbody>
                {wordList.map(word => (
                    <tr key={word.id}>
                        <td>{word.eng}</td>
                        <td>{word.kor}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    );
}

export default Day;