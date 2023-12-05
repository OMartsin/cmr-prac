import './App.css';
import andriyPhoto from './images/andriy.jpg';

function App() {
  return (
    <div className="App">
      <h1>Our Team</h1>
      <div className="team">
        {
          <div className='participant-info'>
          <text className='name'>Andriy-Symon Herman</text>
          <text className='job'>Developer</text>
          <img className='participant-photo' src={andriyPhoto} alt="Andriy" />
        </div>
        }
      </div>
    </div>
  );
}

export default App;
