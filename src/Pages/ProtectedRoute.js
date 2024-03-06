import React from 'react'

const ProtectedRoute = () => {


  return (
    <Route
    {...rest}
    render={(props) => {
      
      return <Redirect to={{ pathname: "/" }} />;
    }}
  />
  )
}

export default ProtectedRoute