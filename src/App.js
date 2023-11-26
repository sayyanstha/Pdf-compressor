import './App.css';
import Header from './components/Header/Header';
import PdfCompressor from './components/PdfCompressor/PdfCompressor';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <PdfCompressor></PdfCompressor>
      <Footer></Footer>
      <p></p>
    </div>
  );
}

export default App;
