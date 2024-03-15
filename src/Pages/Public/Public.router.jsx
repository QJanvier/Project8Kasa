import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "@/Pages/Public/Index";
import { About } from "@/Pages/Public/Index";
import { Logement } from "@/Pages/Public/Index";
import { Error404 } from "@/Pages/Public/Index";

import Layout from "@/Layout/Layout";

const PublicRouter = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} /> 
                <Route path="/logement/:id" element={<Logement />} />
                <Route path="*" element={<Error404 />} />
            </Route>
        </Routes>
    );
};

export default PublicRouter;
