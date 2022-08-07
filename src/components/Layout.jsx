import React from 'react'
import { ThemeProvider, Toast, ToastContainer } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

const Layout = ({ children, isProfilePage, username, error }) =>(
  <div className="main-container">
    { !isProfilePage ? 
    <div className="app-header">GrowwGramDemo</div>
    : <div className="app-header username">
        <Link to='/'><FontAwesomeIcon icon={faAngleLeft} /></Link>
        {username}
      </div>
    }
    {children}  
    {error && 
    <ToastContainer position="bottom-center">
      <Toast delay={3000} autohide>
        <Toast.Body>Something went wrong. Please try again.</Toast.Body>  
      </Toast>
    </ToastContainer>
    }
  </div>
)

export default Layout