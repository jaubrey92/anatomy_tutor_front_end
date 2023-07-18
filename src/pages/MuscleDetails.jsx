import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Client from '../services/api'
import Comment from '../components/Comment'

const MuscleDetails = (props) => {
  let { cardId } = useParams()
  let navigate = useNavigate()
  let currentState = {
    title: '',
    origin: '',
    insertion: '',
    innervation: '',
    action: '',
    image: ''
  }
  let initialComment = {
    content: ''
  }

  const [cardDetails, setCardDetails] = useState({})
  const [comments, setComments] = useState([])
  const [toggleEdit, setToggleEdit] = useState(true)
  const [cardState, setCardState] = useState(currentState)
  const [commentState, setCommentState] = useState({})

  useEffect(() => {
    const getCard = async () => {
      let response = await Client.get(`/cards/${cardId}`)
      setCardDetails(response.data)
      setComments(response.data.comments)
      setCardState(response.data)
    }

    getCard()
  }, [cardId /*, comments*/])

  const deleteCard = async () => {
    await Client.delete(`/cards/${cardId}`)
    navigate('/view/cards')
  }

  const edit = () => {
    setToggleEdit(false)
  }

  const handleEdit = (event) => {
    setCardState({ ...cardState, [event.target.id]: event.target.value })
  }

  const handleSubmitEdit = async () => {
    await Client.put(`/cards/${cardId}`, cardState)
  }

  const handleComment = (e) => {
    setCommentState({ [e.target.id]: e.target.value })
  }

  const handleCommentSubmit = async () => {
    await Client.post(`/cards/${cardId}/comments`, commentState)
  }

  return toggleEdit ? (
    <div className="cardDetailsPage">
      <section>
        <div>
          <h1>{cardDetails.title}</h1>
          <div className="detailsCardHeader">
            <img src={cardDetails.image} alt="Muscle Image" />
          </div>
        </div>
      </section>
      <section>
        <div>
          <h3>Origin: {cardDetails.origin}</h3>
          <h3>Insertion: {cardDetails.insertion}</h3>
          <h3>Innervation: {cardDetails.innervation}</h3>
          <h3>Action: {cardDetails.action}</h3>
          <div>
            <h3>Fun Facts and Study Tips: </h3>
            {comments.map((comment) => (
              <Comment
                card_id={cardDetails._id}
                id={comment._id}
                comment={comment.content}
              />
            ))}
          </div>

          <form onSubmit={handleCommentSubmit}>
            <label htmlFor="content">Add a Comment/Fun Fact: </label>
            <textarea
              id="content"
              cols="20"
              rows="5"
              onChange={handleComment}
              value={commentState.content}
            ></textarea>
            <button type="submit">Add</button>
          </form>

          <button type="submit" onClick={() => deleteCard()}>
            Delete
          </button>
          <button type="submit" onClick={() => edit()}>
            Edit
          </button>
        </div>
      </section>
    </div>
  ) : (
    <div>
      <h1>Edit Flashcard</h1>
      <div className="editFormsContainer">
        <form onSubmit={handleSubmitEdit}>
          <label htmlFor="title">Muscle Name:</label>
          <input
            type="text"
            id="title"
            onChange={handleEdit}
            value={cardState.title}
          ></input>
          <label htmlFor="origin">Origin:</label>
          <input
            type="text"
            id="origin"
            onChange={handleEdit}
            value={cardState.origin}
          />
          <label htmlFor="insertion">Insertion:</label>
          <input
            type="text"
            id="insertion"
            onChange={handleEdit}
            value={cardState.insertion}
          />
          <label htmlFor="innervation">Innervation:</label>
          <input
            type="text"
            id="innervation"
            onChange={handleEdit}
            value={cardState.innervation}
          />
          <label htmlFor="action">Action:</label>
          <input
            type="text"
            id="action"
            onChange={handleEdit}
            value={cardState.action}
          />
          <label htmlFor="image">Image URL:</label>
          <textarea
            id="image"
            cols="30"
            rows="10"
            onChange={handleEdit}
            value={cardState.image}
          ></textarea>
          <button type="submit">Submit Changes</button>
        </form>
      </div>
    </div>
  )
}

export default MuscleDetails
