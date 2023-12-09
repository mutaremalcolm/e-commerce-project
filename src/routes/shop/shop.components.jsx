import { useEffect } from 'react';

import Footer from '../../components/footer/footer.component';

import { Routes, Route } from 'react-router-dom';

import { useDispatch } from 'react-redux'

import CategoriesPreview from '../categories-preview/categories-preview.component';

import Category from '../../routes/category/category.component';


import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

import  { setCategories } from '../../store/user/categories/category.reducer';

import { ProductsContainer } from './shop.styles.jsx';


const Shop = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const getCategoriesMap = async() => {
            const categoriesArray = await getCategoriesAndDocuments(); 
            dispatch(setCategories(categoriesArray));
        } 
        getCategoriesMap();
        
    }, []);
    return (
        <>
        <ProductsContainer />
        <Routes>
            <Route index element={<CategoriesPreview />} /> 
            <Route path=':category' element={<Category />} /> 
        </Routes>
        <Footer />
        </>
    
    )
}

export default Shop;