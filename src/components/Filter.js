import React from 'react'

<<<<<<< HEAD
const Filter = ({filters, handleChange}) => (
  <select onChange={handleChange} defaultValue='all'>
        <option value='all'>All</option>
        {filters.map(filter =>
=======
const Filter = ({filters}) => (
  <select onChange={this.props.handleChange} defaultValue='all'>
        <option value='all'>All</option>
        {this.props.filters.map(filter =>
>>>>>>> 8640bb45e5389dd3356f4cf6feb8f9729fc19a55
          <option key={filter} value={filter}>{filter}</option>
        )}
  </select>
)

<<<<<<< HEAD
Filter.defaultProps ={
  filters: [],
  handleChange: () => {}
}
=======
>>>>>>> 8640bb45e5389dd3356f4cf6feb8f9729fc19a55
export default Filter
