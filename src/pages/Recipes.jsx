import React, { useState, useEffect } from 'react';
import RecipeCard from '../components/RecipeCard';
import Paginate from '../util/Paginate';
import './Recipes.css';

const Recipes = () => {
  const base_url = 'https://my-dj.vercel.app/vege/recipes/';
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async (url) => {
    try {
      const response = await fetch(url,{
        method: 'GET',
        headers: {
          'Authorization': 'token 9962edaa0003ac29e71e0972963544ae828e44db',
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        console.log("Error while fetching recipes")
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
      setRecipes(data);
    } catch (error) {
      console.error('Error while fetching Recipes:', error);
    }
  };

  useEffect(() => {
    fetchRecipes(base_url);
  }, []);

  return (
    <div className="recipes-container">
      <p>No of recipes : {recipes.length}</p>
      <Paginate itemsPerPage={3}>
        {Array.isArray(recipes) && recipes.length > 0 ? (
          recipes.map((recipe) => (
            <li key={recipe.id} className='recipeCard'>
              <RecipeCard 
                recipe_name={recipe.recipe_name}
                recipe_description={recipe.recipe_description}
                recipe_image={recipe.recipe_image}
                recipe_view_count={recipe.recipe_view_count}
              />
            </li>
          ))
        ) : (
          <li className="no-recipes-message">No Recipe available</li>
        )}
      </Paginate>
    </div>
  );
};

export default Recipes;
