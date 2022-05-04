import { Button, TextField } from '@mui/material'
import { useState } from 'react'
import Card from './Card'

const GOODS = [
  {
    title: 'Hasbik1',
    description: 'Dagestanec1',
    price: '500',
    img: 'hasbik.jpg'
  },
  {
    title: 'Hasbik2',
    description: 'Dagestanec2',
    price: '200',
    img: 'hasbik.jpg'
  },
  {
    title: 'Hasbik3',
    description: 'Dagestanec3',
    price: '900',
    img: 'hasbik.jpg'
  },
  {
    title: 'Hasbik4',
    description: 'Dagestanec3',
    price: '900',
    img: 'hasbik.jpg'
  },
  {
    title: 'Hasbik2412412341234',
    description: 'Dagestanec3',
    price: '900',
    img: 'hasbik.jpg'
  },
]

function App() {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(10000);
  const [goods, setGoods] = useState(GOODS);

  const clickHandler = (event) => {
    fetch(`http://localhost:8080/goods?min=${min}&max=${max}`)
      .then(res => res.json()).then(goods => {
        setGoods(goods)
      })
  }

  return (
    <div>
      <header
        style={{ height: 150, background: 'antiquewhite', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', padding: '0 50px' }}>
        <div style={{ position: 'relative' }}>
          <a href="/cart.html"><i class="bx bx-shopping-bag cart-button"></i></a>
          <span class="cart-counter" style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translateX(-50%) translateY(-10%)', fontFamily: 'system-ui' }}></span>
        </div>
      </header>
      <div style={{ display: 'flex', height: '100vh' }}>
        <aside style={{ width: '200px', background: 'azure', padding: '8px' }}>
          <TextField label="Min" variant="standard" value={min} onChange={(e) => setMin(e.target.value)} />
          <TextField label="Max" variant="standard" value={max} onChange={(e) => setMax(e.target.value)} />
          <Button onClick={clickHandler} sx={{ marginTop: 1 }} variant="contained">Применить</Button>
        </aside>
        <main style={{ padding: '50px', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {goods.map((good) => {
            return <Card title={good.title} price={good.price} description={good.description} img={good.img} />
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
