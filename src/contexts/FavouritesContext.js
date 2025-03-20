import { createContext, useContext, useState } from 'react';

const FavouritesContext = createContext();

export const FavouritesProvider = ( { children } ) => {
	const [ favorites, setFavorites ] = useState( [] );

	const toggleFavorite = ( item ) => {
		setFavorites( ( prev ) =>
			prev.includes( item ) ? prev.filter( ( i ) => i !== item ) : [ ...prev, item ]
		);
	};

	return (
		<FavouritesContext.Provider value={ { favorites, toggleFavorite } }>
			{ children }
		</FavouritesContext.Provider>
	);
};

export const useFavourites = () => useContext( FavouritesContext );