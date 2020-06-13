import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem'

const GalleryList = (props) => {
    const {pictures} = props;
    return (
        <div>
        {pictures.map(art => <GalleryItem picture={art}/> )}
        </div>
    )
}

export default GalleryList;