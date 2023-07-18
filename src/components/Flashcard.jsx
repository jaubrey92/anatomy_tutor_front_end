const Flashcard = (props) => {
  return (
    <div key={props.id} className="flashcard">
      <div>
        <img src={props.image} alt="Muscle Image" className="flashcardImage" />
      </div>
      <div>
        <h3>{props.title}</h3>
      </div>
    </div>
  )
}

export default Flashcard
