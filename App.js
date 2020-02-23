import React, {useState, Fragment} from 'react';
import Navigator from './navigation';
import Register from './Screens/Register';

export default function App() {

  const [registered, setRegistered] = useState(false);

  let registerUser = () => {
    setRegistered(true);
  }

  return (
    <Fragment>
    {
      !registered ? <Register setUser = {registerUser}/> : <Navigator/>
    }
    </Fragment>
  );
}
