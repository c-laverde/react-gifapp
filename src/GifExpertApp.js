import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertAPP = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragón Ball'];
    const [categories, setCategories] = useState( ['Dragón Ball'] );

    /* const handleAdd = () => {
        setCategories( [...categories, 'Pokémon'] );
        // setCategories( cats => [...cats, 'Pokémon'] );
    } */

    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories= { setCategories } />
            <hr />

            {/* <button onClick= { handleAdd } >Add Category</button> */}

            <ol>
                {
                    categories.map( category => (
                        <GifGrid
                            key={ category }
                            category={ category }
                        />
                    ))
                }
            </ol>
        </>
    );
};

export default GifExpertAPP;