import dishData from "./dishData";
import DishProps from "../dishProps/DishProps";
import './dishes.css'

function Dishes() {

    return (
        <div className="divDishes">
            <h2>Suggested dishes recipes</h2>
            <DishProps dishData={dishData}/>
        </div>
    )
}
export default Dishes;