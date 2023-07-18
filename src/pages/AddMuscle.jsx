import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const AddMuscle = () => {
  let navigate = useNavigate()
  const initialState = {
    title: '',
    origin: '',
    insertion: '',
    innervation: '',
    action: '',
    image: ''
  }

  const [formState, setFormState] = useState(initialState)
  const [region, setRegion] = useState('')
  const [toggleAddRegion, setToggleAddRegion] = useState(false)

  const [card, setCard] = useState({})

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await axios.post(
      'https://anatomy-tutor-44508058b6f7.herokuapp.com/cards',
      formState
    )
    setToggleAddRegion(true)
  }

  const handleSelect = (event) => {
    setRegion({ [event.target.name]: event.target.value })
  }

  const addToRegion = async (event) => {
    event.preventDefault()
    if (region.regions === 'shoulderGirdle') {
      await axios.put(
        'https://anatomy-tutor-44508058b6f7.herokuapp.com/regions/64aef6218ece2e345489fb0d/cards',
        formState
      )
    } else if (region.regions === 'footAndShank') {
      await axios.put(
        'https://anatomy-tutor-44508058b6f7.herokuapp.com/regions/64aef60f8ece2e345489fb0b/cards',
        formState
      )
    } else if (region.regions === 'hipAndThigh') {
      await axios.put(
        'https://anatomy-tutor-44508058b6f7.herokuapp.com/regions/64aef6028ece2e345489fb09/cards',
        formState
      )
    } else if (region.regions === 'headAndNeck') {
      await axios.put(
        'https://anatomy-tutor-44508058b6f7.herokuapp.com/regions/64aef5f18ece2e345489fb07/cards',
        formState
      )
    } else if (region.regions === 'armsAndAbdominals') {
      await axios.put(
        'https://anatomy-tutor-44508058b6f7.herokuapp.com/regions/64aef5df8ece2e345489fb05/cards',
        formState
      )
    }
    setFormState(initialState)
    navigate('/view/cards')
  }

  return toggleAddRegion ? (
    <div>
      <h1>Add a Muscle:</h1>
      <div className="formsContainer">
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Muscle Name:</label>
          <input
            type="text"
            id="title"
            onChange={handleChange}
            value={formState.title}
          ></input>
          <label htmlFor="origin">Origin:</label>
          <input
            type="text"
            id="origin"
            onChange={handleChange}
            value={formState.origin}
          />
          <label htmlFor="insertion">Insertion:</label>
          <input
            type="text"
            id="insertion"
            onChange={handleChange}
            value={formState.insertion}
          />
          <label htmlFor="innervation">Innervation:</label>
          <input
            type="text"
            id="innervation"
            onChange={handleChange}
            value={formState.innervation}
          />
          <label htmlFor="action">Action:</label>
          <input
            type="text"
            id="action"
            onChange={handleChange}
            value={formState.action}
          />
          <label htmlFor="image">Image URL:</label>
          <textarea
            id="image"
            cols="30"
            rows="5"
            onChange={handleChange}
            value={formState.image}
          ></textarea>
          <button type="submit">Submit</button>
        </form>

        <form onSubmit={addToRegion}>
          <label htmlFor="regions">Add to a Region:</label>
          <select onChange={handleSelect} name="regions" id="regions">
            <option value="headAndNeck">Head and Neck</option>
            <option value="shoulderGirdle">Shoulder Girdle</option>
            <option value="armsAndAbdominals">Arms and Abdominals</option>
            <option value="hipAndThigh">Hip and Thigh</option>
            <option value="footAndShank">Foot and Shank</option>
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>
      <footer>All Rights Reserved, &copy; 2023 Anatomy Tutor &nbsp;</footer>
    </div>
  ) : (
    <div>
      <h1>Add a Muscle:</h1>
      <div className="formsContainer">
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Muscle Name:</label>
          <input
            type="text"
            id="title"
            onChange={handleChange}
            value={formState.title}
          ></input>
          <label htmlFor="origin">Origin:</label>
          <input
            type="text"
            id="origin"
            onChange={handleChange}
            value={formState.origin}
          />
          <label htmlFor="insertion">Insertion:</label>
          <input
            type="text"
            id="insertion"
            onChange={handleChange}
            value={formState.insertion}
          />
          <label htmlFor="innervation">Innervation:</label>
          <input
            type="text"
            id="innervation"
            onChange={handleChange}
            value={formState.innervation}
          />
          <label htmlFor="action">Action:</label>
          <input
            type="text"
            id="action"
            onChange={handleChange}
            value={formState.action}
          />
          <label htmlFor="image">Image URL:</label>
          <textarea
            id="image"
            cols="30"
            rows="5"
            onChange={handleChange}
            value={formState.image}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
      <footer>All Rights Reserved, &copy; 2023 Anatomy Tutor &nbsp;</footer>
    </div>
  )
}

export default AddMuscle
