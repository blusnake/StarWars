import DataList from '../../components/DataList'
import { useSelector } from 'react-redux'
import { setError } from '../../store/characters/charactersSlice'
import { useGetData } from '../../hooks/useGetData'
import Button from '../../components/Button'
import DataCard from '../../components/DataCard/DataCard'


const Characters = () => {
  const { data, prevBtnLink, nextBtnLink, cardData, isLoading, btnClickHandle } = useGetData('people', setError)
  const charactersError = useSelector((s) => s.characters.error)
  const storedDataObj = localStorage.getItem('dataObj');
  const hasStoredData = storedDataObj !== null;
  return (
    <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:'2em'}}>
      {isLoading ? <>Loading</> : (
        <div>
          {charactersError ? <>Something go wrong! Try later!</> : <DataList data={data} path='characters' />}
          <div className='btn_cont'>
            {prevBtnLink && <Button onClick={(e) => btnClickHandle(e)} value='prev' >Prev</Button>}
            {nextBtnLink && <Button onClick={(e) => btnClickHandle(e)} value='next' >Next</Button>}
          </div>
        </div>
      )}

      {hasStoredData ? (
        <DataCard data={cardData} />
      ) : (
        <></>
      )}
    </div>
  )
}

export default Characters