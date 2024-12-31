import Home from './Home';
import Contact from './Contact'
import About from './About';
function App() {
  let name = 'venkat'
  return (
    <div>
    <h1>Hello from react</h1>
    <Home name={name} age = {22}/>
    <About />
    <Contact />
    </div>
  );
}

export default App;
