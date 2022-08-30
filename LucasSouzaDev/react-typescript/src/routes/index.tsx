import { Routes, Route, Navigate } from "react-router-dom";
import React from "react";
export const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/pagina-inicial" element={<p>pagina inicial</p>} />
        
        <Route path="*" element={<Navigate to="/pagina-inicial" />} /> 
    </Routes>
  )
}