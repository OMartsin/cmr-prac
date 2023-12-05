import './App.css';
import daryna from './images/daryna.jpg'

function App() {
  return (
    <div className="App">
      <h1>Our Team</h1>
      <div className="team">
          <div className='participant-info'>
              <text className='name'>Kruk Daryna</text>
              <text className='job'>Copyright & Tester</text>
              <img className='participant-photo' src={daryna} alt="avatar" />
          </div>
      </div>
    </div>
  );
}

export default App;
