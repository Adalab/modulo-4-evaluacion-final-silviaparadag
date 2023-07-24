import '../styles/App.scss';
import { useEffect, useState } from 'react';
import apiRecipes from '../services/api-recipes';
import Header from './Header';
import Footer from './Footer';
import AllRecipes from './AllRecipes';


const App = ()  => {

  const [recipesList, setRecipesList] = useState([]);


  useEffect(() => {
      apiRecipes.callToApi().then((cleanData) =>{
        setRecipesList(cleanData);
      })}
, []);

  return (
    <div className="App"> 
    <Header/>
        <main className='main'>
          <h3 className='main__title'>The Recipes Collection</h3>
          <AllRecipes  recipesList={recipesList}/>
        </main>
    <Footer/>
    </div>
  );
}

export default App;