import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => { // se utiliza para indicar que ejecute la acción sólo cuando el componente se renderiza por primera vez
        getGifs( category )
            .then( images => {
                setState({
                    data: images,
                    loading: false
                });
            });
    }, [ category ]);

    return state;
}