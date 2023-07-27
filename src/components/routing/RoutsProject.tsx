import { Routes, Route, Navigate } from 'react-router-dom';
import { Page } from '../Page';

export const RoutsProject = () => {
    return (
        <Routes>
           <Route path={'/'} element={<Page/>}/> 
           <Route path={'/:page'} element={<Page/>}/> 
           <Route path="/404" element={<h1 style={{textAlign: 'center'}}>404: PAGE NOT FOUND</h1>}/>
           <Route path="*" element={<Navigate to={'/404'}/>}/>
        </Routes>
    );
};
