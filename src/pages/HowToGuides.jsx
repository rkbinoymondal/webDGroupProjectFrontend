import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function HowToGuides() {
  useEffect(() => {
    document.title = "Easy Cooking How-To Guides for Beginners";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Learn essential cooking basics like rice, pasta, omelettes, and more with these simple step-by-step guides.");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Learn essential cooking basics like rice, pasta, omelettes, and more with these simple step-by-step guides.";
      document.head.appendChild(meta);
    }

    return () => {
      document.title = "Delicious Recipes";
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Navbar />

      {/* Page Header */}
      <section className="page-header" style={{
        background: `linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1600&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '5rem 0',
        textAlign: 'center',
        color: 'white'
      }}>
        <div className="container">
          <h1 className="fw-bold display-4">Essential Cooking How-To Guides for Beginners</h1>
          <p className="fs-5 mt-3">Master essential cooking skills with our simple, step-by-step guides designed specifically for beginners.</p>
        </div>
      </section>

      <section className="container mt-5">
        <div className="row">
          {/* Sticky Table of Contents */}
          <div className="col-md-4 mb-4">
            <div className="recipe-card p-4 sticky-top" style={{ top: '100px', zIndex: 1 }}>
              <h3 className="recipe-title border-bottom pb-2 mb-3">Table of Contents</h3>
              <ul className="list-unstyled">
                <li className="mb-3"><a href="#rice" className="text-decoration-none text-dark hover-primary fw-semibold">1. How to Cook Perfect Rice</a></li>
                <li className="mb-3"><a href="#vegetables" className="text-decoration-none text-dark hover-primary fw-semibold">2. How to Chop Vegetables Properly</a></li>
                <li className="mb-3"><a href="#pasta" className="text-decoration-none text-dark hover-primary fw-semibold">3. How to Boil Pasta Perfectly</a></li>
                <li className="mb-3"><a href="#onions" className="text-decoration-none text-dark hover-primary fw-semibold">4. How to Fry Onions Evenly</a></li>
                <li className="mb-3"><a href="#omelette" className="text-decoration-none text-dark hover-primary fw-semibold">5. How to Make a Perfect Omelette</a></li>
              </ul>
            </div>
          </div>

          {/* Guides Content */}
          <div className="col-md-8">

            {/* Guide 1 */}
            <article id="rice" className="recipe-card p-4 mb-5">
              <h2 className="recipe-title mb-3 fs-3 text-primary">1. How to Cook Perfect Rice</h2>
              <img src="https://minuterice.com/wp-content/uploads/2025/02/shutterstock_1177577908.jpg" alt="Perfect Rice" className="img-fluid rounded mb-4 shadow-sm" style={{ height: '300px', objectFit: 'cover', width: '100%' }} />

              <h4 className="mt-4">Ingredients</h4>
              <ul>
                <li>1 cup of rice (Basmati or Jasmine)</li>
                <li>2 cups of water (Rice-to-water ratio is usually 1:2)</li>
                <li>A pinch of salt</li>
                <li>1 tbsp oil or butter (optional)</li>
              </ul>

              <h4 className="mt-4">Step-by-step instructions</h4>
              <ol>
                <li className="mb-2"><strong>Rinse:</strong> Rinse the rice under cold water until the water runs clear. This removes excess starch.</li>
                <li className="mb-2"><strong>Boil:</strong> Bring the water to a boil in a medium saucepan. Add salt and oil/butter.</li>
                <li className="mb-2"><strong>Simmer:</strong> Stir in the rice, cover with a tight-fitting lid, and reduce the heat to low.</li>
                <li className="mb-2"><strong>Cook:</strong> Let it simmer for 15-18 minutes without opening the lid.</li>
                <li className="mb-2"><strong>Rest:</strong> Remove from heat and let it sit covered for 5 minutes. Fluff with a fork before serving.</li>
              </ol>

              <div className="alert alert-info mt-3">
                <i className="fas fa-lightbulb me-2"></i><strong>Tips:</strong> For a fragrant rice, add a bay leaf or a couple of cloves to the water before boiling.
              </div>
              <div className="alert alert-danger mt-3">
                <i className="fas fa-exclamation-triangle me-2"></i><strong>Common Mistakes:</strong> Opening the lid while cooking lets the steam escape and leads to uneven cooking.
              </div>
            </article>

            {/* Guide 2 */}
            <article id="vegetables" className="recipe-card p-4 mb-5">
              <h2 className="recipe-title mb-3 fs-3 text-primary">2. How to Chop Vegetables Properly</h2>
              <img src="https://img.freepik.com/free-photo/woman-cuts-fresh-bell-pepper-wooden-board-kitchen_169016-50170.jpg?semt=ais_hybrid&w=740&q=80" alt="Chopping Vegetables" className="img-fluid rounded mb-4 shadow-sm" style={{ height: '300px', objectFit: 'cover', width: '100%' }} />

              <h4 className="mt-4">Knife Safety Basics</h4>
              <ul>
                <li>Use a sharp chef's knife. A dull knife is more likely to slip and cause injury.</li>
                <li>Hold the food with a "claw grip" — tuck your fingertips in and use your knuckles to guide the blade.</li>
                <li>Always use a stable cutting board. Place a damp towel underneath if it slides.</li>
              </ul>

              <h4 className="mt-4">Types of Cuts</h4>
              <ul>
                <li><strong>Dice:</strong> Small, uniform cubes (e.g., onions, carrots).</li>
                <li><strong>Slice:</strong> Thin, flat pieces (e.g., cucumbers, tomatoes).</li>
                <li><strong>Julienne:</strong> Long, thin matchstick strips (e.g., bell peppers, carrots).</li>
              </ul>

              <h4 className="mt-4">Step-by-step Technique</h4>
              <ol>
                <li className="mb-2">Create a flat base on your vegetable by slicing a small piece off one side.</li>
                <li className="mb-2">Rest the vegetable on its flat side so it won't roll.</li>
                <li className="mb-2">Grip the knife handle firmly and use a rocking motion, keeping the tip of the blade on the board.</li>
              </ol>

              <div className="alert alert-info mt-3">
                <i className="fas fa-lightbulb me-2"></i><strong>Tips for Consistency:</strong> Cut pieces into similar sizes so they cook at the same rate. Take your time; speed comes with practice.
              </div>
            </article>

            {/* Guide 3 */}
            <article id="pasta" className="recipe-card p-4 mb-5">
              <h2 className="recipe-title mb-3 fs-3 text-primary">3. How to Boil Pasta Perfectly</h2>
              <img src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=800&q=80" alt="Boiling Pasta" className="img-fluid rounded mb-4 shadow-sm" style={{ height: '300px', objectFit: 'cover', width: '100%' }} />

              <h4 className="mt-4">Water & Salt Ratio</h4>
              <p>Use 4 quarts of water for every 1 pound of pasta. Add 1-2 tablespoons of salt to the water (it should taste like the sea).</p>

              <h4 className="mt-4">Cooking Steps</h4>
              <ol>
                <li className="mb-2">Bring a large pot of salted water to a rolling boil.</li>
                <li className="mb-2">Add the pasta and stir immediately to prevent sticking.</li>
                <li className="mb-2">Boil uncovered, stirring occasionally, according to the package instructions.</li>
                <li className="mb-2">Reserve a cup of pasta water before draining. Do not rinse the pasta!</li>
              </ol>

              <h4 className="mt-4">How to Get "Al Dente" Texture</h4>
              <p>Al dente means "to the tooth" — it should be cooked through but still have a firm bite. Start tasting the pasta 2 minutes before the package's recommended cooking time.</p>

              <div className="alert alert-danger mt-3">
                <i className="fas fa-exclamation-triangle me-2"></i><strong>Mistakes to Avoid:</strong> Rinsing pasta washes away the starches that help sauces cling to it. Only rinse pasta if you are making a cold pasta salad.
              </div>
            </article>

            {/* Guide 4 */}
            <article id="onions" className="recipe-card p-4 mb-5">
              <h2 className="recipe-title mb-3 fs-3 text-primary">4. How to Fry Onions Evenly</h2>
              <img src="https://sinfullyspicy.com/wp-content/uploads/2024/08/1200-by-1200-images-2.jpg" alt="Frying Onions" className="img-fluid rounded mb-4 shadow-sm" style={{ height: '300px', objectFit: 'cover', width: '100%' }} />

              <h4 className="mt-4">Oil and Heat Control</h4>
              <p>Use a heavy-bottomed pan and enough oil or butter to lightly coat the bottom. Keep the heat on medium to medium-low to prevent burning.</p>

              <h4 className="mt-4">Stages of Frying Onions</h4>
              <ul>
                <li className="mb-2"><strong>Soft / Translucent (5 mins):</strong> Onions turn clear and soften. Perfect for soups and light sauces.</li>
                <li className="mb-2"><strong>Golden (10-15 mins):</strong> Onions start to take on a light brown color and sweet flavor. Good for curries and pilafs.</li>
                <li className="mb-2"><strong>Brown / Caramelized (30-40 mins):</strong> Deep brown, sweet, and jammy. Great for burgers, French onion soup, and biryani.</li>
              </ul>

              <h4 className="mt-4">Use Cases in Recipes</h4>
              <p>Fried onions form the base of almost all Indian curries. The darker you fry them (without burning), the richer the color and flavor of the curry.</p>

              <div className="alert alert-info mt-3">
                <i className="fas fa-lightbulb me-2"></i><strong>Tips to Avoid Burning:</strong> Stir frequently and add a pinch of salt early on — it draws out moisture and helps them cook evenly without burning.
              </div>
            </article>

            {/* Guide 5 */}
            <article id="omelette" className="recipe-card p-4 mb-5">
              <h2 className="recipe-title mb-3 fs-3 text-primary">5. How to Make a Perfect Omelette</h2>
              <img src="https://maunikagowardhan.co.uk/wp-content/uploads/2012/09/Masala-Omelette-32.jpg" alt="Perfect Omelette" className="img-fluid rounded mb-4 shadow-sm" style={{ height: '300px', objectFit: 'cover', width: '100%' }} />

              <h4 className="mt-4">Ingredients</h4>
              <ul>
                <li>2-3 large eggs</li>
                <li>1 tbsp butter or oil</li>
                <li>Salt and pepper to taste</li>
                <li>Fillings (cheese, onions, bell peppers)</li>
              </ul>

              <h4 className="mt-4">Whisking Technique</h4>
              <p>Crack the eggs into a bowl. Use a fork or whisk to beat them vigorously until the yolks and whites are completely blended and slightly frothy. This adds air and makes the omelette fluffy.</p>

              <h4 className="mt-4">Cooking Steps</h4>
              <ol>
                <li className="mb-2">Melt butter in a non-stick skillet over medium-low heat.</li>
                <li className="mb-2">Pour in the eggs. As they start to set at the edges, gently push the cooked portions toward the center with a spatula, tilting the pan to let uncooked egg flow to the edges.</li>
                <li className="mb-2">When the eggs are mostly set but still slightly runny on top, add your fillings to one side.</li>
                <li className="mb-2">Fold the omelette in half over the fillings and slide it onto a plate.</li>
              </ol>

              <h4 className="mt-4">Variations</h4>
              <ul>
                <li><strong>Classic Cheese:</strong> Add grated cheddar or gruyere before folding.</li>
                <li><strong>Masala Omelette:</strong> Add chopped onions, green chilies, cilantro, and a pinch of turmeric and chili powder to the raw eggs.</li>
                <li><strong>Veggie:</strong> Sauté mushrooms, spinach, and bell peppers before adding them as a filling.</li>
              </ul>
            </article>

          </div>
        </div>

        {/* Beautiful CTA Banner for Recipes */}
        <div className="mt-5 mb-5 p-5 text-center text-white position-relative overflow-hidden" style={{
          background: "linear-gradient(135deg, rgba(255,107,107,0.85), rgba(118,75,162,0.85)), url('https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "20px",
          boxShadow: "0 15px 30px rgba(0,0,0,0.3)"
        }}>
          <div className="position-relative" style={{ zIndex: 1 }}>
            <i className="fas fa-book-open fa-3x mb-3 text-white" style={{ opacity: 0.9 }}></i>
            <h2 className="fw-bold mb-3" style={{ fontSize: '2.5rem', textShadow: '2px 2px 4px rgba(0,0,0,0.4)' }}>
              Ready to Apply Your Skills?
            </h2>
            <p className="fs-5 mb-4" style={{ maxWidth: '800px', margin: '0 auto', textShadow: '1px 1px 2px rgba(0,0,0,0.4)', lineHeight: '1.6' }}>
              For detailed, step-by-step instructions, complete ingredient lists, and more culinary inspiration, explore our full recipe collection!
            </p>
            <Link
              to="/recipes"
              className="btn btn-light btn-lg rounded-pill fw-bold px-5 py-3 mt-2 shadow-lg"
              style={{
                color: '#ff4f4f',
                transition: 'all 0.3s ease',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-5px) scale(1.05)';
                e.target.style.boxShadow = '0 10px 25px rgba(255,255,255,0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'none';
                e.target.style.boxShadow = '0 1rem 3rem rgba(0,0,0,.175)';
              }}
            >
              <i className="fas fa-utensils me-2"></i>Explore Full Recipes
            </Link>
          </div>
        </div>

        {/* Back to Top */}
        <div className="text-center mb-5 pb-4">
          <button onClick={scrollToTop} className="btn btn-register">
            <i className="fas fa-arrow-up me-2"></i>Back to Top
          </button>
        </div>
      </section>

      <Footer />

      <style>
        {`
          .hover-primary:hover {
            color: var(--primary) !important;
            transition: color 0.3s ease;
          }
          .text-primary {
            color: var(--primary) !important;
          }
          html {
            scroll-behavior: smooth;
          }
        `}
      </style>
    </>
  );
}
