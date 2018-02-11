import React, { Component } from 'react';

import SearchBar from '../containers/search_bar';
import GoogleSearch from '../containers/google_search';
import DuckDuckGoSearch from './duckduckgo_search';
import BingSearch from './bing_search';

class TripleSearchApp extends Component{
    constructor(props){
        super(props);
        this.state={
            term: ''
        }
    }
    
    render(){
        return (
            <div>
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <SearchBar 

                        />
                    </div>
                    <div className="col-md-3"></div>
                </div>
                <div className="row">
                    <GoogleSearch 

                    />
                    <DuckDuckGoSearch 
                    
                    />
                    <BingSearch 
                    
                    />
                </div>
            </div>
        );
    }
}

export default TripleSearchApp;