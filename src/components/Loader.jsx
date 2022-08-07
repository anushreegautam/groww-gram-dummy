import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loader = ({ blocking, children}) => (
  blocking ? 
   <Spinner animation="border" role="status" className="loader-style" /> 
   : children
)

export default Loader