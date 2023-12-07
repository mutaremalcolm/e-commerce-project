import { useParams } from 'react-router-dom';

import Footer from '../../components/footer/footer.component';

import { useState, useEffect, Fragment } from 'react';

import { useSelector } from 'react-redux';

import ProductCard from '../../components/product-card/product-card.component';
 

import { selectCategoriesMap  } from '../../store/user/categories/category.selector';

import { 
    CategoryContainer, 
    CategoryTitle,
    PageWrapper,
    FooterWrapper
     } from './category.styles';

const Category = () => {
    const { category } = useParams();
    const categoriesMap =  useSelector(selectCategoriesMap);
    const [products, setProducts] = useState(categoriesMap[category]);
    

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <Fragment>
            <PageWrapper>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            <CategoryContainer>
                {products && products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </CategoryContainer>
            <FooterWrapper>
            <Footer />
            </FooterWrapper>
            </PageWrapper>
        </Fragment>
    );
};

export default Category;