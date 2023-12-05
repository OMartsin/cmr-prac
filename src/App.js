import './App.css';
// import photo from './images...'

function App() {
  return (
    <div className="App">
      <h1>Our Team</h1>
      <div className="team">
        {
          <div className='participant-info'>
          <text className='name'>Oleh Misiailo</text>
          <text className='job'>Team Lead</text>
          <img className='participant-photo' src="./src/images/OlehMisiailo.jpeg" alt="" />
        </div> 
        }
      </div>
    </div>
  );
}

export default App;
