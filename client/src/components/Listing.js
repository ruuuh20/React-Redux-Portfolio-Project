import React from 'react'

const Listing = (props) => {
  const listing = props.listing

  return (
    <div className="card col-sm-2">
      <img className="card-img-top img-fluid" src={listing.main_img} alt={listing.address}/>
      <div className="card-block">
        <h4 className="card-title">Card title</h4>
      </div>
    </div>
  )
}

export default Listing
