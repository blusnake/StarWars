import {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { useParams } from 'react-router-dom'


export const useGetData = (path, errHandle) => {
    const [data, setData] = useState([])
    const [prevBtnLink, setPrevBtnLink] = useState('')
    const [nextBtnLink, setNextBtnLink] = useState('')
    const [cardData, setCardData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const dispatch = useDispatch()
    const {num} = useParams()

    useEffect(() => {
      if (num !== undefined) {
        const index = parseInt(num, 10);
        const foundData = data[index]; // Ensure index is within bounds
        setCardData(foundData || null);
      }
    }, [num, data]);
    
    useEffect(() => {
        axios(`https://swapi-node.now.sh/api/${path}?page=1`)
            .then(({ data }) => {
                setData(data.results)
                setPrevBtnLink(data.previous)
                setNextBtnLink(data.next)
            })
            .catch(err => dispatch(errHandle(err)))
            .finally(() => setIsLoading(false))
    }, [])
    const btnClickHandle = (e) => { 
        axios(`https://swapi-node.now.sh${e.target.value === "prev" ? prevBtnLink : nextBtnLink}`)
            .then(({ data }) => {
                setData(data.results)
                setPrevBtnLink(data.previous)
                setNextBtnLink(data.next)
            })
    }
    return {data, prevBtnLink, nextBtnLink, cardData, btnClickHandle, isLoading}
}