import React from 'react';
import axios from 'axios';
import './GalleryItem.css'
import swal from 'sweetalert';

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
    function popUp() {
        swal({
            icon: picture.path,
            text: picture.description,
        })
    }

    return(
        <div className='item'>
            <img src={picture.path} alt={picture.description} onClick={popUp} />
            <button className='picture' id={picture.id} onClick={addLike}>Like It!!</button><br/>
            {picture.likes} Likes
        </div>
    );
};



export default GalleryItem;