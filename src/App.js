import './App.css';
import oleksandr from './images/oleksandr.png';

function App() {
  return (
    <div className="App">
      <h1>Our Team</h1>
      <div className="team">
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
