import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Loader from '../components/Loader';

const emptyForm = {
  recipeName: '', cuisine: '', time: '', servings: '',
  type: 'veg', difficulty: 'Easy', description: '',
};

export default function AddRecipe() {
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState([]);
  const [form, setForm]       = useState(emptyForm);
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchRecipes = async () => {
    const email = localStorage.getItem('userEmail');
    if (!email) return;
    try {
      const response = await axios.get(`https://webdgroupprojectbackend-1.onrender.com/recipes/owner/${email}`);
      setRecipes(response.data);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const email = localStorage.getItem('userEmail');
    if (!email) {
      navigate('/');
      return;
    }
    fetchRecipes();
  }, [navigate]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleAdd = async () => {
    if (!form.recipeName.trim()) { alert('Recipe name is required'); return; }

    const email = localStorage.getItem('userEmail');
    const newRecipe = {
      ...form,
      servings: form.servings ? String(form.servings) : '',
      date: new Date().toISOString(),
      owner: email
    };

    try {
      await axios.post('https://webdgroupprojectbackend-1.onrender.com/recipes', newRecipe);
      setForm(emptyForm);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
      fetchRecipes();
    } catch (error) {
      console.error("Error saving recipe:", error);
      alert("Failed to save recipe!");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this recipe?')) return;
    try {
      await axios.delete(`https://webdgroupprojectbackend-1.onrender.com/recipes/${id}`);
      fetchRecipes();
    } catch (error) {
      console.error("Error deleting recipe:", error);
    }
  };

  return (
    <>
      <Navbar />

      {/* Page Header */}
      <div className="page-header">
        <h1 className="text-white fw-bold">
          <i className="fas fa-plus-circle me-3"></i>Add Your Recipe
        </h1>
        <p className="text-white fs-5">Share your culinary creations</p>
      </div>

      <div className="container my-5">

        {/* Success Alert */}
        {showSuccess && (
          <div className="alert alert-success mb-4" style={{ borderRadius: '15px' }}>
            <i className="fas fa-check-circle me-2"></i>Recipe added successfully! 🎉
          </div>
        )}

        {/* Form Card */}
        <div className="bg-white p-4 rounded-4 shadow-lg mb-5">
          <h3 className="mb-4 text-center">
            <i className="fas fa-pen-fancy me-2"></i>Create New Recipe
          </h3>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label fw-bold">Recipe Name *</label>
              <input
                name="recipeName" className="form-control" placeholder="e.g. Masala Dosa"
                style={{ borderRadius: '10px' }} value={form.recipeName} onChange={handleChange}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label fw-bold">Region / Cuisine</label>
              <select name="cuisine" className="form-control" style={{ borderRadius: '10px' }}
                value={form.cuisine} onChange={handleChange}>
                <option value="">Select...</option>
                <option value="North India">North India</option>
                <option value="South India">South India</option>
                <option value="Punjab">Punjab</option>
                <option value="West Bengal">West Bengal</option>
                <option value="Maharashtra">Maharashtra</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3 mb-3">
              <label className="form-label fw-bold">Cooking Time</label>
              <input
                name="time" className="form-control" placeholder="30 mins"
                style={{ borderRadius: '10px' }} value={form.time} onChange={handleChange}
              />
            </div>
            <div className="col-md-3 mb-3">
              <label className="form-label fw-bold">Servings</label>
              <input
                name="servings" type="number" className="form-control" placeholder="4"
                style={{ borderRadius: '10px' }} value={form.servings} onChange={handleChange}
              />
            </div>
            <div className="col-md-3 mb-3">
              <label className="form-label fw-bold">Type</label>
              <select name="type" className="form-control" style={{ borderRadius: '10px' }}
                value={form.type} onChange={handleChange}>
                <option value="veg">🥬 Vegetarian</option>
                <option value="nonveg">🍗 Non-Veg</option>
              </select>
            </div>
            <div className="col-md-3 mb-3">
              <label className="form-label fw-bold">Difficulty</label>
              <select name="difficulty" className="form-control" style={{ borderRadius: '10px' }}
                value={form.difficulty} onChange={handleChange}>
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
              </select>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Description</label>
            <textarea
              name="description" className="form-control" rows="2"
              placeholder="Describe your recipe..." style={{ borderRadius: '10px' }}
              value={form.description} onChange={handleChange}
            />
          </div>

          <div className="text-center">
            <button className="btn btn-custom btn-lg px-5" onClick={handleAdd}>
              <i className="fas fa-plus me-2"></i>Add Recipe
            </button>
          </div>
        </div>

        {/* Saved Recipes */}
        <div className="bg-white p-4 rounded-4 shadow-lg">
          <h3 className="mb-4 text-center">
            <i className="fas fa-bookmark me-2"></i>Your Saved Recipes ({recipes.length})
          </h3>

          {loading ? (
            <Loader message="Fetching your created recipes..." />
          ) : recipes.length === 0 ? (
            <div className="text-center py-5">
              <i className="fas fa-book-open fa-4x mb-3 text-muted"></i>
              <p className="text-muted">No recipes yet. Add one above!</p>
            </div>
          ) : (
            <div className="row">
              {recipes.map((r) => (
                <div className="col-md-4 mb-4" key={r.id}>
                  <div className="card h-100 shadow-sm" style={{ borderRadius: '20px', border: 'none' }}>
                    <div className="card-body p-4">
                      {/* Badge + Delete */}
                      <div className="d-flex justify-content-between mb-3">
                        <span
                          className="badge px-3 py-2"
                          style={{
                            borderRadius: '15px',
                            background: r.type === 'veg' ? '#d4edda' : '#f8d7da',
                            color:      r.type === 'veg' ? '#155724' : '#721c24',
                          }}
                        >
                          {r.type === 'veg' ? '🥬 Veg' : '🍗 Non-Veg'}
                        </span>
                        <button
                          className="btn btn-sm btn-danger"
                          style={{ borderRadius: '10px' }}
                          onClick={() => handleDelete(r.id)}
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>

                      <h4 className="fw-bold mb-2">{r.recipeName}</h4>

                      <div className="text-muted small mb-3">
                        <div><i className="fas fa-map-marker-alt text-danger me-2"></i>{r.cuisine || 'India'}</div>
                        <div><i className="fas fa-clock text-primary me-2"></i>{r.time || 'N/A'}</div>
                        <div><i className="fas fa-user text-success me-2"></i>{r.servings || '-'} servings</div>
                        <div><i className="fas fa-signal text-warning me-2"></i>{r.difficulty}</div>
                      </div>

                      {r.description && <p className="text-muted small">{r.description}</p>}

                      <small className="text-muted">Added: {r.date ? new Date(r.date).toLocaleDateString() : 'N/A'}</small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>

      <Footer />
    </>
  );
}
