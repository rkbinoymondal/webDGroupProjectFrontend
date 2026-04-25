import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Loader from '../components/Loader';

export default function Profile() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const email = localStorage.getItem('userEmail');
      if (!email) {
        navigate('/');
        return;
      }
      try {
        const response = await axios.get(`https://webdgroupprojectbackend-1.onrender.com/login/${email}`);
        if (response.data && response.data.email) {
          setUserData(response.data);
        } else {
          localStorage.removeItem('userEmail');
          navigate('/');
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        localStorage.removeItem('userEmail');
        navigate('/');
      }
    };
    fetchUserData();
  }, [navigate]);

  const handleLogout = async () => {
    const confirmLogout = window.confirm("Do you want to logout?");
    if (confirmLogout) {
      const email = localStorage.getItem('userEmail');
      if (email) {
        try {
          await axios.delete(`https://webdgroupprojectbackend-1.onrender.com/favorites/${email}`);
          await axios.delete(`https://webdgroupprojectbackend-1.onrender.com/recipes/${email}`);
        } catch (error) {
          console.error("Error deleting user data on logout:", error);
        }
      }
      localStorage.removeItem('userEmail');
      navigate('/');
    }
  };

  if (!userData) {
    return (
      <>
        <Navbar />
        <Loader message="Loading Profile..." fullScreen={false} />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      
      <section className="container mt-5 mb-5">
        <h2 className="section-title text-center mb-4">My Profile</h2>
        <div className="registration-section mx-auto position-relative" style={{ maxWidth: '750px', backgroundColor: '#fff', borderRadius: '20px', padding: '40px', boxShadow: '0 10px 40px rgba(0,0,0,0.08)' }}>
          
          <button 
            onClick={handleLogout} 
            className="btn btn-outline-danger position-absolute" 
            style={{ top: '25px', right: '25px', borderRadius: '30px', padding: '8px 20px', fontWeight: 'bold' }}
          >
            <i className="fas fa-sign-out-alt me-2"></i>Logout
          </button>

          <div className="text-center mb-5 mt-3">
            <div className="d-inline-block position-relative mb-3">
               <i className="fas fa-user-circle" style={{ fontSize: '100px', color: '#ff4f4f' }}></i>
            </div>
            <h3 className="fw-bold fs-2 text-dark">{userData.name}</h3>
            <p className="text-muted fs-5 mb-0">{userData.email}</p>
          </div>

          <div className="profile-details mt-4">
            <h5 className="mb-4 fw-bold text-secondary border-bottom pb-2">Personal Information</h5>
            
            <div className="row g-4">
              <div className="col-md-6">
                <div className="p-3 rounded" style={{ backgroundColor: '#f8f9fa', borderLeft: '4px solid #0d6efd', boxShadow: '0 2px 5px rgba(0,0,0,0.02)' }}>
                  <div className="text-muted small fw-bold text-uppercase mb-1"><i className="fas fa-phone me-2 text-primary"></i>Phone Number</div>
                  <div className="fs-5 fw-semibold text-dark">{userData.phone}</div>
                </div>
              </div>
              
              <div className="col-md-6">
                <div className="p-3 rounded" style={{ backgroundColor: '#f8f9fa', borderLeft: '4px solid #198754', boxShadow: '0 2px 5px rgba(0,0,0,0.02)' }}>
                  <div className="text-muted small fw-bold text-uppercase mb-1"><i className="fas fa-calendar-alt me-2 text-success"></i>Age</div>
                  <div className="fs-5 fw-semibold text-dark">{userData.age} Years Old</div>
                </div>
              </div>
              
              <div className="col-md-6">
                <div className="p-3 rounded" style={{ backgroundColor: '#f8f9fa', borderLeft: '4px solid #dc3545', boxShadow: '0 2px 5px rgba(0,0,0,0.02)' }}>
                  <div className="text-muted small fw-bold text-uppercase mb-1"><i className="fas fa-map-marker-alt me-2 text-danger"></i>State</div>
                  <div className="fs-5 fw-semibold text-dark">{userData.state}</div>
                </div>
              </div>
              
              <div className="col-md-6">
                <div className="p-3 rounded" style={{ backgroundColor: '#f8f9fa', borderLeft: '4px solid #ffc107', boxShadow: '0 2px 5px rgba(0,0,0,0.02)' }}>
                  <div className="text-muted small fw-bold text-uppercase mb-1"><i className="fas fa-lock me-2 text-warning"></i>Password</div>
                  <div className="fs-5 fw-semibold text-dark">••••••••</div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      <Footer />
    </>
  );
}
