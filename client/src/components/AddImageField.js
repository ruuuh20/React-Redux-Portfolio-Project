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
        <button name={props.index} onClick={props.handleRemoveInput} className="btn delete-button">remove</button>
      </div>
    </div>
  )
}

export default AddImageField
