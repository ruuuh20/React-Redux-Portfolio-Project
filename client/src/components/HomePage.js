import React from 'react'

const HomePage = (props) => {
  const listings = props.listings

  return (
    <div>
      {listings.length}
    </div>
  )
}

export default HomePage
