import './App.css';
import Header from './components/Header'
import Card from './components/Card'
import Footer from './components/Footer'
import data from './data'

function App() {

  const cards = data.map((entry) => {
    return <Card
      key={entry.id}
      {...entry}
    />
  })

  return (
    <div className="App">
      <Header />

      <section className='cards'>
        {cards}
      </section>

      <Footer/>
    </div>
  );
}

export default App;
