import Inicio from "pages/Inicio";
import Favoritos from "pages/Favoritos";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Player from "pages/Player";
import PagNaoEncontrada from "pages/PagNaoEncontrada";
import PaginaBase from "pages/PaginaBase";

const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase/>}>
                    <Route index element={<Inicio/>}></Route>
                    <Route path="favoritos" element={<Favoritos/>}></Route>
                    <Route path=":id" element={<Player/>}></Route>
                    <Route path="*" element={<PagNaoEncontrada/>}></Route>
                    </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;