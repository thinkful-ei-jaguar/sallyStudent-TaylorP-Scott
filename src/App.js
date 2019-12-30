import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <h1>Sally Student</h1>
        <address>
          <h3>email@email.com</h3>
          <h3>888-444-9999</h3>
          <img src='https://ia.media-imdb.com/images/M/MV5BMTY5NzE3NzU3MF5BMl5BanBnXkFtZTgwMjg0NTQ5MDE@._V1_UX214_CR0,0,214,317_AL_.jpg' alt='Sally Student' />
        </address>
      </header>
      <main>
        <section>
          <h2>Education</h2>
          <h3>UCLA 2011</h3>
        </section>
        <section>
          <h2>Employment History</h2>
          
          <h3>Trader Joe's</h3>
          <p>Cashier</p>
          <p>Cashier at TJs</p>
          <h3>Costco</h3>
          <p>Cashier</p>
          <p>Cashier at Costco</p>
        </section>
      </main>
    </div>
  );
}

export default App;
