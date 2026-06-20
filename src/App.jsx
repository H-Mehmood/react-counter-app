import { useState } from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './App.css'

function App() {
  // state
  const [count, setCount] = useState(0);
  
  // event handlers
  const handleSum = (e) => {
    e.preventDefault();
    // increase count by 1
    setCount(count + 1);
  }
  const handleMinus = (e) => {
    e.preventDefault();
    // prevent count from going below 0
    if(count === 0) return;
    // decrease count by 1
    setCount(count - 1);
  }
  const handleRefresh = (e) => {
    e.preventDefault();
    // reset count to 0    
    setCount(0);
  }

  return (
    <>
      <div className="App">
        <div className="container">

          {/* linear gradient card */}
          <div className="total_amount_card" style={{ background: "#57C785", background: "linear-gradient(90deg, rgba(87, 199, 133, 1) 0%, rgba(237, 221, 83, 1) 100%)" }}>
            {/* refresh icon */}
            <div className="right">
              <svg onClick={handleRefresh} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30">
              <path d="M 15 3 C 12.031398 3 9.3028202 4.0834384 7.2070312 5.875 A 1.0001 1.0001 0 1 0 8.5058594 7.3945312 C 10.25407 5.9000929 12.516602 5 15 5 C 20.19656 5 24.450989 8.9379267 24.951172 14 L 22 14 L 26 20 L 30 14 L 26.949219 14 C 26.437925 7.8516588 21.277839 3 15 3 z M 4 10 L 0 16 L 3.0507812 16 C 3.562075 22.148341 8.7221607 27 15 27 C 17.968602 27 20.69718 25.916562 22.792969 24.125 A 1.0001 1.0001 0 1 0 21.494141 22.605469 C 19.74593 24.099907 17.483398 25 15 25 C 9.80344 25 5.5490109 21.062074 5.0488281 16 L 8 16 L 4 10 z"></path>
              </svg>
            </div>

            {/* total amount */}
            <div className="card_text">
              <h3 className="total_amount_heading">{count}</h3>
            </div>
          </div>

          {/* buttons */}

          <form>
            <div className="button_collection">
              <Stack spacing={2} direction="row" className="btn_stack">
                <Button onClick={handleSum} variant="contained" className="btn_plus">+</Button>
                <Button onClick={handleMinus} variant="contained" className="btn_minus">-</Button>
              </Stack>
            </div>
          </form>

        </div>
      </div>
    </>
  )
}

export default App
