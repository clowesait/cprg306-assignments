"use client";
import { useEffect, useState } from "react";

// async function that fetches meal ideas from the mealdb API
// returns an array of meal objects or and empty array if no meals are found
async function fetchMealIdeas(ingredient) {
    try { 
        const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
        );
        const data = await response.json();

        if (!data.meals) {
            return  [];
        }

        return data.meals;
    } catch (error) {
        console.error("Error: ", error);
        return [];
    }
}

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);

    // async function to fetch meal ideas
    const loadMealIdeas = async () => {
        if (!ingredient) {
          setMeals([]);
          return;
        }
        const fetchedMeals = await fetchMealIdeas(ingredient);
        setMeals(fetchedMeals);
      };
      

    // useEffect to fetch meals whenever the ingredient changes
    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    return (
        <div>
            <h1 className="font-bold text-4xl">Meal Ideas</h1>
            {meals.length > 0 && <h2>Meal Ideas for "{ingredient}"</h2>}
            {ingredient && meals.length === 0 && <h2>No meal ideas found for {ingredient}</h2>}
            {!ingredient && <h2>Select an ingredient to see meal ideas</h2>}
            <ul>
                {meals.map((meal) => (
                    <li key={meal.idMeal}>
                        <img src={meal.strMealThumb} alt={meal.strMeal} width="100" />
                        <span>{meal.strMeal}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}