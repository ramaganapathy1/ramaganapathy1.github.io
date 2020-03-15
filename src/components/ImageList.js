import React from 'react';
import "./ImageList.css";
import ImageCard from "./ImageCard";

class ImageList extends React.Component{
    state={images:[]}
    render(){
          console.log(this.props.images);
          const images= this.props.images.map((image)=>{
            return <ImageCard key={image.id} image={image}/>
          })
        return (<div className="image-list" >{images} </div>);
    }
}

export default ImageList;