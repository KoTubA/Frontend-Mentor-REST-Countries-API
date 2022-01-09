import React, { useReducer, useContext, useEffect, useState } from 'react';
const CountriesContext = React.createContext({});

const actionTypes = {
  showCountries: 'SHOW COUNTRIES',
  setError: 'SET ERROR',
  setFilter: 'SET FILTER',
  setQuery: 'SET QUERY',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.showCountries:
      return {
        ...state,
        countries: action.result,
        isLoading: false,
      };
    case actionTypes.setFilter:
      return {
        ...state,
        activeFilter: action.filter,
      };
    case actionTypes.setQuery:
      return {
        ...state,
        activeQuery: action.query,
      };
    case actionTypes.setError:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export const CountriesStore = ({ children }) => {
  const initialState = {
    countries: [],
    activeFilter: 'all',
    activeQuery: '',
    isLoading: true,
    isError: false,
  };

  const [countriesState, dispatch] = useReducer(reducer, initialState);
  const [openFilter, setOpenFilter] = useState(false);
  const [value, setValue] = useState('');

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response);
        }
      })
      .then((result) => {
        console.log(result);
        showCountries(result);
      })
      .catch(() => {
        setError();
      });
  }, []);

  useEffect(() => {
    const timeOutId = setTimeout(() => setQuery(value), 500);
    return () => clearTimeout(timeOutId);
  }, [value]);

  const setOpen = () => {
    openFilter ? setOpenFilter(false) : setOpenFilter(true);
  };

  const showCountries = (result) => {
    dispatch({ type: actionTypes.showCountries, result });
  };

  const setFilter = (filter) => {
    dispatch({ type: actionTypes.setFilter, filter });
  };

  const setQuery = (query) => {
    dispatch({ type: actionTypes.setQuery, query });
  };

  const setError = () => {
    dispatch({ type: actionTypes.setError });
  };

  return <CountriesContext.Provider value={{ countriesState, openFilter, setOpenFilter, value, setValue, setOpen, setFilter, setQuery }}>{children}</CountriesContext.Provider>;
};

export const useCountries = () => {
  const todoContext = useContext(CountriesContext);

  if (!todoContext) {
    throw Error('useCountries needs to be used inside CountriesStore');
  }

  return todoContext;
};
