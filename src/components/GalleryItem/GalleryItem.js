import React from 'react';
import axios from 'axios';
import './GalleryItem.css'
import GalleryList from '../GalleryList/GalleryList'

// function addLike(event) {
//     let el = event.target.id
//     console.log(el);
//     axios.put(`/gallery/like/${el}`).then(()=>{console.log(`updating likes for picture with id of ${el}` ); gallery.getGallery();
//     }).catch((error)=>{console.log(error);
//     })   
// }


const GalleryItem = (props) => {
    const{ picture, gallery} = props;

    function addLike(event) {
        let el = event.target.id
        console.log(el);
        axios.put(`/gallery/like/${el}`).then(()=>{console.log(`updating likes for picture with id of ${el}` ); gallery();
        }).catch((error)=>{console.log(error);
        })   
    }

    return(
        <div className='item'>
            <img src={picture.path} alt='Mountain Goat' />
            <button className='picture' id={picture.id} onClick={addLike}>Like It!!</button><br/>
            {picture.likes} Likes
        </div>
    );
};



export default GalleryItem;