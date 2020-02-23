import React, {useState, Fragment, useEffect} from 'react';
import Navigator from './navigation';
import Register from './Screens/Register';

export default function App() {

  const [registered, setRegistered] = useState(false);

  return (
    <Fragment>
    {
      !registered ? <Register setRegistered={setRegistered} /> : <Navigator/>
    }
    </Fragment>
  );
}
