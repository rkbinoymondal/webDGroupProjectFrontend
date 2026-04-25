import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RecipeCard from '../components/RecipeCard';
import RecipeModal from '../components/RecipeModal';
import Loader from '../components/Loader';
const popularCategories = [
  { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdm2WEvdeCYKsdfcxy1drlrx57eF65mxHNYA&s', title: 'Rajasthani' },
  { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqcHPqeel_jGEooO4XZoeBswuxs6-U_khGWA&s', title: 'North Indian' },
  { img: 'https://imgmediagumlet.lbb.in/media/2024/12/6763c390ad5b133601d57eed_1734591376530.jpg',       title: 'South Indian' },
  { img: 'https://dt4l9bx31tioh.cloudfront.net/eazymedia/eazytrendz/3108/trend20210413160402.jpg?width=750&height=436&mode=crop', title: 'Bengali Cuisine' },
];

export default function Recipes() {
  const navigate = useNavigate();
  const [allRecipes, setAllRecipes] = useState([]);
  const [favoriteIds, setFavoriteIds] = useState(new Set());
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [isLoadingRecipe, setIsLoadingRecipe] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleCardClick = (recipe) => {
    setIsLoadingRecipe(true);
    setSelectedRecipe({ ...recipe, recipe: "Loading recipe details..." });
    
    api.get(`/foodsBig/${recipe.foodId}`)
      .then((res) => {
        setSelectedRecipe(res.data);
      })
      .catch((err) => {
        console.error('Error fetching recipe details:', err);
        showToast('Error loading recipe details', 'danger');
        setSelectedRecipe(recipe); // Fallback
      })
      .finally(() => {
        setIsLoadingRecipe(false);
      });
  };

  useEffect(() => {
    const email = localStorage.getItem('userEmail');
    if (!email) {
      navigate('/');
      return;
    }

    Promise.all([
      api.get('/foods').catch((err) => { console.error('Error fetching recipes:', err); return { data: [] }; }),
      api.get(`/favorites/owner/${email}`).catch((err) => { console.error('Error fetching favorites:', err); return { data: [] }; })
    ]).then(([resFoods, resFavs]) => {
      if (resFoods && resFoods.data) setAllRecipes(resFoods.data);
      if (resFavs && resFavs.data) {
        const ids = new Set(resFavs.data.map(f => f.foodId));
        setFavoriteIds(ids);
      }
      setLoading(false);
    });
  }, [navigate]);

  const [search, setSearch]         = useState('');
  const [filterCuisine, setCuisine] = useState('');
  const [filterTime, setTime]       = useState('');
  const [filterDiff, setDiff]       = useState('');
  const [filterType, setType]       = useState('');
  const [toastMsg, setToastMsg]     = useState('');
  const [toastType, setToastType]   = useState('success');

  const showToast = (msg, type = 'success') => {
    setToastMsg(msg);
    setToastType(type);
    setTimeout(() => setToastMsg(''), 3000);
  };

  const toggleFavorite = (recipe) => {
    const email = localStorage.getItem('userEmail');
    if (favoriteIds.has(recipe.foodId)) {
      api.delete(`/favorites/owner/${email}/foodId/${recipe.foodId}`)
        .then(() => {
          setFavoriteIds(prev => {
            const next = new Set(prev);
            next.delete(recipe.foodId);
            return next;
          });
          showToast(`"${recipe.foodName}" is deleted now.`, 'danger');
        })
        .catch((err) => console.error('Error deleting favorite:', err));
    } else {
      const email = localStorage.getItem('userEmail');
      api.post('/favorites', { ...recipe, owner: email })
        .then(() => {
          setFavoriteIds(prev => {
            const next = new Set(prev);
            next.add(recipe.foodId);
            return next;
          });
          showToast(`"${recipe.foodName}" added to favorites! ❤️`, 'success');
        })
        .catch((err) => {
          console.error('Error adding to favorites:', err);
          showToast(`Failed to add "${recipe.foodName}" to favorites.`, 'danger');
        });
    }
  };

  const filtered = allRecipes.filter((r) => {
    const q = search.toLowerCase();
    if (q) {
      const matchName = r.foodName?.toLowerCase().includes(q);
      const matchCuisine = r.cuisine?.toLowerCase().includes(q);
      const matchDesc = r.description?.toLowerCase().includes(q);
      if (!matchName && !matchCuisine && !matchDesc) return false;
    }
    if (filterCuisine && r.cuisine !== filterCuisine) return false;
    if (filterDiff && r.difficulty !== filterDiff) return false;
    if (filterType && r.type !== filterType) return false;
    
    if (filterTime) {
      const t = Number(r.time);
      if (filterTime === '30 mins' && t > 30) return false;
      if (filterTime === '30-60 mins' && (t <= 30 || t > 60)) return false;
      if (filterTime === '> 60 mins' && t <= 60) return false;
    }
    return true;
  });

  const getBackgroundStyle = () => {
    if (filterType === 'Vegetarian') {
      return { 
        background: 'linear-gradient(135deg, #134e5e 0%, #71b280 100%)', 
        minHeight: '100vh', 
        transition: 'background 0.5s ease'
      };
    }
    if (filterType === 'Non-Vegetarian') {
      return { 
        background: 'linear-gradient(135deg, #4a0000 0%, #990000 100%)', 
        minHeight: '100vh', 
        transition: 'background 0.5s ease'
      };
    }
    return { minHeight: '100vh', transition: 'background 0.5s ease' };
  };

  return (
    <div style={getBackgroundStyle()} className="recipes-page-wrapper">
      <Navbar />

      {/* Toast */}
      {toastMsg && (
        <div className={`alert alert-${toastType} alert-custom`} role="alert">
          <i className={toastType === 'success' ? "fas fa-check-circle me-2" : "fas fa-trash-alt me-2"}></i>{toastMsg}
        </div>
      )}

      {/* Search & Filters */}
      <section id="recipes" className="container mt-5">
        <h2 className="section-title">Explore Recipes</h2>

        <div className="row mb-4">
          <div className="col-md-8 mx-auto">
            <input
              type="text"
              className="form-control"
              placeholder="Search by name, cuisine, ingredient..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="row g-3 mb-4">
          <div className="col-md-3">
            <select className="form-control" value={filterCuisine} onChange={(e) => setCuisine(e.target.value)}>
              <option value="">Cuisine</option>
              <option value="North Indian">North Indian</option>
              <option value="South Indian">South Indian</option>
              <option value="Maharashtrian">Maharashtrian</option>
              <option value="Bengali">Bengali</option>
              <option value="Goan">Goan</option>
              <option value="Hyderabadi">Hyderabadi</option>
              <option value="Street Food">Street Food</option>
              <option value="Mughlai">Mughlai</option>
              <option value="Bihari">Bihari</option>
              <option value="Indian">Indian</option>
            </select>
          </div>
          <div className="col-md-3">
            <select className="form-control" value={filterTime} onChange={(e) => setTime(e.target.value)}>
              <option value="">Cooking Time</option>
              <option>30 mins</option>
              <option>30-60 mins</option>
              <option>{'> 60 mins'}</option>
            </select>
          </div>
          <div className="col-md-3">
            <select className="form-control" value={filterDiff} onChange={(e) => setDiff(e.target.value)}>
              <option value="">Difficulty</option>
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
          </div>
          <div className="col-md-3">
            <select className="form-control" value={filterType} onChange={(e) => setType(e.target.value)}>
              <option value="">Both Type</option>
              <option>Vegetarian</option>
              <option>Non-Vegetarian</option>
            </select>
          </div>
        </div>

        {/* Popular Categories */}
        <h3 className="section-title mt-4">Popular Categories</h3>
        <div className="d-flex overflow-auto pb-3" style={{ gap: '20px' }}>
          {popularCategories.map((c, i) => (
            <div key={i} className="recipe-card text-center flex-shrink-0" style={{ width: '300px' }}>
              <img src={c.img} alt={c.title} />
              <div className="recipe-card-body">
                <h4 className="recipe-title">{c.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Recipes */}
      <section className="container mt-4">
        <h2 className="section-title">Featured Recipes</h2>
        {loading ? (
          <Loader message="Simmering the recipes..." />
        ) : filtered.length === 0 ? (
          <div className="text-center py-5">
            <i className="fas fa-search fa-3x mb-3 text-white"></i>
            <p className="text-white fs-5">No recipes found. Try adjusting your filters.</p>
          </div>
        ) : (
          <div className="row">
            {filtered.map((r) => (
              <RecipeCard
                key={r.foodId}
                recipe={r}
                isFavorite={favoriteIds.has(r.foodId)}
                onFavorite={toggleFavorite}
                onClickCard={handleCardClick}
              />
            ))}
          </div>
        )}
      </section>

      {/* Recipe Modal */}
      <RecipeModal 
        selectedRecipe={selectedRecipe} 
        isLoadingRecipe={isLoadingRecipe} 
        onClose={() => setSelectedRecipe(null)} 
      />

      <Footer />
    </div>
  );
}
