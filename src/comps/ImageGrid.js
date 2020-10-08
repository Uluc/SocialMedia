import React from 'react';
import useFirestore from '../firebase/config';

const ImageGrid = () => {

    const {docs} = useFirestore('images'); //pass the name of the collection we are listening to. 
    console.log(docs)
    
    return (
        <div className="img-grid">
            {docs && docs.map(doc => ())}
        </div>
    )
}

export default ImageGrid;