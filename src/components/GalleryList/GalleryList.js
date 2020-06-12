import React, { Component } from 'react';

const GalleryList = (props) => {
    const {pictures} = props;
    return (
        <div>
        {pictures.map(art => <p><img src={art.path}/></p> )}
        </div>
    )
}

export default GalleryList;