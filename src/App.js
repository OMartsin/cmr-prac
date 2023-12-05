import './App.css';
import alina from './images/alina.jpg';

function App() {
  return (
    <div className="App">
      <h1>Our Team</h1>
      <div className="team">
        <div className='participant-info'>
          <text className='name'>Alina Martyniak</text>
          <text className='job'>UI/UX Designer</text>
          <img className='participant-photo' src={alina} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
