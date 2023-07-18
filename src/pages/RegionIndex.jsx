import { Link } from 'react-router-dom'
import { GetRegions } from '../services/CardServices'
import { useState, useEffect } from 'react'

const RegionIndex = () => {
  const [regionOne, setRegionOne] = useState([])
  const [regionTwo, setRegionTwo] = useState([])
  const [regionThree, setRegionThree] = useState([])
  const [regionFour, setRegionFour] = useState([])
  const [regionFive, setRegionFive] = useState([])

  const getAllRegions = async () => {
    let response = await GetRegions()
    setRegionOne(response[0])
    setRegionTwo(response[1])
    setRegionThree(response[2])
    setRegionFour(response[3])
    setRegionFive(response[4])
  }

  useEffect(() => {
    getAllRegions()
  }, [])

  return (
    <div>
      <h1>Body Regions</h1>
      <div className="regionPage">
        <div className="regionSelect">
          <Link to={`/view/region/${regionTwo._id}`}>
            <div className="headAndNeck">Head and Neck</div>
          </Link>
          <Link to={`/view/region/${regionFive._id}`}>
            <div className="shoulderGirdle">Shoulder Girdle</div>
          </Link>
          <Link to={`/view/region/${regionOne._id}`}>
            <div className="armsAndAbdominals">Arms and Abdominals</div>
          </Link>
          <Link to={`/view/region/${regionThree._id}`}>
            <div className="hipAndThigh">Hip and Thigh</div>
          </Link>
          <Link to={`/view/region/${regionFour._id}`}>
            <div className="shankAndFoot">Shank and Foot</div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default RegionIndex
