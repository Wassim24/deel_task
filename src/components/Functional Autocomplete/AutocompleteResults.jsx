const AutocompleteResults = (props) => {
    const {results} = props;


    const isResultEmpty = () => results.length === 0;

    const renderResult = (item) =>  
        (<li key={item.id} className={'autocomplete-results-item'}>{item.title}</li>);
    

    renderResults = (items) => (        
        <ul className={'autcomplete-results'}>
            {
                isResultEmpty() 
                    ? renderResult({id: -1, title: 'No matching result has been found.'})
                    : items.map(item => renderResult(item))
            }
        </ul>
    )
    
    return (results ? <div>{renderResults(results)}</div> : null);

}