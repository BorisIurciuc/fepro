import React from "react";
import {brotherhood} from './data'
import './style.css'
import { v4 } from "uuid";

function Lesson06() {
    return (
        <div className="container-brotherhood">
        <h1>lesson 06</h1>

            <h1>Lesson06</h1>
            {brotherhood.map((brother) => (
                <div key={brother.id}>
                    <h2>{brother.name}</h2>
                    <p>race: {brother.race}</p>
                    <ul>
                        {brother.skills.map((skill, index) => (
                            <li key={v4}>
                                {skill}
                            </li>
                        ))}
                    </ul>
                    <img src={brother.image} alt="" />
                </div>
            ))}
        </div>
    )
}
export default Lesson06;