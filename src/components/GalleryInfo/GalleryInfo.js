import React from 'react';
import './GalleryInfo.css'

const GalleryInfo = () => {

    return(
        <div className="info">
            <h2>Road Trip Photo Gallery</h2>
            <h3>Installation</h3>
            <p>Everything should be all set, all you have to do is run npm install. Then when you want to use the application.
            Run npm run server and npm run client in your terminal.</p>
            <h3>Usage</h3>
            <p>This is just a simply photo gallery application and the ability to like photos like a mini Facebook or Instagram. Eventually I'm planning on adding the ability to add new photo's thru inputs with delete functionality. Plus some extra styling and features.</p>
            <h3>Built With:</h3>
            <ul>
                <li>React</li>
                <li>Axios</li>
                <li>PG</li>
                <li>Express</li>
                <li>SweetAlert</li>
            </ul>
            <h3>Acknowledgement</h3>
            <p>Thanks to my teachers and fellow students at EDA with the help to understand React.</p>
            
        </div>
    )
}

export default GalleryInfo;