import React, { useEffect , useState} from "react";
import logo from './logo.svg';
import './App.css';
import Recipe from "./Recipe";

const App = () =>{
  //save id and key to access the API
  const APP_ID =  '6cff05e0';
  const APP_KEY = '088931f36969c54be1c2ad180b92b2ab';

  //saving recipes, the content of searchbar and what we send to the API
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('chocolate');

  useEffect(() => { //useffect run only when the thing inside [] is changing; if empty only at launch. in this case, when we change the query we send by searching, it gets the new recipes
   getRecipes();
  }, [query]); 

  //getrecipes calls the API and saves the recipes inside recipes
  const getRecipes = async() =>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setRecipes(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }
  
  return(
    <div className="App">
    <form onSubmit={getSearch} className="search-form">
      <input className="search-bar" type="text" value={search} onChange={updateSearch} placeholder="Search an ingredient to find a receipt that contains it!"/>
      <button className="search-button" type="submit">Search</button>
    </form>
    <div className="recipes">
    {recipes.map(recipe =>( //for every recipe in recipes print out a Recipe component
      <Recipe 
        key={recipe.recipe.label}
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories} 
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        url={recipe.recipe.url}
        />
    ))}
    </div>
    </div>
  )
}

export default App;
