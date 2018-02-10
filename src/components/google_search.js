import React, {Component } from 'react';
import GoogleCSE from 'google-search';

class GoogleSearch extends Component{
    constructor(props){
        super(props);
        this.state = { term: ''};

    }
    searchGoogle(term){
        const API_KEY = 'AIzaSyB6CDWuIcIEmSaIg7nFz0Zt7HAyAZYT--w';
        const cx = '009596185749625735805:sp0brtpgh0m';
        const GoogleCSE = new GoogleCSE({
            key: API_KEY,
            cx: cx
        });
        GoogleCSE.build({
            q: this.state.term
            
            }, 
            function(error, response){
                console.log(response);
            }
        );
    }
    
    render(){
        return(
            <div className="col-md-4">
      
            </div>
        );
    }
}

export default GoogleSearch;