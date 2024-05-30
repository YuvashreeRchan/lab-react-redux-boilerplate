import LikeCounter from "./components/LikeCounter";
import './App.css'
import { Provider } from 'react-redux';
import reducer from './components/Reducer';
import { createStore } from 'redux';

const store = createStore(reducer);
const App = () => {
  return(
  <Provider store={store}>
      <LikeCounter />
  </Provider>
  );
}

export default App;
