import { useEffect} from 'react'
import './DataCard.css'

const DataCard = ({data}) => {
    useEffect(() => {
        localStorage.setItem('dataObj', JSON.stringify(data))
    })
    return ( 
        <div>
            {data && (
                <div className='datacard_cont'>
                    <h3 className='datacard_name'>Name: {data?.fields.name || data?.fields.starship_class || data?.fields.title}</h3>
                    <p className='datacard_first_info'>
                        {typeof data?.fields.gender === 'string' ? 'Gender: ' + data?.fields.gender : ''}
                        {typeof data?.fields.MGLT === 'string' ? 'MGLT: ' + data?.fields.MGLT : ''}
                        {typeof data?.fields.climate === 'string' ? 'Climate: ' + data?.fields.climate : ''}
                        {typeof data?.fields.director === 'string' ? 'Director: ' + data?.fields.director : ''}
                    </p>
                    <p className='datacard_second_info'>
                        {typeof data?.fields.height === 'string' ? 'Height: ' + data?.fields.height + ' cm' : ''}
                        {typeof data?.fields.hyperdrive_rating === 'string' ? 'Hyperdrive rating: ' + data?.fields.hyperdrive_rating : ''}
                        {typeof data?.fields.orbital_period === 'string' ? 'Orbital period: ' + data?.fields.orpital_period : ''}
                        {typeof data?.fields.release_date === 'string' ? 'Release date: ' + data?.fields.release_date : ''}
                    </p>
                    <p className='datacard_third_info'>
                        {typeof data?.fields.mass === 'string' ? 'Mass: ' + data?.fields.mass + ' kg' : ''}
                        {typeof data?.fields.terrain === 'string' ? 'Terrain: ' + data?.fields.terrain : ''}
                        {typeof data?.fields.producer === 'string' ? 'Producer: ' + data?.fields.producer : ''}
                    </p>
                </div>
            )}
        </div>
    )
}

export default DataCard