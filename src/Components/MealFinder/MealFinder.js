import React, { useState, useEffect } from 'react';

const MealFinder = () => {
    const [search, setSearch] = useState('');
    const [meals, setMeals] = useState([])
    const handleChange = event => {
        setSearch(event.target.value)
    }
    useEffect(()=>{
        const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setMeals(data.meals))
    }, [search])
   
    return (
        <div>
            <h1>Find Delicious Foods</h1>
            <input type="text" onChange={handleChange} placeholder="search food"/>
            <p>searching: {search}</p>
            <p>Meals Found: { meals?.length || 0 }</p>
            {
                meals?.map(meal => 
                    <div style={{float:"left", margin:"20px"}}>
                        <div>
                            <p>{meal.strMeal}</p>
                            <img  style={{width:"200px"}} src={meal.strMealThumb} alt="meal iamge"/>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default MealFinder;