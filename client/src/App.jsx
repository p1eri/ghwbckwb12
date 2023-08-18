import { Navbar , Intro, Coins, Sponsors, Features, Regist, Footer} from './components/index.js';

function App() {
  return (
      <div className='App'>
        <Navbar/>
        <Intro/>
        <Coins/>
        <Sponsors/>
        <Features/>
        <Regist/>
        <Footer/>
      </div>
  )
}

export default App
