/* Задача 6. Задача. На кухню поступають замовлення. Спочатку ми додаємо їх у список “Очікують на виконання”, 
 якщо повар береться робити — замовлення переходить у список “Виконуються”,   якщо замовлення виконано — переходить 
 у список “Готові до виносу”. Якщо натиснути на “Подано” - страва зникає з таблиці */


import { useState } from "react"
import MealProgression from "./mealPrepManager/MealProgression.jsx"
import Header from "./mealPrepManager/Header.jsx"

function MealPrepManager() {

    const [newMeal, setNewMeal] = useState('')

    const meals = [
        { id: 1, name: 'Chicken Stir Fry' },
        { id: 2, name: 'Beef Tacos' },
        { id: 3, name: 'Vegetable Curry' },
        { id: 4, name: 'Salmon with Quinoa' },
        { id: 5, name: 'Pasta Primavera' }
    ];
    const [pendingList, setPendingList] = useState(() => [])
    const [cookingList, setCookingList] = useState(() => [])
    const [readyList, setReadyList] = useState(() => [])
    
    const handleMealChange = (e) => {
        setNewMeal(e.target.value);
    }

    function addNewMeal() {
        setPendingList(prevList => [
            ...prevList, 
            {
                id: new Date().getTime(), 
                meal: newMeal
            }
        ]);
    }

    function moveToCooking(meal) {
    setPendingList(prev => prev.filter(item => item.id !== meal.id));
    setCookingList(prev => [...prev, meal]);
    }

    function moveToReady(meal) {
    setCookingList(prev => prev.filter(item => item.id !== meal.id));
    setReadyList(prev => [...prev, meal]);
    }


    function serviceMeal(id) {
    setReadyList(prev => prev.filter(meal => meal.id !== id));
    }


    return ( 
        <div className="task">
            <h1>Meal Prep Manager</h1>
            <div style={{ marginBottom: '20px' }}>
                <Header
                    meals={meals}
                    newMeal={newMeal}
                    handleMealChange={handleMealChange}
                    addNewMeal={addNewMeal}
                    />
                <div className="sections">
                    <MealProgression
                        title="New Orders"
                        meals={pendingList}
                        onAction={moveToCooking}
                        actionLabel="Start Cooking"
                        getActionArg={(meal) => meal}
                    />

                    <MealProgression
                        title="Cooking"
                        meals={cookingList}
                        onAction={moveToReady}
                        actionLabel="Ready"
                        getActionArg={(meal) => meal}
                    />

                    <MealProgression
                        title="Service"
                        meals={readyList}
                        onAction={serviceMeal}
                        actionLabel="Service"
                        getActionArg={(meal) => meal.id}
                    />
                </div>                
            </div>
        </div>
     );
}

export default MealPrepManager;