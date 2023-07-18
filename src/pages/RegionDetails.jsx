import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import RegionCard from '../components/RegionCard'
import Client from '../services/api'

const RegionDetails = () => {
  let { regionId } = useParams()

  const [muscles, setMuscles] = useState([])
  const [title, setTitle] = useState('')

  const getTheseFlashcards = async () => {
    let response = await Client.get(`/regions/${regionId}`)
    setMuscles(response.data.muscles)
    setTitle(response.data.content)
  }

  useEffect(() => {
    getTheseFlashcards()
  }, [])

  return (
    <div>
      <h1>{title}</h1>
      <div className="regionCardContainer">
        {muscles.map((muscle) => (
          <RegionCard
            id={muscle._id}
            title={muscle.title}
            origin={muscle.origin}
            insertion={muscle.insertion}
            innervation={muscle.innervation}
            action={muscle.action}
            image={muscle.image}
          />
        ))}
      </div>
    </div>
  )
}

export default RegionDetails
