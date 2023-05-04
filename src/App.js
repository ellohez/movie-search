import './App.css';
import MovieInfo from './Components/FilmRequest';
import SearchForm from './Components/SearchForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchForm />
        <MovieInfo />
      </header>
    </div>
  );
}

export default App;
