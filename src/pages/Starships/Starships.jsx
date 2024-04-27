import DataList from '../../components/DataList';
import { useSelector } from 'react-redux';
import { setError } from '../../store/starships/starshipsSlice';
import { useGetData } from '../../hooks/useGetData';
import Button from '../../components/Button';
import DataCard from '../../components/DataCard/DataCard';

const Starships = () => {
  const { data, prevBtnLink, nextBtnLink, cardData, isLoading, btnClickHandle } = useGetData('starships', setError);
  const starshipsError = useSelector((s) => s.starships.error);

  const storedDataObj = localStorage.getItem('dataObj');
  const hasStoredData = storedDataObj !== null;

  return (
    <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:'2em'}}>
      {isLoading ? (
        <>Loading</>
      ) : (
        <div>
          {starshipsError ? (
            <>Something went wrong! Try later!</>
          ) : (
            <DataList data={data} path="starships" />
          )}
          <div className="btn_cont">
            {prevBtnLink && (
              <Button onClick={(e) => btnClickHandle(e, 'prev')}>Prev</Button>
            )}
            {nextBtnLink && (
              <Button onClick={(e) => btnClickHandle(e, 'next')}>Next</Button>
            )}
          </div>
        </div>
      )}

      {hasStoredData ? (
        <DataCard data={cardData} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Starships;
