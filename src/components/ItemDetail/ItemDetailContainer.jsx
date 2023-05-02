import React, { useEffect, useState } from 'react'
import { getProducto } from '../../Assets/data/asyncMock'
import { ItemDetail } from './ItemDetail'
import { useParams } from 'react-router-dom'

export const ItemDetailContainer = () => {

    const [producto, setproducto] = useState({})

    const params = useParams()
    const {id} = params

    useEffect(() => {
        getProducto(id)
        .then((response) => {
            setproducto(response)
        })
        .catch((error) => console.log(error))
    },[id])

  return (
    <ItemDetail productDetail={producto}/>
  )
}
