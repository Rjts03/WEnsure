import Constants from 'expo-constants';

const {manifest} = Constants

const uri = `http://${manifest.debuggerHost.split(':').shift()}:8081/api/`

const config = {
    baseURL: uri,
    // baseURL: 'localhost:8081/api/',
    prodURL: '',
    uid: '999988887777'
}

export default config