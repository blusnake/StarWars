import DataList from '../../components/DataList';
import { useSelector } from 'react-redux';
import { setError } from '../../store/starships/starshipsSlice';
import { useGetData } from '../../hooks/useGetData';
import Button from '../../components/Button';
import DataCard from '../../components/DataCard/DataCard';
import Loader from '../../components/Loader/Loader';

const Planets = () => {
  const { data, prevBtnLink, nextBtnLink, cardData, isLoading, btnClickHandle } = useGetData('planets', setError);
  const planetsError = useSelector((s) => s.planets.error);

  const storedDataObj = localStorage.getItem('dataObj');
  const hasStoredData = storedDataObj !== null;

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '2em' }}>
      {isLoading ? (
        <div><Loader /></div>
      ) : (
        <div>
          {planetsError ? (
            <>Something went wrong! Try later!</>
          ) : (
            <DataList data={data} path="planets" />
          )}
          <div className="btn_cont">
            {prevBtnLink && <Button onClick={(e) => btnClickHandle(e)} value='prev' >Prev</Button>}
            {nextBtnLink && <Button onClick={(e) => btnClickHandle(e)} value='next' >Next</Button>}
          </div>
        </div>
      )}

      {<DataCard data={cardData} />}

    </div>
  );
};

export default Planets;
