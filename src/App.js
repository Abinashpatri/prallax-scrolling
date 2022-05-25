import './App.css';
import ImageFour from './components/ImageFour';
import ImageOne from './components/ImageOne';
import ImageThree from './components/ImageThree';
import ImageTwo from './components/ImageTwo';
import TextBox from './components/TextBox';

function App() {
  return (
    <div className="App">
      <ImageOne/>
      <TextBox/>
      <ImageTwo />
      <TextBox/>
      <ImageThree />
      <TextBox/>
      <ImageFour />
    </div>
  );
}

export default App;
