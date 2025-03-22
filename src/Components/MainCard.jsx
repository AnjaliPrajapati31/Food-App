import React from 'react'
import {useNavigate} from 'react-router-dom'

const MainCard = ({details}) => {
   const navigate=useNavigate()
   function handlebutton(idMeal){
       navigate(`/recipe/${idMeal}`)
   }
  return (
   <div className='cardinfo'>{!details?"":details.meals.map((currelement)=>{
        return(
         <>
         <div className='card'>
            <img src={currelement.strMealThumb}/>
            <p>{currelement.strMeal}</p>
            <button className='Searchbtn' onClick={()=>{handlebutton(currelement.idMeal)}}>Recipe</button>
         </div>
         </>
        )
   })}
   </div>
   )
}

export default MainCard