import { Accordion } from './components/Accordion'

const Lista = () => {
  return(
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ul>
  )
}

function App() {
  return (
    <div className="App">
      <Accordion title="Accordeon" children={<Lista/>} />
    </div>
  )
}

export default App
