import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RestaurantLogout } from '../../services/restaurantApi';
import toast from 'react-hot-toast';
import { resetRestaurant } from '../../features/restaurant/restaurantSlice';

const RestaurantLogoutPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
  
    useEffect(() => {
      const logOut = async () => {
        try {
          const response = await RestaurantLogout();
          dispatch(resetRestaurant()); // Clear the Restaurant state in Redux
            toast.success("Logout successful");
            navigate("/");
        } catch (error) {
          console.error("Logout error:", error);
          toast.error("An error occurred during logout");
        }
      };
  
      logOut();
    }, [navigate]);
  
    return (
      <main>
        <section>
          <h1>Logging out....</h1>
        </section>
      </main>
    );
  };  

export default RestaurantLogoutPage
