import React from 'react';
import './AutocompleteResults.css';


class AutocompleteResults extends React.Component {
    constructor(props) {
        super(props);
    }

    isResultEmpty() {
        return this.props.results.length === 0;
    }

    renderResult(item) {
        return <li key={item.id} className={'autocomplete-results-item'}>{item.title}</li>
    }

    renderResults(items) {
        return <ul className={'autcomplete-results'}>{
            this.isResultEmpty() 
                ? this.renderResult({id: -1, title: 'No matching result has been found.'})
                : items.map(item => this.renderResult(item))
        }</ul>
    }

    render() {
        return this.props.results ? <div>{this.renderResults(this.props.results)}</div> : null;
    }
}

export default AutocompleteResults;