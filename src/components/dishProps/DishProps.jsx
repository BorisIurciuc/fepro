import './style.css'
function DishProps ({dishData}) {

    return (
        <div className="divDishProps">
            {dishData.map((dish) => (
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
                </li>
            ))}
        </div>
    )
}
export default DishProps;