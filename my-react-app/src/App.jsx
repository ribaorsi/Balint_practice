const carName = 'Opel'
const number = 123
const cars = ['Opel', 'BMW', 'Volvo']
const man = {
  firstName: 'John',
  lastName: 'Doe'
}
const nullVariable = null
const myFunction = () => {}

const App= () => {
  return (
    <div>
      <h1>Hello world</h1>
      <p className="par">Ez egy <br />szöveg</p>
      <div id="egyedi">Ez {number} {carName} {cars} {man} {nullVariable} {myFunction()} </div>
      <input type="password" placeholder='jelszo1234'/>
      
      <div className="brand">
        <p>Márka: </p>
        <p><em>Opel</em></p>
        <p>Ajtók száma: 4</p>
      </div>

      <div className="brand">
        <p>Márka: </p>
        <p><em>Volvo</em></p>
        <p>Ajtók száma: 5</p>
      </div>

      <div className="brand">
        <p>Márka: </p>
        <p><em>Ford</em></p>
        <p>Ajtók száma: 4</p>
      </div>

      <div className="brand">
        <p>Márka: </p>
        <p><em>Opel</em></p>
        <p>Ajtók száma: 4</p>
      </div>
    </div>
  );
}

export default App;
