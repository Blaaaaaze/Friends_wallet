
import './App.css'
import Header from './Header'
import Information from './Information'
import { useState } from 'react'
import PersonForm from './PersonForm'
import ProductForm from './ProductForm'
import GenerateImage from './GenerateImage'
import Footer from './GenerateImage/Footer'


function App() {

  const [persons, setPersons] = useState([]);
  const [products, setProducts] = useState([]);

  return (
    <div>
    <Header />
    <main>
    <Information />
    <PersonForm persons={persons} setPersons={setPersons}/>
    <ProductForm persons={persons} setPersons={setPersons} products={products} setProducts={setProducts}/>
    <GenerateImage persons={persons} products={products}/>
    </main>
    <Footer />
    </div>
  )
}

export default App
