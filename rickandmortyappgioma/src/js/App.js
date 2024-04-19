import '../css/style.css';
import Navbar from '../components/SessionNavbar';
import Black from '../components/SessionBlack';
import Form from '../components/SessionForm';
import Over from '../components/SessionOver';
import End from '../components/SessionEnd';

function App() {
  return (
    <div>
      <Navbar />
      <Black />
      <Form />
      <Over />
      <End />
    </div>
  );
}

export default App;
