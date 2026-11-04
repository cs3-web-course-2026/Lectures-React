import styles from './Recipe.module.css';

const recipes = [
  {
    title: 'Класичне шоколадне печиво',
    ingredients: [
      '200г борошна',
      '150г цукру',
      '100г темного шоколаду',
      '2 яйця',
      '100г масла',
    ],
    instructions:
      'Змішайте сухі інгредієнти. Додайте яйця та розтоплене масло, замісіть тісто. ' +
      'Сформуйте печиво, додавши шматочки шоколаду. Випікайте 15 хвилин при 180°C.',
  },
  {
    title: 'Вівсяне печиво з родзинками',
    ingredients: [
      '150г вівсяних пластівців',
      '100г борошна',
      '80г родзинок',
      '100г цукру',
      '1 яйце',
      '100г масла',
    ],
    instructions:
      'Змішайте пластівці, борошно та цукор. Додайте яйце й розтоплене масло, потім родзинки. ' +
      'Сформуйте кульки та випікайте 12 хвилин при 180°C.',
  },
  {
    title: 'Імбирне печиво',
    ingredients: [
      '250г борошна',
      '100г меду',
      '80г масла',
      '1 яйце',
      '2 ч. л. меленого імбиру',
      '1 ч. л. кориці',
    ],
    instructions:
      'Розтопіть мед із маслом, додайте спеції та яйце. Вмісіть тісто з борошном, ' +
      'розкачайте й виріжте фігурки. Випікайте 10 хвилин при 180°C.',
  },
];

// Small component: renders whatever list it is given
function IngredientsList({ ingredients }) {
  return (
    <div>
      <h4 className={styles.heading}>Інгредієнти:</h4>
      <ul className={styles.list}>
        {ingredients.map((ingredient) => (
          <li key={ingredient} className={styles.listItem}>
            {ingredient}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Small component: renders whatever text it is given
function Instructions({ instructions }) {
  return (
    <div>
      <h4 className={styles.heading}>Інструкція:</h4>
      <p className={styles.instructions}>{instructions}</p>
    </div>
  );
}

// Composite component: assembles the small ones and hands each its data
function RecipeCard({ recipeData }) {
  return (
    <div className={styles.recipeCard}>
      <h3 className={styles.title}>{recipeData.title}</h3>
      <IngredientsList ingredients={recipeData.ingredients} />
      <Instructions instructions={recipeData.instructions} />
    </div>
  );
}

// One component, many cards: the list of data decides how many are rendered
function Recipe() {
  return (
    <div className={styles.grid}>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.title} recipeData={recipe} />
      ))}
    </div>
  );
}

export default Recipe;
