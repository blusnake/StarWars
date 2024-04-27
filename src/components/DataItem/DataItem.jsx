import React from 'react'
import LinkComponent from '../LinkComponent'
import './DataItem.css'
const DataItem = ({dataObj, path, idx}) => {
  
  return (
    <>
        <LinkComponent path={`/${path}/${idx}`} ><li>{dataObj.fields.name || dataObj.fields.starship_class || dataObj.fields.title}</li></LinkComponent> 
    </>
  )
}

export default DataItem