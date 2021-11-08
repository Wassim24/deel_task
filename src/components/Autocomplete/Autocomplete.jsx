import React from 'react';
import { fetchAlbums } from '../../api/albums.api';
import AutocompleteResults from './AutocompleteResults';
import './Autocomplete.css';

class Autocomplete extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: '', matchingValues: undefined}
        this.fetchAlbumsWithKeyWord = this.fetchAlbumsWithKeyWord.bind(this);
    }

    fetchAlbumsWithKeyWord(event) {
        const keyword = event.target.value;
        this.setState({value: keyword});

        if(keyword !== undefined && keyword !== '')
            fetchAlbums(keyword)
                .then(albums => this.setState({matchingValues: albums}));
        else 
            this.setState({matchingValues: undefined})
    }

    render() {
        return(
            <div className='autocomplete-container'>
                <h4 className='autocomplete-title'>Search for your albums with autocomplete !</h4>
                <input type="text" value={this.state.value} onChange={this.fetchAlbumsWithKeyWord} />
                <AutocompleteResults results={this.state.matchingValues} />
            </div>
        )
    }
}

export default Autocomplete;