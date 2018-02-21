import React from 'react'

const AddImageField = (props) => {

  return (
    <div>
      <div className="form-group">
        <input
          type = "text"
          name = {props.index}
          value = {props.imgSource}
          onChange = {props.handleInputChange}
          className="form-control"
        />
      </div>
    </div>
  )
}

export default AddImageField
