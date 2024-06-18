import React, { useEffect, useState } from "react";
import dishData from "./dishData";
import DishProps from "../dishProps/DishProps";
import './dishes.css'

function Dishes() {

    const [dishes, setDishes] = useState([])

    useEffect(() => {
        setDishes(dishData)
    }, [])

    const removeDish = (id) => {
        setDishes(dishes.filter(dish => (dish.id !== id)))
    }

    return (
        <div className="divDishes">
            <h2>Suggested dishes recipes</h2>
            <DishProps dishes={dishes} removeDish={removeDish}/>
        </div>
    )
}
export default Dishes;