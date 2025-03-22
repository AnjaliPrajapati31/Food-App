import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const RecipePage = () => {
    const{idMeal}=useParams();
    const[meal,setMeal]=useState(null)
//     const[res,setRes]=useState();

    const API=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    const getInfo=async()=>{
        const res=await axios.get(API)
        console.log(res.data.meals[0])
        setMeal(res.data.meals[0])
           }
    useEffect(()=>{
      getInfo();
    },[idMeal])

    // if(meal!=""){
    //   getInfo();
    // }
return (
  <div>
  {
    meal?(<div className='recipe-info'>
        <img src={meal.strMealThumb} alt="" />
        <div className='details'> <span className='nameofrecipe'>{meal.strMeal}</span>
        <p id='heading'>Instructions:</p>
        <p style={{ whiteSpace: 'pre-line' }}>{meal.strInstructions}</p>
        <button className='link'><NavLink to="/">Back</NavLink></button></div>
       </div>):(console.log(meal))
  } 
     </div>  
  )
}


export default RecipePage