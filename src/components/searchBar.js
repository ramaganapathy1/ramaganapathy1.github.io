import React from 'react';

class SearchBar extends React.Component{
    state={value:null}
    onSubmitForm=(event)=>{
        event.preventDefault();
        console.log(event.target);
        console.log(this.state.value);
        this.props.onAction(this.state.value);
    }
    render(){
        return (<div className="ui segment" >
            <form onSubmit={this.onSubmitForm} className="ui form " >
            <div className="field">
                <input type="text" placeholder="Type to Search" value={this.state.value} onChange={(e)=>this.setState({value:e.target.value})}/>
             </div>
            </form>
        </div>);
    }

}
export default SearchBar;