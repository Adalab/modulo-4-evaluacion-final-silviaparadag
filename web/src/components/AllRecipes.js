import '../styles/layout/Main.scss';
import EachRecipe from "./EachRecipe";

const AllRecipes = ({recipesList}) => {

  const recipeHTML = recipesList.map((recipe) => (
    <li key={recipe.id} className="card mt-1">
      <EachRecipe recipe={recipe} />
    </li>
  ));
    
    return(
       <ul className="cards">{recipeHTML}</ul>
    )
}

export default AllRecipes;
