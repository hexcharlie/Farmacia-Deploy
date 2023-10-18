import React from 'react';
import homeLogo from '../../assets/home.png'
import './Home.css';
import { Link } from 'react-router-dom';
import ModalProduto from '../../components/Produtos/modalProduto/ModalProduto';
import ListaProdutos from '../../components/Produtos/listaProdutos/ListaProdutos';


function Home() {
    return (
        <>
        <div className="bg-rose-300 flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Fármacia Droga da Boa Energia</h2>
              <p className='text-xl'>Melhores produtos e descontos da região!</p>
  
              <div className="flex justify-around gap-4">
              {/* <ModalProduto /> */}
              <Link to='/produtos'> <button className='rounded bg-white text-rose-500 py-2 px-4'>Ver Produtos</button></Link>
              </div>
            </div>
  
            <div className="flex justify-center ">
              <img src={homeLogo} alt="" className='w-2/3' />
      
            </div>
          </div>
        </div>
        <ListaProdutos />
      </>
    );
}

export default Home;