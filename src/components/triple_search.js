import React, { Component } from 'react';

import SearchBar from './search_bar';
import GoogleSearch from './google_search';
import DuckDuckGoSearch from './duckduckgo_search';
import BingSearch from './bing_search';

class TripleSearchApp extends Component{
    constructor(props){
        super(props);
        this.state = { searchTerm: null };
        
    }
    
    render(){
        return (
            <div>
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <SearchBar 
                            onSearchTermChange={searchTerm => this.setState({searchTerm})}
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