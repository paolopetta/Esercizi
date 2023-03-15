import React, {useState, useEffect, useRef} from "react";

import searchIcon from '../../images/search-icon.svg';

import {Wrapper, Content} from './SearchBar.styles';

const SearchBar = ({setSearchTerm}) => {
    const [state, setState] = useState('')
    useEffect(() => {
        const timer = setTimeout(() => {
            setSearchTerm(state)
        }, 500)

        return () => clearTimeout(timer)
    }, [setSearchTerm, state])

    return (
        <Wrapper>
          <Content>
            <img src={searchIcon} alt='search-icon' />
            <input 
            type='text' 
            placeholder='Cerca Comuni' 
            onChange={event => setState(event.currentTarget.value)}
            value={state}
            />
          </Content>
        </Wrapper>
      );

    
};

export default SearchBar;