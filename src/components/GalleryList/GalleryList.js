import React, { Component } from 'react';
import './GalleryList.css'
import GalleryItem from '../GalleryItem/GalleryItem'

const GalleryList = (props) => {
    const {pictures, gallery} = props;
    return (
        <div className='container'>
        {pictures.map(art => <GalleryItem picture={art} gallery={gallery}/> )}
        </div>
    )
}

export default GalleryList;