// Write your code here
import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teamData} = props
  const {name, imageUrl, id} = teamData

  return (
    <li className="team-card">
      <Link to={`/team-matches/${id}`} className="link-item">
        <img className="team-card-image" src={imageUrl} alt={`${name}`} />
        <p className="team-card-name">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
