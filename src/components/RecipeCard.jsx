export default function RecipeCard({ recipe, onFavorite, isFavorite, onClickCard }) {
  const { foodName, time, servings, imageUrl, description } = recipe || {};

  return (
    <div className="col-md-4 mb-4">
      <div 
        className="recipe-card" 
        onClick={() => onClickCard && onClickCard(recipe)}
        style={{ cursor: onClickCard ? 'pointer' : 'default' }}
      >
        <img src={imageUrl} alt={foodName} />
        <div className="recipe-card-body">
          <h3 className="recipe-title">{foodName}</h3>
          <div className="recipe-meta">
            <i className="fas fa-clock me-1"></i>{time} mins&nbsp;|&nbsp;
            <i className="fas fa-user me-1"></i>{servings} servings
          </div>
          <p>{description}</p>
          <div className="d-flex justify-content-between align-items-center mt-3">
            <button
              className="btn"
              style={{ border: 'none', background: 'transparent', fontSize: '1.5rem', color: '#ff4f4f' }}
              onClick={(e) => {
                e.stopPropagation();
                if (onFavorite) onFavorite(recipe);
              }}
              title={isFavorite ? "Remove from Favorites" : "Add to Favorites"}
            >
              <i className={isFavorite ? "fas fa-heart" : "far fa-heart"}></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
