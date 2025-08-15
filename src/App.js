import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title = "Welcome the Gogo";
  const likes = 50;
  //const person = { name: 'mario', age: 20 };
  const link = "https://www.facebook.com/";


  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        {/* <h1>{ title }</h1>
        <p>Liked { likes } times</p>
        <p>Liked { likes } shots</p>
        <p>Liked { likes } blows</p>
        <p>{ person }</p>

        <p>{10}</p>
        <p>{"hello, ninjas"}</p>
        <p>{ [1,2,3,4,5] }</p> }
        <p>{ Math.random() * 10 }</p>

        <a href={link}>Facebook</a>*/}
      </div>
    </div>
  ); 
}

export default App;
