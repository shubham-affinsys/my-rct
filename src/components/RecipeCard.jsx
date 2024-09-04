import { useState } from "react";
// import { CodeBlock, dracula } from "react-code-blocks";
import GetImage from "../util/GetImage";
import "./RecipeCard.css"

const RecipeCard=(props)=>{
  console.log("https://my-dj.vercel.app/${props.recipe_image}")
    return (
        <div className="recipe">
          <h2>{props.recipe_name}</h2>
          <p className="recipe_view_count">views: {props.recipe_view_count}</p>
          <p>{props.recipe_description}</p>
          <GetImage image_url={props.recipe_image} />
        </div>
      );
}

export default RecipeCard;