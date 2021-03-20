import Header from './components/Header'

function App() {
  const name = "Aditya"

  return (
    <div className="container">
      <Header />
      <h2>Hi {name}!</h2>
    </div>
  );
}

export default App;
