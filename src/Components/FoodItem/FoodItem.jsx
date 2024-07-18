import './FoodItem.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faStar, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'; 
import { useContext } from 'react'; 
import { StoreContext } from '../../Context/StoreContext'; // Import the StoreContext to access the global state

const FoodItem = ({ id, name, price, description, image }) => {
  // Access cartItems, addToCart, and removeFromCart from the StoreContext
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className="food-item-img w-[100%] h-[230px] rounded-lg" src={image} alt="" />
        {/* If the item is not in the cart, show the add button */}
        {!cartItems[id] 
          ? <FontAwesomeIcon icon={faPlus} className='add' onClick={() => addToCart(id)} />
          : <div className='food-item-counter'>
              {/* If the item is in the cart, show the counter with minus and plus buttons */}
              <FontAwesomeIcon icon={faMinus} onClick={() => removeFromCart(id)} className='bg-pink-500 rounded-full w-[20px] h-[20px] p-2' />
              <p>{cartItems[id]}</p>
              <FontAwesomeIcon icon={faPlus} onClick={() => addToCart(id)} className='bg-green-500 p-2 rounded-full w-[20px] h-[20px]' />
            </div>
        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p> {/* Display the food item name */}
          <div className='stars'>
            {/* Display 5 stars, 5 of them colored orange */}
            <FontAwesomeIcon icon={faStar}  />
            <FontAwesomeIcon icon={faStar}  />
            <FontAwesomeIcon icon={faStar}  />
            <FontAwesomeIcon icon={faStar}  />
            <FontAwesomeIcon icon={faStar}  />
            <FontAwesomeIcon icon={faStar} />
          </div>
        </div>
        <p className="food-item-desc">{description}</p> {/* Display the food item description */}
        <p className="food-item-price">${price}</p> {/* Display the food item price */}
      </div>
    </div>
  )
}

export default FoodItem; 
