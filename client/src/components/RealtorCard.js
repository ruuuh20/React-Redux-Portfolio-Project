import React from 'react'

const RealtorCard = ({realtor}) => {

  return (
    <a className="card realtor-card"href={realtor.website} target="_blank">
      <img className="card-img-top" src={realtor.logo} alt={realtor.name}/>
      <div className="card-block">
        <h6 className="card-title">{realtor.name}</h6>
        <p className="card-text">{realtor.address}</p>
        <p className="card-text">{realtor.phone_number}</p>
        <p className="card-text">{realtor.email}</p>
      </div>
    </a>
  )
}

export default RealtorCard
