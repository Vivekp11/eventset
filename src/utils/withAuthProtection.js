import React, {useEffect} from 'react';
import { useNavigate} from 'react-router-dom';

const withAuthProtection = (Component) => {
  const AuthProtectionComponent = () => {
    const navigate = useNavigate();
    const isLoggedIn = !!localStorage.getItem('token');
    
    useEffect(() => {
        if (!isLoggedIn) {
          navigate('/login');
        }
      }, [isLoggedIn, navigate]);
  
      if (isLoggedIn) {
        return <Component />;
      } else {
        return null; // or show a loading spinner, redirect message, etc.
      }
    };
  

  return AuthProtectionComponent;
};

export default withAuthProtection;