import logo from './logo.svg';
import './App.css';
import './card.css';
import Card from './card';

function App() {
  return (
   
     <>
     <Card h1="28/10/2020" h2="Case Study" h3="Amazon Gift" h4="Pay" h5="Desktop-Mobile" h6="https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png" h7="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Map_arrow_black_e.svg/300px-Map_arrow_black_e.svg.png?20211203172936" />
     <div className='d'>
     <Card className='d' h1="17 Sep 2020" h2="Case Study" h3="Apple Gift" h4="Payment" h5="MacOS-Mobile" h6="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Apple_Logo.svg/136px-Apple_Logo.svg.png" h7="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Map_arrow_black_e.svg/300px-Map_arrow_black_e.svg.png?20211203172936"/>
     </div>
    
     </>
  
  );
}

export default App;
