import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
const ExploreMenu = ({category, setCategory}) => {
  return (

    //list menu//
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore Our menu</h1>
<p className='explore-menu-text'>Welcome to MR Chef your ultimate destination for delicious, freshly prepared meals delivered straight to your door. Our diverse menu features a wide array of culinary delights, from mouth-watering appetizers and savory mains to delectable desserts, all crafted with the finest ingredients</p>   
<div className="explore-menu-list">
    {/* Iterates over the menu_list array using the map function to generate menu list items dynamically. */}
    {menu_list.map((item,index)=>{
        return(
            //Represents an individual menu list item. The key attribute is set to the index value to uniquely identify each item 
            //also includes bordering with color the selected image
            <div 
            onClick={()=> setCategory(prev=>prev===item.menu_name?null:item.menu_name)} key={index} className="explore-menu-list-item">
                <img  className ={category===item.menu_name?"active = border-[4px] border-orange-700 p-[5px]" :""} src={item.menu_image}  alt="" />
                 {/* Displays the menu name for each item. */}
               <h5>{item.menu_name}</h5>
            </div>
        )
    })}
    </div>   
    <hr/>
    </div>
  )
}

export default ExploreMenu
