import React from 'react';
import axios from 'axios';
import './GalleryItem.css'


const GalleryItem = (props) => {
    const{ picture } = props;


    return(
        <div className='item'>
            <img src={picture.path} alt='Mountain Goat' />
            <button>Love It!!</button>
            <p>{props.likes} this many people liked this photo</p>
        </div>
    );
};



export default GalleryItem;