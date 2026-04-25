import React from 'react';

export default function RecipeModal({ selectedRecipe, isLoadingRecipe, onClose }) {
  if (!selectedRecipe) return null;

  return (
    <div className="recipe-modal-overlay" onClick={onClose}>
      <div className="recipe-modal" onClick={(e) => e.stopPropagation()}>
        <button className="recipe-modal-close" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
        <div className="recipe-modal-header">
          <img src={selectedRecipe.imageUrl} alt={selectedRecipe.foodName} />
        </div>
        <div className="recipe-modal-body">
          <h2 className="recipe-modal-title">{selectedRecipe.foodName}</h2>
          <div className="recipe-modal-meta">
            <span><i className="fas fa-clock"></i> {selectedRecipe.time} mins</span>
            <span><i className="fas fa-user"></i> {selectedRecipe.servings} servings</span>
            {selectedRecipe.cuisine && <span><i className="fas fa-utensils"></i> {selectedRecipe.cuisine}</span>}
            {selectedRecipe.difficulty && <span><i className="fas fa-signal"></i> {selectedRecipe.difficulty}</span>}
            {selectedRecipe.type && <span><i className="fas fa-leaf"></i> {selectedRecipe.type}</span>}
          </div>
          <p className="recipe-modal-desc">{selectedRecipe.description}</p>
          
          <div className="recipe-modal-instructions">
            <h4><i className="fas fa-list-ol me-2"></i>Recipe Instructions</h4>
            {isLoadingRecipe ? (
              <div className="text-center py-3">
                <div className="spinner-border text-danger" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <p className="mt-2">Loading detailed instructions...</p>
              </div>
            ) : (
              <p>{selectedRecipe.recipe || "No instructions available for this recipe yet."}</p>
            )}
            {selectedRecipe.youtubeUrl && (
              <div className="mt-4">
                <a href={selectedRecipe.youtubeUrl} target="_blank" rel="noreferrer" className="btn btn-outline-danger rounded-pill">
                  <i className="fab fa-youtube me-2"></i>Watch on YouTube
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
