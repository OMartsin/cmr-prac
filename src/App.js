import './App.css';
import alina from './images/alina.jpg';
import andriyPhoto from './images/andriy.jpg';
import daryna from './images/daryna.jpg'
import oleksandr from './images/oleksandr.png';
import oleh from './images/OlehMisiailo.jpeg';

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
          <text className='job'>Project Manager</text>
          <img className='participant-photo' src={oleksandr} alt="" />
        </div>
        <div className='participant-info'>
          <text className='name'>Oleh Misiailo</text>
          <text className='job'>Team Lead</text>
          <img className='participant-photo' src={oleh} alt="" />
        </div> 
      </div>
    </div>
  );
}

export default App;
