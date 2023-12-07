import { useParams } from 'react-router-dom';

import { useState, useEffect, Fragment } from 'react';

import { useSelector } from 'react-redux';

import ProductCard from '../../components/product-card/product-card.component';
 

import { selectCategoriesMap  } from '../../store/user/categories/category.selector';

import { CategoryContainer, CategoryTitle } from './category.styles';

const Category = () => {
    const { category } = useParams();
    const categoriesMap =  useSelector(selectCategoriesMap);
    const [products, setProducts] = useState(categoriesMap[category]);
    

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <Fragment>
            <CategoryContainer>{category.toUpperCase()}</CategoryContainer>
            <CategoryTitle>
                {products && products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </CategoryTitle>
        </Fragment>
    );
};

export default Category;