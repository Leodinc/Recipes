import React from "react";
import style from './recipe.module.css';

const Recipe = ({title, calories, image, ingredients}) =>{
    return(
      <div className={style.recipe}>
        <h1 className={style.title}>{title}</h1>
        <p>Calories: {calories}</p>
        <ul className={style.list}>
          {ingredients.map(ingredient =>(
            <li>{ingredient.text}</li>
          ))}
        </ul>
        
        <img src={image} alt={title} className={style.img}/>
      </div>  
    );
}

export default Recipe;