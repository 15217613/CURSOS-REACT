import { useState, useEffect } from 'react'
//import { Button } from './components'
import './App.css'
import { useFetch } from './hooks';

// Representacion del estado
/*
class UseState {
  value: any;

  getValue: () {
    return this.value;
  };

  setValue: (value: any) {
    this.value = value;
  };
}
*/

const url = 'https://api.example.com/data';
// const userUrl = 'https://api.example.com/user';

interface Data {
  id: number;
  name: string;
  lastName: string;
  age: number;
}

function App() {
  // Ciclo de vida de un componente
  // 1 - mount (renderizado)
  // 2 - update (actualizacion)
  // 3 - unmount (desmontado)

  // useState es donde se guardan las variables y metodos que se usan en el componente
  //const [count, setCount] = useState(0);
  //const [name, setName] = useState('Alan');

  /*
  const changeName = () => {
    setName('ByCarmona');
  }

  const countMore = () => {
    setCount((count) => count + 1);
  }
    */

  /*
  let localCount = 0;
  
  const increaseLocalCount = () => {
    localCount = localCount + 1;
    console.log(localCount);
  }

  return (
    <>
      <Button label={`Count is: ${count}`} parentMethod={countMore} />
      <p>{name}</p>
      <Button label='Change name to ByCarmona' parentMethod={changeName} />
    </>
  )
  */

  // useEffect
  // Estado

  /*
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Metodo
  const fetchData = async () => {
    setLoading(true);

    try {
      const response = await fetch('https://api.example.com/data');

      if (!response.ok) {
        throw new Error('Error fetching data');
      }

      const jsonData = await response.json();
      setData(jsonData);
    } catch (err) {
      setError(err as string);
    } finally {
      setLoading(false);
    }
  }
    */

  // Comunicarnos con un endpoint - entidad externa al componente
  // useEffect maneja el ciclo de vida del componente
  // operaciones async
  // parametros de entrada
  // context
  // sync con entidades externas
  /*useEffect(() => {
    // Logica que ejecuta el useEffect
    // 1 - cuanndo se monta el componente
    // 2 - cada vez que se modifique uno de los valores del state []
    // 3 - cuando se desmonta el componente
    return () => {
      // Logica que ejecuta el useEffect cuando se desmonta el componente - maneja el estado de la memoria
    }
  },

  // [] - array de dependencias
  // si esta vacio se ejecuta solo cuando se monta el componente
  // si tiene valores se ejecuta cuando se monta el componente y cuando se modifica uno de los valores del state
  // si no tiene dependencias se ejecuta cada vez que se renderiza el componente
  [data]);
  */

  /*
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <h1>Loading...</h1>
    )
  }

  if (error) {
    return (
      <h1>Error: {error}</h1>
    )
  }

  return (
    <h1>Data: {JSON.stringify(data)}</h1>
  )
    */

  // Con custom hooks

  const { data, loading, error } = useFetch<Data>(url);
  // const { data: dataUser, loading: loadingUser, error: errorUser } = useFetch<{name: string}>(userUrl);

  if (loading) {
    return (
      <h1>Loading...</h1>
    )
  }

  if (error) {
    return (
      <h1>Error: {error.message}</h1>
    )
  }

  return (
    <h1>Data: {JSON.stringify(data)}</h1>
  )

}


export default App;
