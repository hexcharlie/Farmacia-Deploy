import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ToastContainer } from 'react-toastify';
import Cadastro from './pages/cadastro/Cadastro';
import SideBar from './components/sidebar/SideBar';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import ListaCategorias from './components/Categorias/listaCategorias/ListaCategorias';
import FormularioCategoria from './components/Categorias/formularioCategoria/FormularioCategoria';
import DeletarCategoria from './components/Categorias/deletarCategoria/DeletarCategoria';
import ListaProdutos from './components/Produtos/listaProdutos/ListaProdutos';
import FormularioProduto from './components/Produtos/formularioProduto/FormularioProduto';
import { List } from '@phosphor-icons/react'
import Perfil from './pages/perfil/Perfil';
import DeletarProduto from './components/Produtos/deletarProduto/DeletarProduto';

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <AuthProvider>
        <ToastContainer />
      <BrowserRouter>
        <div className="flex">
          <div className={`w-64 bg-gray-200 ${isSidebarOpen ? '' : 'hidden'}`}>
            <SideBar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          </div>
          <div className="flex-1">
            <button
              className="text-rose-500 px-1000 py-1000 fixed top-4 left-4"
              onClick={toggleSidebar}
            >
              {isSidebarOpen ? "" : <List size={48} />}
            </button>
            <div className="p-0">
              <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastrar" element={<Cadastro />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<ListaCategorias />} />
            <Route path="/cadastroCategoria" element={<FormularioCategoria />} />
            <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
            <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
            <Route path="/produtos" element={<ListaProdutos />} />
            <Route path="/cadastroProduto" element={<FormularioProduto />} />
            <Route path="/editarProduto/:id" element={<FormularioProduto />} />
            <Route path="/deletarProduto/:id" element={<DeletarProduto />} />
            <Route path="/perfil" element={<Perfil />} />
            </Routes>
          </div>
        </div>
        </div>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
        );
}
export default App;