import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <Navbar />
      
      <section className="container mt-5 mb-5">
        <h2 className="section-title text-center mb-4">About Delicious Recipes</h2>
        
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="recipe-card p-5 shadow-sm" style={{ backgroundColor: '#fff', borderRadius: '15px' }}>
              <div className="text-center mb-5">
                <i className="fas fa-utensils fa-4x mb-3" style={{ color: '#ff4f4f' }}></i>
                <h3 className="fw-bold">Discovering India's Culinary Heritage</h3>
                <p className="lead text-muted">Your ultimate destination for discovering, cooking, and sharing authentic regional recipes.</p>
              </div>

              <div className="row g-5">
                <div className="col-md-6">
                  <h4 className="fw-bold mb-3"><i className="fas fa-book-open me-2" style={{ color: '#ff4f4f' }}></i>Our Story</h4>
                  <p style={{ lineHeight: '1.8' }}>
                    Delicious Recipes was born out of a shared passion for authentic Indian cuisine. We realized that while India has incredibly diverse and rich culinary traditions—ranging from the fiery curries of the South to the rich, butter-laden gravies of the North—there wasn't a single, community-driven platform dedicated to easily preserving and sharing these regional treasures.
                  </p>
                  <p style={{ lineHeight: '1.8' }}>
                    Our platform brings together food enthusiasts, home chefs, and culinary experts to share their secret family recipes, helpful tips, and step-by-step cooking guides, making authentic cooking accessible and fun for everyone.
                  </p>
                </div>

                <div className="col-md-6">
                  <h4 className="fw-bold mb-3"><i className="fas fa-bullseye me-2" style={{ color: '#ff4f4f' }}></i>Our Mission</h4>
                  <p style={{ lineHeight: '1.8' }}>
                    We believe that cooking should be an enjoyable and rewarding experience, not a chore. Our mission is to empower everyone—from absolute beginners to seasoned cooks—with reliable, verified, and easy-to-follow recipes.
                  </p>
                  <p style={{ lineHeight: '1.8' }}>
                    We aim to build a vibrant online community where users can not only find their next favorite meal but also save their top picks, rate dishes they've tried, and contribute their own unique creations to inspire thousands of other food lovers.
                  </p>
                </div>
              </div>

              <hr className="my-5" style={{ opacity: '0.1' }} />

              <div className="text-center">
                <h4 className="fw-bold mb-4">What We Offer</h4>
                <div className="row g-4 text-start">
                  <div className="col-md-4">
                    <div className="p-4 border rounded h-100" style={{ backgroundColor: '#fdfdfd', borderColor: '#f0f0f0' }}>
                      <h5 className="fw-bold"><i className="fas fa-search me-2" style={{ color: '#ff4f4f' }}></i>Diverse Recipes</h5>
                      <p className="mb-0 text-muted" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>Explore hundreds of recipes beautifully categorized by regional cuisines like North Indian, South Indian, Bengali, and Rajasthani foods.</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="p-4 border rounded h-100" style={{ backgroundColor: '#fdfdfd', borderColor: '#f0f0f0' }}>
                      <h5 className="fw-bold"><i className="fas fa-heart me-2" style={{ color: '#ff4f4f' }}></i>Save Favorites</h5>
                      <p className="mb-0 text-muted" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>Create your personalized digital cookbook by safely saving your most loved recipes directly to your account for quick access later.</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="p-4 border rounded h-100" style={{ backgroundColor: '#fdfdfd', borderColor: '#f0f0f0' }}>
                      <h5 className="fw-bold"><i className="fas fa-users me-2" style={{ color: '#ff4f4f' }}></i>Community Driven</h5>
                      <p className="mb-0 text-muted" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>Join a thriving network of foodies. Add your own recipes, leave helpful reviews on others' dishes, and interact with fellow chefs.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-5 pt-3">
                <p className="fs-5 fw-bold" style={{ color: '#ff4f4f' }}>Join us in celebrating the joy of cooking!</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
