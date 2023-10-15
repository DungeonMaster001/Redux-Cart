import {Provider} from 'react-redux'
import { store } from './Store/store';
import './App.css';
import Card from './Component/card';
import Navbar from './Component/navbar';

function App() {
  return (
    <div>
      <Provider store={store}>
      <Navbar/>
      <Card/>
      </Provider>
    </div>
  );
}

export default App;
