import logo from './logo.svg';
import anh1 from './anh1.jpg';
import anh2 from './anh2.jpg';
import anh3 from './anh3.jpg';
import anh4 from './anh4.jpg';
import './App.css';
const b={
  title:[
    {content:1,
    image:anh1},
    {content:2,
    image:anh2},
    {content:3,
    image:anh3},
    {content:4,
      image:anh4},
      {content:5,
        image:logo}
  ],
  
}
function App() {
  return (
  <>
        <div className="container">
          {b.title.map(i=> <div className="container-con"><p>{i.content}</p><img src={i.image}></img></div>)}
        </div>
  </>
  );
}


export default App;
