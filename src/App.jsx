import { Routes, Route } from 'react-router-dom';

import PublicRouter from "@/Pages/Public/Public.router";

const App = () => {
  return (
       
            <Routes>
                <Route path="/*" element={<PublicRouter />} />
            </Routes>
        
  );
}

export default App
