import React from 'react'
import DataItem from '../DataItem'
import './DataList.css'

const DataList = ({ data, path }) => {
  return (
      <ul className='data_list_list'>

        {
          data.map((el, idx) => (
            <DataItem key={idx} dataObj={el} path={path} idx={idx}>
            </DataItem>


          ))

        }
      </ul>
  )
}

export default DataList