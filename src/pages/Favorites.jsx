import { useState, useEffect } from 'react';
import api from '../api/axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RecipeCard from '../components/RecipeCard';
import RecipeModal from '../components/RecipeModal';

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [toastMsg, setToastMsg] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [isLoadingRecipe, setIsLoadingRecipe] = useState(false);

  const handleCardClick = (recipe) => {
    setIsLoadingRecipe(true);
    setSelectedRecipe({ ...recipe, recipe: "Loading recipe details..." });
    
    api.get(`/foodsBig/${recipe.foodId || recipe.id}`)
      .then((res) => {
        setSelectedRecipe(res.data);
      })
      .catch((err) => {
        console.error('Error fetching recipe details:', err);
        setSelectedRecipe(recipe);
      })
      .finally(() => {
        setIsLoadingRecipe(false);
      });
  };

  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(''), 3000);
  };

  const removeFavorite = (recipe) => {
    api.delete(`/favorites/${recipe.foodId}`)
      .then(() => {
        setFavorites(prev => prev.filter((f) => f.foodId !== recipe.foodId));
        showToast(`"${recipe.foodName}" is deleted now.`);
      })
      .catch((err) => console.error('Error deleting favorite:', err));
  };

  useEffect(() => {
    api.get('/favorites')
      .then((res) => {
        setFavorites(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching favorites:', err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar />

      {/* Red Toast for Deletion */}
      {toastMsg && (
        <div className="alert alert-danger alert-custom" role="alert">
          <i className="fas fa-trash-alt me-2"></i>{toastMsg}
        </div>
      )}

      <section className="container mt-5" style={{ minHeight: '60vh' }}>
        <h2 className="section-title">My Favorites</h2>
        
        {loading ? (
          <div className="text-center py-5 text-white">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : favorites.length === 0 ? (
          <div className="text-center py-5">
            <i className="fas fa-heart-broken fa-3x mb-3 text-white"></i>
            <p className="text-white fs-5">You haven't added any favorites yet!</p>
          </div>
        ) : (
          <div className="row mt-4">
            {favorites.map((r) => (
              <RecipeCard
                key={r.foodId || r.id}
                recipe={r}
                isFavorite={true}
                onFavorite={removeFavorite}
                onClickCard={handleCardClick}
              />
            ))}
          </div>
        )}
      </section>

      <RecipeModal 
        selectedRecipe={selectedRecipe} 
        isLoadingRecipe={isLoadingRecipe} 
        onClose={() => setSelectedRecipe(null)} 
      />

      <Footer />
    </>
  );
}
