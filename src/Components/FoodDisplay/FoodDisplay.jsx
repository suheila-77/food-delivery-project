import React, { useContext } from 'react';
import './FoodDisplay.css'; 
import { StoreContext } from '../../Context/StoreContext'; 
import FoodItem from '../FoodItem/FoodItem'; 

const FoodDisplay = ({ category }) => {
  // Access the food list from the StoreContext
  const { food_list } = useContext(StoreContext);

  // Filter food items based on the provided category
  // If no category is provided, all items will be displayed
  const filteredFoodList = category
    ? food_list.filter((item) => item.category === category)
    : food_list;

  return (
    <div className='food-display' id="food-display">
      <h2>Top dishes near you</h2> {/* Display a heading */}
      <div className="food-display-list">
        {filteredFoodList.map((item, index) => (
          <FoodItem
            key={index} // Use index as the key for each FoodItem
            id={item._id} // Pass the item's id to the FoodItem component
            name={item.name} // Pass the item's name to the FoodItem component
            description={item.description} // Pass the item's description to the FoodItem component
            price={item.price} // Pass the item's price to the FoodItem component
            image={item.image} // Pass the item's image to the FoodItem component
          />
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay; // Export the FoodDisplay component
