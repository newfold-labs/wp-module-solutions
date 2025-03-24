import { createContext, useContext, useState } from '@wordpress/element';
import { useNavigate } from 'react-router-dom';

const CategoryContext = createContext();


export const CategoryProvider = ( { children } ) => {
	const navigate = useNavigate();
	const params = new URLSearchParams( window.location.search );
	const initialCategory = params.get( 'category' );
	const [ selectedCategory, setSelectedCategory ] = useState( initialCategory || 'all' );

	const changeCategory = ( newCategory ) => {
		const updateCategoryInUrl = cat => {
			const url = new URL( window.location.href );
			const params = new URLSearchParams( url.search );

			if ( cat ) {
				params.set( 'category', cat );
			} else {
				params.delete( 'category' );
			}

			const newUrl = `${ url.pathname }?${ params.toString() }`;
			window.history.replaceState( {}, '', newUrl );
		};

		setSelectedCategory( newCategory );
		updateCategoryInUrl( newCategory );
	};

	return (
		<CategoryContext.Provider value={ { selectedCategory, changeCategory } }>
			{ children }
		</CategoryContext.Provider>
	);
};

export const useCategory = () => useContext( CategoryContext );
