import '../css/style.css';
import Navbar from '../components/SessionNavbar';
import Black from '../components/SessionBlack';
import Article from '../components/SessionArticle';
import Table from '../components/SessionTable';
import Over from '../components/SessionOver';
import End from '../components/SessionEnd';

function App() {
  return (
    <div>
      <Navbar />
      <Black />
      <Article />
      <Table />
      <Over />
      <End />
    </div>
  );
}

export default App;
