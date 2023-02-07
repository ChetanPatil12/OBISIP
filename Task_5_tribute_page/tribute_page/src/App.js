import {Content} from "./components/Content";
import {Image} from "./components/Image";
import './App.css';
import { Paragraph } from "./components/Paragraph";

function App() {
  return (
    <>
    <div className="App">
      <Image/>
      <Content/>
    </div>
    <div>
      <Paragraph/>
    </div>
    
    </>
  );
  
}

export default App;
