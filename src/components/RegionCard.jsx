const RegionCard = (props) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={props.image}
            alt="MuscleImage"
            className="regionCardImage"
          />
          <h1>{props.title}</h1>
        </div>
        <div className="flip-card-back">
          <h3>O: {props.origin}</h3>
          <h3>I: {props.insertion}</h3>
          <h3>N: {props.innervation}</h3>
          <h3>A: {props.action}</h3>
        </div>
      </div>
    </div>
  )
}

export default RegionCard
