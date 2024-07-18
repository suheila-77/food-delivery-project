import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
export const StoreContext = createContext();



const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});

    // The addToCart function takes an itemId as a parameter It checks
    //  if the itemId exists in the cartItems object. If it doesn't exist (!cartItems[itemId] is true), 
    //  it means the item is not yet in the cart, so a new key-value pair is added to the cartItems object with the itemId as
    //   the key and the initial quantity of 1 as the value.
    const addToCart = (itemId) => {

        if (!cartItems[itemId]) {

            setCartItems((prev) => ({ ...prev, [itemId]: 1 }))

        }
        else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
    }
    // The removeFromCart function also takes an itemId as a parameter. 
    // It decrements the quantity of the item identified by itemId 
    // in the cartItems object by 1. Similar to addToCart, 

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    /// for clculating the total of the product
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {

                // if our product id is matching with the item that means the product is available in the card
                let itemInfo = food_list.find((product) => product._id === item)
                totalAmount += itemInfo.price * cartItems[item];
            }

        }
        return totalAmount;
    }

// Function to count the total number of items in the cart
    const getTotalItems = () => {
        let totalItems = 0;
        for (const item in cartItems) {
            totalItems += cartItems[item];
        }
        return totalItems;
    };

    //   useEffect(()=>{
    // console.log(cartItems);
    //   },[cartItems]) // is executed whenever the cartItems value changes for checking cart items. 

    // exporing the items declared in the above to display in the console
    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        getTotalItems

    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}



        </StoreContext.Provider>
    )
}

export default StoreContextProvider;