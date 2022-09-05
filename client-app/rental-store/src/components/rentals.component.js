import React, { useEffect } from 'react'
import { useState } from 'react'
import { getRentals } from '../backend-requests/requests'
import { Box } from '@mui/system';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieCard from './movieCard.component';

function Rentals(props) {
  let [rentals,setRentals]=useState([])
  useEffect(()=>{
    getRentals(d=>{console.log(setRentals(d))},props.getdetails()[0])
  },[])
  return (
    <div>
      <div className="col">
            <Box className='row centerDiv'>
                {props.movies.length>0&&props.movies.filter(movie=>rentals.includes(movie.title)).map(movie=>(
                <MovieCard movie={movie} btnEn={false}/>
                ))}
            </Box>
        </div>
    </div>
  )
}

export default Rentals