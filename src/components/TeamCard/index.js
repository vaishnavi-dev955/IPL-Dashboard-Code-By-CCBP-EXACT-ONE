import './index.css'

import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teamDetails} = props
  const {name, id, teamImageURL} = teamDetails

  return (
    <li className="white-card">
      <Link to={`/team-matches/${id}`} className="link-item">
        <div className="horizon2">
          <img src={teamImageURL} alt={name} className="team-logo" />
          <p className="team-name">{name}</p>
        </div>
      </Link>
    </li>
  )
}

export default TeamCard
