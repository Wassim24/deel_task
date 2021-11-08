import { useState } from "react";

const Autocomplete = (props) => {

    const [matchingValues, setMatchingValues] = useState(undefined);
    const [value, setValue] = useState(undefined);


    const fetchAlbumsWithKeyWord = (event) => {
        const keyword = event.target.value;
        setValue(keyword);

        if(keyword !== undefined && keyword !== '')
            fetchAlbums(keyword)
                .then(albums => setMatchingValues(albums));
        else 
            setMatchingValues(undefined)
    }

    return (
        <div className='autocomplete-container'>
            <h4 className='autocomplete-title'>Search for your albums with autocomplete !</h4>
            <input type="text" value={value} onChange={fetchAlbumsWithKeyWord} />
            <AutocompleteResults results={matchingValues} />
        </div>
    );
}

export default Autocomplete;