import React from "react";


class ImageCard extends React.Component{

    constructor(props){
        super(props);
        this.state={spans:0};
        this.imageRef= React.createRef();
    }
    componentDidMount(){
        this.imageRef.current.addEventListener('load',this.spanImage)
        console.log(this.imageRef.current.clientHeight);
    }
    spanImage =() =>{
        const height = this.imageRef.current.clientHeight;
        const spans = Math.floor((height) / 150+1)
        this.setState({spans})
    }
    render(){
        return (
        <div className="ui card" style={{gridRowEnd: `span ${this.state.spans}`, backgroundColor:`${this.props.image.color || "#fff"}`}}>
          <a className="image" href="#">
            <img ref={this.imageRef} src={this.props.image.urls.regular}
                                      alt={this.props.image.description} />
          </a>
          <div className="content">
            <a className="header" href="#">By {this.props.image.user.name || "unknown"}</a>
            <div className="meta">
              <a>{this.props.image.user.location || "unknown"}</a><hr/>
              <a>Create At {this.props.image.created_at || "unknown"}</a>
            </div>
          </div>
        </div>
        )
    }
}

export default ImageCard;