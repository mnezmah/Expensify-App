// higher order component (HOC) - A component that renders another component

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props)=> (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
    {props.isAdmin && <p>This is private info. Pleae don't share!</p>}
      <WrappedComponent {...props}/>
    </div>
  );
};

const requireAuthetnication = (WrappedComponent) =>  { //regular fn that returnes HOC
  return (props) => (
    <div>
      {props.isAuth  ? ( <WrappedComponent {...props}/>) : (<p>Please login to see the info</p>)}
    </div>
  )
}


const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthetnication(Info);
// create function that takes i tie info component
// return the new stateless functional compnents
// add a little bit of contidional logic (check isAuthetnticated true or falese ) 
//aplease login to see the info

// ReactDOM.render(<AdminInfo  isAdmin={true} info="This are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo  isAuth={false} info="Evo vam ga na" />, document.getElementById('app'));