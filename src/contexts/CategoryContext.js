import { createContext, useContext, useState } from '@wordpress/element';
import { useParams } from 'react-router-dom';

const CategoryContext = createContext();

export const CategoryProvider = ( { children } ) => {
	const { category } = useParams();
	//const navigate = useNavigate();
	const [ selectedCategory, setSelectedCategory ] = useState( category || 'all' );

	const changeCategory = ( newCategory ) => {
		setSelectedCategory( newCategory );
		// navigate( `/solutions/${ newCategory }` );
	};

	return (
		<CategoryContext.Provider value={ { selectedCategory, changeCategory } }>
			{ children }
		</CategoryContext.Provider>
	);
};

export const useCategory = () => useContext( CategoryContext );
