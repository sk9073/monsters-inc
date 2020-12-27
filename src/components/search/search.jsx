import React from 'react';
import './search.css';

export const Search = ({placeHolder,Handle}) => {
    return <input type='search' 
    className = 'search'
    placeholder={placeHolder}
    onChange = {Handle}/>
}