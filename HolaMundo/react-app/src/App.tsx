import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
    const list = ["Item 1", "Item 2", "Item 3"];

    const handleSelect = (elemento: string) => {
        console.log(elemento);
    }

    return <Card>
        <CardBody title="Hola Mundo" text="El texto del componente" />
        <List data={list} onSelect={handleSelect} />
    </Card>
}

export default App;