function MealProgression({ title, meals, onAction, actionLabel, getActionArg }) {
    return (
        <div className="column">
            <h3>{title}</h3>
                {meals.map(meal => (
                    <li key={meal.id} className="listItem">
                        {meal.meal}
                        <button onClick={() => onAction(getActionArg(meal))}>
                            {actionLabel}
                        </button>
                    </li>
                ))}
        </div>
    );
}

export default MealProgression