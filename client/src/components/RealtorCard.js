import React from 'react'

const RealtorCard = ({realtor}) => {

  return (
    <a className="card col-sm-2 featured-listing"href={realtor.website}>
      <img className="card-img-top img-fluid" src={realtor.logo} alt={realtor.name}/>
      <div className="card-block">
        <h6 className="card-title">{realtor.name}</h6>
        <p className="card-text">{realtor.address}/month</p>
        <p className="card-text">{realtor.phone_number}/month</p>
        <p className="card-text">{realtor.email}/month</p>
      </div>
    </a>
  )
}

export default RealtorCard
