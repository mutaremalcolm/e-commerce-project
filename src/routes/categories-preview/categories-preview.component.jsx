import { Fragment } from 'react';

import Footer from '../../components/footer/footer.component';

import { useSelector } from 'react-redux';

import { selectCategoriesMap } from '../../store/user/categories/category.selector';

import CategoryPreview from '../../components/category-preview/category-preview';


const CategoriesPreview = () => {
    const categoriesMap =  useSelector(selectCategoriesMap);

    return (
        < Fragment>
        {
                Object.keys(categoriesMap).map(title => {
                    const products = categoriesMap[title];
                    return <CategoryPreview key={title} title={title} products={products} />
                    

        })}
        <Footer />
         </ Fragment>
    )
}

export default CategoriesPreview;