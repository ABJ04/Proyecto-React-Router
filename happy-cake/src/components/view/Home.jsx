import React from 'react';
import Carts from '../Carts';



const Home = () => {
  return (
    <main className='container'>
      <h2 className='text-center fs-1 m-3'>Categoría</h2>
      <section >
        <div className='contenido m-3'>
          <Carts />
        </div>
      </section>
    </main>
  );
};

export default Home;
