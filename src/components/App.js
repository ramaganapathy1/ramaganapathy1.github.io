import React from 'react';
import SearchBar from "./searchBar";
import axiosBase from "./api/axiosApi";
import ImageList from "./ImageList.js";

class App extends React.Component{
    state={images:[],total:0};

    getAction= async (term)=>{
        const response= await axiosBase.get("search/photos",{
            params: {
                query:term
            }
        });
        console.log(response)
        this.setState({images:response.data.results,total:response.data.total})
    }

    render(){
        return (<div className="ui container" ><SearchBar onAction={this.getAction} /><hr />
        Found : {this.state.total} &nbsp;Showing: {this.state.images.length} images results
        <ImageList images={this.state.images} />
        </div>);
    }
}

export default App;