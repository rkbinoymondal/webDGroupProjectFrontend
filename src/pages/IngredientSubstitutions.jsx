import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function IngredientSubstitutions() {
  useEffect(() => {
    document.title = "Cooking Ingredient Substitutions Guide";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Find easy substitutes for common cooking ingredients like eggs, milk, butter, and more with this simple guide.");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Find easy substitutes for common cooking ingredients like eggs, milk, butter, and more with this simple guide.";
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
        background: `linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1615485925600-97237c4fc1ec?auto=format&fit=crop&w=1600&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '5rem 0',
        textAlign: 'center',
        color: 'white'
      }}>
        <div className="container">
          <h1 className="fw-bold display-4">Ingredient Substitutions Guide for Everyday Cooking</h1>
          <p className="fs-5 mt-3">Find easy substitutes for common cooking ingredients like eggs, milk, butter, and more to save your recipe when you're in a pinch.</p>
        </div>
      </section>

      <section className="container mt-5">
        <div className="row">
          {/* Sticky Table of Contents */}
          <div className="col-md-4 mb-4">
            <div className="recipe-card p-4 sticky-top" style={{ top: '100px', zIndex: 1 }}>
              <h3 className="recipe-title border-bottom pb-2 mb-3">Table of Contents</h3>
              <ul className="list-unstyled">
                <li className="mb-3"><a href="#quick-table" className="text-decoration-none text-dark hover-primary fw-semibold">1. Quick Substitution Table</a></li>
                <li className="mb-3"><a href="#baking" className="text-decoration-none text-dark hover-primary fw-semibold">2. Baking Substitutes</a></li>
                <li className="mb-3"><a href="#dairy" className="text-decoration-none text-dark hover-primary fw-semibold">3. Dairy Substitutes</a></li>
                <li className="mb-3"><a href="#pantry" className="text-decoration-none text-dark hover-primary fw-semibold">4. Pantry Substitutes</a></li>
                <li className="mb-3"><a href="#flavor" className="text-decoration-none text-dark hover-primary fw-semibold">5. Flavor Substitutes</a></li>
                <li className="mb-3"><a href="#faq" className="text-decoration-none text-dark hover-primary fw-semibold">6. FAQ</a></li>
              </ul>
            </div>
          </div>

          {/* Guides Content */}
          <div className="col-md-8">
            
            {/* Intro Section */}
            <div className="mb-5">
              <p className="lead">
                Missing an ingredient? Don't panic! Whether you ran out of eggs or need a dairy-free alternative, this guide will help you replace missing ingredients easily without compromising the taste and texture of your dishes.
              </p>
            </div>

            {/* Quick Substitution Table */}
            <article id="quick-table" className="recipe-card p-4 mb-5">
              <h2 className="recipe-title mb-3 fs-3 text-primary">Quick Substitution Table</h2>
              <div className="table-responsive">
                <table className="table table-striped table-hover align-middle">
                  <thead className="table-dark">
                    <tr>
                      <th scope="col">Ingredient</th>
                      <th scope="col">Best Substitute(s)</th>
                      <th scope="col">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Egg</strong> (1 large)</td>
                      <td>¼ cup yogurt, mashed banana, or applesauce</td>
                      <td>Best for baking. Use flax egg for vegan options.</td>
                    </tr>
                    <tr>
                      <td><strong>Butter</strong> (1 cup)</td>
                      <td>1 cup oil, ghee, or margarine</td>
                      <td>Oil works well in cakes; ghee is great for cooking.</td>
                    </tr>
                    <tr>
                      <td><strong>Milk</strong> (1 cup)</td>
                      <td>Water + splash of cream, almond milk, soy milk</td>
                      <td>Plant milks are great 1:1 replacements.</td>
                    </tr>
                    <tr>
                      <td><strong>Sugar</strong> (1 cup)</td>
                      <td>¾ cup honey, jaggery, or brown sugar</td>
                      <td>Reduce other liquids slightly if using honey.</td>
                    </tr>
                    <tr>
                      <td><strong>Flour</strong> (1 cup)</td>
                      <td>Whole wheat flour, almond flour, oat flour</td>
                      <td>Almond flour may require extra binding agents.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </article>

            {/* Baking Substitutes */}
            <article id="baking" className="recipe-card p-4 mb-5">
              <h2 className="recipe-title mb-3 fs-3 text-primary">Baking Substitutes</h2>
              <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80" alt="Baking ingredients" className="img-fluid rounded mb-4 shadow-sm" style={{ height: '300px', objectFit: 'cover', width: '100%' }} />
              
              <h4 className="mt-4">Eggs</h4>
              <ul>
                <li><strong>Banana:</strong> ¼ cup mashed banana replaces 1 egg. Adds sweetness and moisture.</li>
                <li><strong>Yogurt/Applesauce:</strong> ¼ cup replaces 1 egg in cakes and muffins perfectly.</li>
              </ul>

              <h4 className="mt-4">Butter</h4>
              <ul>
                <li><strong>Oil:</strong> Use a 1:1 ratio for neutral oils (canola, vegetable) or melted margarine.</li>
              </ul>

              <h4 className="mt-4">Baking Powder</h4>
              <ul>
                <li><strong>Baking Soda + Acid:</strong> Use ¼ tsp baking soda + ½ tsp cream of tartar (or lemon juice/vinegar) to replace 1 tsp of baking powder.</li>
              </ul>

              <div className="alert alert-info mt-3">
                <i className="fas fa-lightbulb me-2"></i><strong>Tip:</strong> Subbing oils for butter in baking often yields moister cakes, but you might lose some of the rich buttery flavor!
              </div>
            </article>

            {/* Dairy Substitutes */}
            <article id="dairy" className="recipe-card p-4 mb-5">
              <h2 className="recipe-title mb-3 fs-3 text-primary">Dairy Substitutes</h2>
              <img src="https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=800&q=80" alt="Dairy alternatives like milk and cheese" className="img-fluid rounded mb-4 shadow-sm" style={{ height: '300px', objectFit: 'cover', width: '100%' }} />
              
              <h4 className="mt-4">Milk</h4>
              <p>Plant-based milks (almond, soy, oat) are generally 1:1 replacements for cow's milk in both cooking and baking.</p>

              <h4 className="mt-4">Cream</h4>
              <p>Mix ¾ cup milk with ¼ cup melted butter to create a quick heavy cream substitute for cooking.</p>

              <h4 className="mt-4">Cheese</h4>
              <p>Use <strong>paneer</strong> as a mild substitute for ricotta or cottage cheese. For a vegan cheesy flavor in sauces, use <strong>nutritional yeast</strong>.</p>
            </article>

            {/* Pantry Substitutes */}
            <article id="pantry" className="recipe-card p-4 mb-5">
              <h2 className="recipe-title mb-3 fs-3 text-primary">Pantry Substitutes</h2>
              <img src="https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=800&q=80" alt="Pantry ingredients in jars" className="img-fluid rounded mb-4 shadow-sm" style={{ height: '300px', objectFit: 'cover', width: '100%' }} />
              
              <h4 className="mt-4">Flour</h4>
              <ul>
                <li><strong>Wheat:</strong> Can be used 1:1 but makes baked goods denser.</li>
                <li><strong>Almond/Oat Flour:</strong> Great gluten-free options but often require extra eggs or binders to hold structure.</li>
              </ul>

              <h4 className="mt-4">Sugar</h4>
              <ul>
                <li><strong>Honey & Maple Syrup:</strong> Use ¾ cup for every 1 cup of sugar.</li>
                <li><strong>Jaggery:</strong> Excellent 1:1 replacement, adding a deep caramel flavor.</li>
              </ul>
            </article>

            {/* Flavor Substitutes */}
            <article id="flavor" className="recipe-card p-4 mb-5">
              <h2 className="recipe-title mb-3 fs-3 text-primary">Flavor Substitutes</h2>
              <img src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80" alt="Fresh herbs and spices" className="img-fluid rounded mb-4 shadow-sm" style={{ height: '300px', objectFit: 'cover', width: '100%' }} />
              
              <h4 className="mt-4">Garlic & Onion</h4>
              <ul>
                <li><strong>Garlic:</strong> ⅛ tsp garlic powder replaces 1 fresh clove.</li>
                <li><strong>Onion:</strong> 1 tbsp onion powder replaces 1 medium chopped onion.</li>
              </ul>

              <h4 className="mt-4">Fresh Herbs</h4>
              <p>Substitute 1 tsp of dried herbs for every 1 tbsp of fresh herbs needed. Dried herbs have a more concentrated flavor!</p>
              
              <div className="alert alert-warning mt-3">
                <i className="fas fa-exclamation-triangle me-2"></i><strong>Texture vs Taste:</strong> Dried herbs change the texture compared to fresh ones. Add them earlier in the cooking process to allow them to soften.
              </div>
            </article>

            {/* FAQ Section */}
            <article id="faq" className="recipe-card p-4 mb-5">
              <h2 className="recipe-title mb-3 fs-3 text-primary">Frequently Asked Questions</h2>
              
              <div className="accordion mt-4" id="faqAccordion">
                <div className="accordion-item border-0 border-bottom">
                  <h3 className="accordion-header" id="headingOne">
                    <button className="accordion-button bg-transparent fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Can I replace eggs in baking?
                    </button>
                  </h3>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Yes! For most cakes, quick breads, and cookies, you can replace eggs with mashed bananas, applesauce, yogurt, or a flax egg (1 tbsp ground flaxseed mixed with 3 tbsp water).
                    </div>
                  </div>
                </div>

                <div className="accordion-item border-0 border-bottom">
                  <h3 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed bg-transparent fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      What is the best substitute for milk?
                    </button>
                  </h3>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Almond milk and oat milk are generally the best 1:1 substitutes for regular cow's milk in baking and cooking due to their neutral flavor profiles.
                    </div>
                  </div>
                </div>

                <div className="accordion-item border-0">
                  <h3 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed bg-transparent fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Can I use oil instead of butter?
                    </button>
                  </h3>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Absolutely. You can substitute oil for melted butter in a 1:1 ratio. This works perfectly in muffins, cakes, and quick breads, usually yielding a moister crumb.
                    </div>
                  </div>
                </div>
              </div>
            </article>

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
          .accordion-button:not(.collapsed) {
            color: var(--primary);
            box-shadow: none;
          }
          .accordion-button:focus {
            box-shadow: none;
            border-color: rgba(0,0,0,.125);
          }
        `}
      </style>
    </>
  );
}
