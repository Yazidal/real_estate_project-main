import React from 'react';
import PropTypes from 'prop-types';
import Button from "@material-ui/core/Button";

import "components/Pagination.css";

const pagination = (props) => {
    const getNumbers = () => {
        let numbers = [];
        let itemsPerPage = props.itemsPerPage;
        let pageNumber = 1;

        for (let i = 0; i < props.count; i += itemsPerPage) {
            const page = pageNumber;
            let style = 'pagination__number';
            let style2 = 'pagination__number__active';
            let content = null;

            if (props.active === page) {
                content = (
                    <Button key={i}  variant="contained" style={{ cursor:"default", color:"white", backgroundColor:"#CA5335"}}>
                         {pageNumber}
                    </Button>
                );
            }
            else {
                content = (
                    <Button key={i} onClick={() => props.visitPage(page)} className={style}>
                        {pageNumber}
                    </Button>
                );
            }

            numbers.push(
                content
            );
            pageNumber++;
        }

        return numbers;
    };
    
    return (
        <div className='pagination' style={{padding:25}} >
            <Button variant="outlined" onClick={() => props.previous()} className='pagination__number'>
                Previous
            </Button>
            {getNumbers()}
            <Button variant="outlined" onClick={() => props.next()} className='pagination__number'>
                Next
            </Button>
        </div>
    );
};

pagination.propTypes = {
    itemsPerPage: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    active: PropTypes.number.isRequired,
    visitPage: PropTypes.func.isRequired,
    previous: PropTypes.func.isRequired,
    next: PropTypes.func.isRequired,
};

export default pagination;
