import React from 'react';
import styles from './pagination.module.scss';
interface PaginationProps {
    countriesPerPage: number;
    totalCountries: number;
    paginate: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ countriesPerPage, totalCountries, paginate }) => {
    const pageNumbers = Math.ceil(totalCountries / countriesPerPage);
    const pages = Array.from({ length: pageNumbers }, (_, index) => index + 1);
    return (
        <div>
            <div className={styles.pagination}>
                {pages.map(number => (
                    <div key={number} className={styles.pagination_div}>
                        <div onClick={() => paginate(number)} className={styles.btn_pagination}>
                            {number}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pagination;