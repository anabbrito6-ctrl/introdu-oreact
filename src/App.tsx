import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import ListaProdutos from "./pages/listaprodutos/ListaProdutos";
import DetProduto from "./pages/detProduto/DetProduto";
import Login from "./pages/login/Login";
import AdmProdutos from "./pages/admProdutos/AdmProdutos";


export function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/produtos" element={<ListaProdutos />} />
                <Route path="/detalheProduto" element={<DetProduto />} />
                <Route path="login" element={<Login />} />
                <Route path="/admProdutos"element={<AdmProdutos/>}/>
                <Route path="*" element={<img className="container-notfound" src="https://cdn.dribbble.com/userupload/25439422/file/original-af9c309401b13edcd50861b6196ac9ee.gif" alt="imagem de não encontrado" />} />
            </Routes>
            <Footer />
        </>
    )
}