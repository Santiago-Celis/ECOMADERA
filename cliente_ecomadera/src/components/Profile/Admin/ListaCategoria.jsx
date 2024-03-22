import React from 'react'
import { useState } from 'react';

function ListaCategoria() {
    const [category, setCategory] = useState([]);


    const getCategory = async () => {
        try {
            const res = await axios.get(url)
            setCategory(res.data)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getCategory();
    }, [])


  return (
    <div>
      
    </div>
  )
}

export default ListaCategoria
