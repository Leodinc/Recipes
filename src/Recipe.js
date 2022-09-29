import React from "react";
import style from './recipe.module.css';

//creating the recipe component, which has the instantiate values of its title, calories, image, ingredients and url
const Recipe = ({title, calories, image, ingredients, url}) =>{
    return(
      <div className={style.recipe}>
        <h1 className={style.title}><b>{title}</b></h1>
        <p><i>Calories: {calories} kcal</i></p>
        <ul className={style.list}>
          {ingredients.map(ingredient =>(
            <li><i>{ingredient.text}</i></li>
          ))}
        </ul>
        <a href={url}> 
          <img src={image} alt={title} className={style.img}/>
        </a>
        
      </div>  
    );
}

export default Recipe;