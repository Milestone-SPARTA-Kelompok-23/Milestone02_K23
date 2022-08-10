import { useState } from "react";
import leftArrow from "../images/left-arrow.png";
import rightArrow from "../images/right-arrow.png";

const Pagination = ({ data, RenderComponent, pageLimit, dataLimit, cart, updateCart, doc })  => {
    const [pages] = useState(Math.ceil(data.data.length / dataLimit));
    const [currentPage, setCurrentPage] = useState(1);
    data = data.data
    const goToNextPage = () => {
        setCurrentPage((page) => page + 1);
        window.scrollTo({top: 400, left: 0, behavior: 'smooth'});
    }
  
    const goToPreviousPage = () => {
        setCurrentPage((page) => page - 1);
        window.scrollTo({top: 400, left: 0, behavior: 'smooth'});
    }
  
    const changePage = (event) => {
        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);
        window.scrollTo({top: 400, left: 0, behavior: 'smooth'});
    }
  
    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return data.slice(startIndex, endIndex);
    };
  
    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
        return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
    };
        return (
            <div className="main-pagination">
                <div className="dataContainer">
                    {getPaginatedData().map((d, idx) => (
                        <RenderComponent key={idx} data={d} image={d.image} name={d.name} id={d.id} price={d.price} doc={doc} updateCart={updateCart} cart={cart}/>
                    ))}
                </div>
                <div className="pagination">          
                    <img src={leftArrow} alt="left-arrow" onClick={goToPreviousPage} className={`prev ${currentPage === 1 ? 'disabled' : ''}`}/>
    
                    {getPaginationGroup().map((item, index) => (
                        <button
                        key={index}
                        onClick={changePage}
                        className={`paginationItem ${currentPage === item ? 'active' : null}`}
                        >
                            <span>{item}</span>
                        </button>
                    ))}
    
                    <img src={rightArrow} alt="right-arrow" onClick={goToNextPage} className={`next ${currentPage === pages ? 'disabled' : ''}`}/>
                </div>
            </div>
        );
  }

  export default Pagination