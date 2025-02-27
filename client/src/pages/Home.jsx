import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/restaurants");
        setRestaurants(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchRestaurants();
  }, []);

  return (
    <>
      <div>
        <h1>Welcome to the Zomato Clone!</h1>
        <p>This is the home page where we’ll list restaurants.</p>
      </div>

      <div>
        <h1>Restaurants</h1>
        {restaurants.map((restaurant) => (
          <div key={restaurant._id}>
            <h2>{restaurant.name}</h2>
            <p>{restaurant.location}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
