import Container from './components/Container';
import Main from './components/Main';
import Pet from './components/Pet';
import Header from './components/Header'
import Button from './components/Button'
import Footer from './components/Footer'
import Display from './components/Display'

function App() {
  const pepper = {
    petname: "Pepper",
    type: "cat",
    age: 13,
    abilities: ["eat", "sleep", "scratch", "meow"]
  }

  return (
    <div className="App">
      <Container >
        <Header />
      </Container>

      

      {/* <Pet pet={pepper} /> */}
      {/* <Main firstname="Heidi" lastname="Chen" weight={100} abilities={["debugging", "create random names", "break my own code"]}/>
      <Main firstname="Heidi2" lastname="Chen2" weight={102} abilities={["debugging2", "create random names2", "break my own code twice"]}/> */}
    </div>
  );
}

export default App;
