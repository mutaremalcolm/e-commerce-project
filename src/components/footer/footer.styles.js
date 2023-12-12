import styled from 'styled-components';

export const FooterContainer = styled.div`
    height: auto;
    margin: 0 auto;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    align-items: center; 
    gap: 0; 
    background-color: #004AAD;
`;

export const BigFooter = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 2fr);
    grid-template-rows: repeat(1, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 0px;

    margin: 35px 10px 20px 10px; 

    @media (max-width: 900px) {
        grid-column-gap: 5px;
    }

    @media (max-width: 700px) {
        display: flex;
        flex-wrap: wrap;
        flex-grow: 1;
        justify-content: center;
        align-content: center;
        align-items: center;
    }
`;

export const ColumnSection1 = styled.div`
    color: #FFFFFF;

    @media (max-width: 700px) {
        display: none;
    }
`;

export const ColumnSection2 = styled.div`
    color: #FFFFFF;

    @media (max-width: 700px) {
    display: none;
    }
`;

export const ColumnSection3 = styled.div`
    color: #FFFFFF;
     
    p{
        margin-top: 13px;
        margin-bottom: -7px;
    }

    @media (max-width: 700px) {
        display: none;
    }
`;

export const ColumnSectionBig = styled.div`
    grid-column: 4 / span 7;
    color: #89cffa;
    padding-left: 5px;

    p{
        margin-top: 10px;
        margin-bottom: 0px;
    }

    @media (max-width: 700px) {
        text-align: center;
        padding-bottom: 5px;
        padding-top: 5px;

        p{
            text-align: center;
            color: #89cffa;
        }
    }
`;



export const ColumnHeading = styled.div`
    font-weight: 800;
    color: #89cffa;
    

    @media (max-width: 700px) {
    text-align: center;
    padding-bottom: 10px;
    padding-top: 5px;
    }
`;


export const ColumnEntry = styled.div`
    padding-bottom: 2px;
    color: #89cffa;

    ul{
        margin: 0px;
        padding-bottom: 15px;
        padding-top: 10px;
        position: relative;
        left: -35px;  
    }
        
    li{
        padding-bottom: 5px;
        list-style-type: none;
        color: #89cffa; 
        &:hover {
        color: #0000000;
        cursor: pointer;
        }
    }
`;

export const ImageSection = styled.div`
        grid-column: 5 / span 7;
        color: #89cffa;
    
    @media (max-width: 700px) {
        text-align: center;
        padding-bottom: 15px; 
    }
`;


export const ImageContainer = styled.div`
    color: #ffffff;
    display: inline-flex; 
    width: 2.5rem; 
    height: 2.5rem; 

    padding-top: 30px;
    padding-bottom: 40px;
    
    font-size: 1.8rem;
    line-height: 1.75rem; 
    justify-content: center; 
    align-items: center; 
    border-radius: 9999px; 
    cursor: pointer; 
    color: #cecece;
    
    &:hover {
        color: #ffffff;
    }

    @media (max-width: 700px) {
        padding-bottom: 20px;
        padding-top: 20px;
    }
`;


export const SmallFooter = styled.div`
    color: #ffffff;
    padding-top: 5spx; 
    padding-bottom: 10px;
    font-size: 0.8rem;
    line-height: 1rem; 
    text-align: center; 
    justify-content: center;

    h5{
        margin-top: 10px;
        color: #ffffff;
        font-size: 15px;
    }
`;