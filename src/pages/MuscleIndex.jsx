import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Flashcard from '../components/Flashcard'
import { Link } from 'react-router-dom'
import { GetCards } from '../services/CardServices'

const MuscleIndex = () => {
  let { cardId } = useParams()

  const [cards, setCards] = useState([])

  const getAllFlashcards = async () => {
    let response = await GetCards()
    setCards(response)
  }

  useEffect(() => {
    getAllFlashcards()
  }, [])

  return (
    <div>
      <h1>All Muscles</h1>
      <div className="flashcardContainer">
        {cards.map((card) => (
          <Link to={`/cards/details/${card._id}`}>
            <Flashcard id={card._id} title={card.title} image={card.image} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default MuscleIndex
