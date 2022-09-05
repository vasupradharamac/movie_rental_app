import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {getAssetString, postRentalReq} from '../backend-requests/requests'
import { Box } from '@mui/system';
import {NotificationContainer, NotificationManager} from 'react-notifications';

function MovieCard(props) {
    let movie=props.movie
    let btnEn=props.btnEn
    let refresh=props.refresh
    const onRentClicked=()=>{
        postRentalReq((d)=>{
          if(d?.msg.includes("created"))
            NotificationManager.success('Renting Success!')
          else
            NotificationManager.error('Already Rented!')

        },props.getdetails()[0],movie.title)
        refresh()
    }
  return (
    <div className='card' style={{
        "width": "300px",
        margin:"20px",
        alignContent:"center",
        display:'flex'}}>
        <div className='card-body row'>
            <img src={getAssetString()+movie.imgUrl} style={{width:"200px",height:'200px',marginLeft:"15%"}}/>
            <div className='column'>
            {movie.title}<br/>
            total rents : {movie.rentedBy}<br/>
            {btnEn&&<button className="btn btn-primary" onClick={onRentClicked}>Rent</button>}
            </div>
        </div>
        
    </div>
  )
}

export default MovieCard