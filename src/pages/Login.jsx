import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Loader from '../components/Loader';

const whyJoin = [
  { icon: 'fa-user-friends', title: 'Community Access', desc: 'Join thousands of food lovers and home chefs.' },
  { icon: 'fa-award',        title: 'Expert Tips',      desc: 'Get exclusive cooking tips and tricks.' },
  { icon: 'fa-mobile-alt',   title: 'Mobile Friendly',  desc: 'Use this platform easily on any device.' },
  { icon: 'fa-heart',        title: 'Save Favorites',   desc: 'Bookmark the recipes you love for later.' },
];

const howItWorks = [
  { icon: 'fa-sign-in-alt',   step: '1. Login',          desc: 'Access your account and join our cooking community.' },
  { icon: 'fa-utensils',      step: '2. Browse Recipes', desc: "Explore hundreds of recipes across India's regional cuisines." },
  { icon: 'fa-heart',         step: '3. Save Favorites', desc: 'Apply and save your favourite recipes to cook later here.' },
];


const faqs = [
  { q: 'Is access free?',                     a: 'Yes! Our platform is completely free for all users.' },
  { q: 'What happens after I login?',         a: 'You can browse recipes, apply/save recipes, and manage your saved list.' },
  { q: 'Why do you ask for Favorite Cuisine?', a: 'We use it to recommend recipes based on your taste preference.' },
];

export default function Login() {
  const [toast, setToast]   = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const [form, setForm] = useState({
    name: '', email: '', password: '', phone: '', age: '', state: ''
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  useEffect(() => {
    const checkLoginStatus = async () => {
      const email = localStorage.getItem('userEmail');
      if (email) {
        navigate('/home');
        return;
      }
      setLoading(false);
    };
    checkLoginStatus();
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('https://webdgroupprojectbackend-1.onrender.com/login');
      const users = response.data;
      const existingUser = users.find(u => u.email === form.email);

      if (existingUser) {
        if (existingUser.password === form.password) {
          // Login successful
          localStorage.setItem('userEmail', form.email);
          setToast(true);
          setTimeout(() => {
            setToast(false);
            navigate('/home');
          }, 1500);
        } else {
          alert('Incorrect password for this email!');
        }
      } else {
        // Register new user
        await axios.post('https://webdgroupprojectbackend-1.onrender.com/login', form);
        localStorage.setItem('userEmail', form.email);
        setToast(true);
        setTimeout(() => {
          setToast(false);
          navigate('/home');
        }, 1500);
      }
    } catch (error) {
      console.error("Error handling login/register:", error);
      alert('An error occurred. Please try again.');
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <Loader message="Checking authentication..." />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      {/* Toast */}
      {toast && (
        <div className="alert alert-success alert-custom" role="alert">
          <i className="fas fa-check-circle me-2"></i>Login Successful! Redirecting...
        </div>
      )}

      {/* Why Join */}
      <section className="container mt-5">
        <h2 className="section-title">Why Join Us?</h2>
        <div className="row g-4">
          {whyJoin.map((w, i) => (
            <div className="col-lg-3 col-md-6 col-12" key={i}>
              <div className="recipe-card p-4 text-center">
                <i className={`fas ${w.icon} fa-2x mb-3`} style={{ color: '#ff4f4f' }}></i>
                <h4 className="recipe-title">{w.title}</h4>
                <p>{w.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Login Form */}
      <section id="login" className="container mt-5 mb-5">
        <h2 className="section-title">Welcome Back</h2>
        <div className="registration-section mx-auto" style={{ maxWidth: '800px' }}>
          <h3 className="text-center mb-4">User Login</h3>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text" className="form-control" name="name"
                  placeholder="eg: Rohit Mehra" required
                  value={form.name} onChange={handleChange}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Email Address</label>
                <input
                  type="email" className="form-control" name="email"
                  placeholder="eg: infoeg@gmail.com" required
                  value={form.email} onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password" className="form-control" name="password" required
                  value={form.password} onChange={handleChange}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Phone Number</label>
                <input
                  type="tel" className="form-control" name="phone"
                  placeholder="eg: 9876543210" required
                  value={form.phone} onChange={handleChange}
                />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-md-6 mb-3">
                <label className="form-label">Age</label>
                <input
                  type="number" className="form-control" name="age"
                  placeholder="eg: 25" required
                  value={form.age} onChange={handleChange}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">State</label>
                <input
                  type="text" className="form-control" name="state"
                  placeholder="eg: Maharashtra" required
                  value={form.state} onChange={handleChange}
                />
              </div>
            </div>
            <div className="text-center mt-2">
              <button type="submit" className="btn btn-lg btn-register w-100">
                <i className="fas fa-sign-in-alt me-2"></i>Login
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mt-5">
        <h2 className="section-title">How It Works</h2>
        <div className="row g-4 text-center">
          {howItWorks.map((h, i) => (
            <div className="col-md-4" key={i}>
              <div className="recipe-card p-4">
                <i className={`fas ${h.icon} fa-2x mb-3`} style={{ color: '#ff4f4f' }}></i>
                <h4 className="recipe-title">{h.step}</h4>
                <p>{h.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="container mt-5 mb-5">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="accordion" id="faqAccordion">
          {faqs.map((f, i) => (
            <div className={`accordion-item ${i > 0 ? 'mt-2' : ''}`} key={i}>
              <h2 className="accordion-header">
                <button
                  className={`accordion-button ${i !== 0 ? 'collapsed' : ''}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#faq${i}`}
                >
                  {f.q}
                </button>
              </h2>
              <div id={`faq${i}`} className={`accordion-collapse collapse ${i === 0 ? 'show' : ''}`}>
                <div className="accordion-body">{f.a}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
