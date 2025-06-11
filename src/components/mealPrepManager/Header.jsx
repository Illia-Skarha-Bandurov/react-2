function Header({ meals, newMeal, handleMealChange, addNewMeal }) {
    return ( 
        <div className="sections">
            <select onChange={handleMealChange} value={newMeal}>
                <option value="">Select a meal</option>
                {meals.map(meal => (
                    <option key={meal.id} value={meal.name}>{meal.name}</option>
                ))}  
            </select>
            <button onClick={!newMeal ? null: addNewMeal}>
                Order
            </button>
        </div>
     );
}

export default Header;