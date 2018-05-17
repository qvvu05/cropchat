import firebase from 'firebase'
var config = {
  apiKey: 'AIzaSyD29D21p_yfD778uUL_dligWSTLLf0WB6E',
  authDomain: 'cropchat-quyen.firebaseapp.com',
  databaseURL: 'https://cropchat-quyen.firebaseio.com',
  projectId: 'cropchat-quyen',
  storageBucket: 'cropchat-quyen.appspot.com',
  messagingSenderId: '687996634938'
}

firebase.initializeApp(config);
export default{
  database: firebase.database()
}
