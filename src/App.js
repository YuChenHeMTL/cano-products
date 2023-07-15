import { useState } from 'react';
import './App.css';
import ProductList from './ProductList';
import SearchBar from './SearchBar';
import CanoCup from './products/cano_cup.png';
import CanoDuo from './products/cano_duo.png';
import CanoTrio from './products/cano_trio.png';
import CanoSolo from './products/cano_solo.png';
import CanoUno from './products/cano_uno.png';
import CanoLogo from './cano_logo.png'

function App() {
  const rawData = [
    {
      id: 1,
      name: 'Cano Cup',
      impactScore: 5,
      price: 10,
      img: CanoCup
    },
    {
      id: 2,
      name: 'Cano Duo',
      impactScore: 3,
      price: 20,
      img: CanoDuo
    },
    {
      id: 3,
      name: 'Cano Trio',
      impactScore: 1,
      price: 30,
      img: CanoTrio
    },
    {
      id: 4,
      name: 'Cano Solo',
      impactScore: 2,
      price: 15,
      img: CanoSolo
    },
    {
      id: 5,
      name: 'Cano Uno',
      impactScore: 4,
      price: 12.5,
      img: CanoUno
    }
  ]

  const [data, setData] = useState(rawData); 
  const [searchTerm, setSearchTerm] = useState('');
  const [sortType, setSortType] = useState('name');
  const [sortDirection, setSortDirection] = useState('asc');

  function filterProducts() {
    console.log('filtering products');
    console.log(searchTerm)
    const filteredProducts = rawData.filter((product) => {
      return product.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setData(filteredProducts);
  }

  function sortDataByProperty(property) {
    console.log(property, sortType)
    if (property === sortType) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortDirection('asc');
    }
    setSortType(property);

    var sortedProducts = [];
    if (property === 'name') {
      sortedProducts = data.sort((a, b) => {
        if (sortDirection === 'asc') {
          return a.name.localeCompare(b.name);
        } else {
          return b.name.localeCompare(a.name);
        }
      })
    } else if (property === 'score') {
      sortedProducts = data.sort((a, b) => {
        if (sortDirection === 'asc') {
          return a.impactScore - b.impactScore;
        } else {
          return b.impactScore - a.impactScore;
        }
      })
    } else if (property === 'price') {
      sortedProducts = data.sort((a, b) => {
        if (sortDirection === 'asc') {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      })
    }
    setData(sortedProducts);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={CanoLogo} className="App-logo" alt="logo" />
        <h1 className="header-text">Welcome to Cano products!</h1>
        <SearchBar 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm} 
          filterProducts={filterProducts}
        />
        <ProductList products={data} 
          sortByName={() => sortDataByProperty('name')}
          sortByScore={() => sortDataByProperty('score')}
          sortByPrice={() => sortDataByProperty('price')}
        />
      </header>
    </div>
  );
}

export default App;
