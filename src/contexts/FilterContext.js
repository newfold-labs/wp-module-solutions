import {
	createContext,
	useContext,
	useState,
	useEffect,
} from '@wordpress/element';
import { useNavigate } from 'react-router-dom';

const FilterContext = createContext();

export const FilterProvider = ( { children } ) => {
	const params = new URLSearchParams( window.location.search );
	const initialCategory = params.get( 'category' );
	const initialSearch = params.get( 's' );
	const [ category, setCategory ] = useState( initialCategory || 'all' );
	const [ search, setSearch ] = useState( initialSearch || '' );

	useEffect( () => {
		const url = new URL( window.location.href );
		const params = new URLSearchParams( url.search );

		const paramsToUpdate = {
			s: search,
			category,
		};

		Object.keys( paramsToUpdate ).map( ( key ) => {
			if ( paramsToUpdate[ key ] ) {
				params.set( key, paramsToUpdate[ key ] );
			} else {
				params.delete( key );
			}
		} );

		const newUrl = `${ url.pathname }?${ params.toString() }`;
		window.history.replaceState( {}, '', newUrl );
	}, [ search, category ] );

	return (
		<FilterContext.Provider
			value={ { category, setCategory, search, setSearch } }
		>
			{ children }
		</FilterContext.Provider>
	);
};

export const useFilter = () => useContext( FilterContext );
