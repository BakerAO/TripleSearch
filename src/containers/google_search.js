import React, {Component } from 'react';


class GoogleSearch extends Component{
    constructor(props){
        super(props);
        this.state = { term: ''};
        this.searchGoogle('');
    }
    searchGoogle(term){
       
        
    }
    
    render(){
        //const searchResults = this.searchGoogle(term);
        return(
            <div className="col-md-4">
                
            </div>
        );
    }
}

export default GoogleSearch;