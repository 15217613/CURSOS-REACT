import { Button, ColorRed } from './components'
import './App.css'
import type { ReactNode } from 'react'

interface FormProps {
  children: ReactNode
}

const Form = ({ children }: FormProps) => {
  return (
    <form>
      {children}
    </form>
  )
}

function App() {
  const submit = () => {
    console.log('Submit');
  }

  const handleClick = () => {
    console.log('Button clicked');
  }

  const dimeHola = () => {
    alert('Hola');
  }

  return (
    <>
      <Button parentMethod={handleClick}>
        <ColorRed>
          <Button parentMethod={dimeHola}>My boton rojo</Button>
        </ColorRed>
        <Button parentMethod={handleClick}>My boton normal</Button>
      </Button>
      <Form>
        <input type="text" />
        <button type="submit">Submit</button>
      </Form>
    </>
  )

}

export default App;