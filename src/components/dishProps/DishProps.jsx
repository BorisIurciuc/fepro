import './style.css'
function DishProps ({dishes, removeDish}) {

    return (
        <div className="divDishProps">
            {dishes.map((dish) => (
                <li key={dish.id}>
                    <h3>{dish.name}</h3>
                    <p>{dish.description}</p>
                    <img src={dish.image} alt="" />
                    Ingredients:
                    <ol className="ingredient">
                        {dish.ingredients.map((ingredient) => (
                            <li key={ingredient.id}>
                                <p>{ingredient.name}</p>
                                <p>{ingredient.quantity}</p>
                            </li>
                        ))}
                    </ol>
                    <button onClick={() => removeDish(dish.id)}>remove</button>
                </li>
            ))}
        </div>
    )
}
export default DishProps;