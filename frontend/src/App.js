import './App.css';
import { Provider } from 'react-redux'

import SearchBar from './Components/SearchBar.js'
import Login from './Components/Login.js'
import Navigation from './Components/Navigation.js'

import store from './store.js'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
              PokéMERN
          </header>
          <SearchBar />
        </div>
      </Provider>
    );
  }
}

export default App;
