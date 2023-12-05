import './App.css';
import andriyPhoto from './images/andriy.jpg';
import daryna from './images/daryna.jpg'
import oleksandr from './images/oleksandr.png';

function App() {
  return (
    <div className="App">
      <h1>Our Team</h1>
      <div className="team">
          <div className='participant-info'>
          <text className='name'>Oleh Misiailo</text>
          <text className='job'>Team Lead</text>
          <img className='participant-photo' src="./src/images/OlehMisiailo.jpeg" alt="" />
        </div> 
          <div className='participant-info'>
          <text className='name'>Andriy-Symon Herman</text>
          <text className='job'>Developer</text>
          <img className='participant-photo' src={andriyPhoto} alt="Andriy" />
        </div>
        <div className='participant-info'>
          <text className='name'>Kruk Daryna</text>
          <text className='job'>Copyright & Tester</text>
          <img className='participant-photo' src={daryna} alt="avatar" />
        </div>
        <div className='participant-info'>
          <text className='name'>Oleksandr Martsin</text>
          <text className='job'>Projeck Manager</text>
          <img className='participant-photo' src={oleksandr} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
