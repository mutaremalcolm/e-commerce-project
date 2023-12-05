import { CategoriesContainer, CategoryContainer }from'./category-items.styles';

const CategoryItem = ({ category}) => {
    const { imageUrl, title } = category;
    return (
        <CategoriesContainer >
        <div className="background-image" style={{ 
            backgroundImage: `url(${imageUrl})`
            }}/>
        <CategoryContainer>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </CategoryContainer> 
        </CategoriesContainer>
    )
}

export default CategoryItem