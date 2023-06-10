import React, { useState } from 'react';
import DogCard from "../../Components/DogCard/DogCard.tsx";
import { useGetProductsQuery } from "../../store/dogs/dogs.api.tsx";
import { CircularProgress } from "@mui/material";
import styles from './Home.module.scss'
import Pagination from "../../Components/pagination/Pagination.tsx";

const Home: React.FC = () => {
    const { data, isLoading, error } = useGetProductsQuery();
    const [currentPage, setCurrentPage] = useState(1);
    const [allPages] = useState(10);

    if (isLoading) {
        return <CircularProgress />;
    }
    if (error) {
        return <div>error</div>;
    }
    if (!data || data.length === 0) {
        return <div>No data available</div>;
    }
    const lastCountryIndex = currentPage * allPages;
    const firstCountryIndex = lastCountryIndex - allPages;
    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };
    return (
        <div className={styles.home_list}>
            <div className={styles.dogcard_list}>
                {data.map((dog, index) => {
                    if (index >= firstCountryIndex && index < lastCountryIndex) {
                        return (
                            <div key={dog.id}>
                                <DogCard dog={dog} />
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
            <Pagination
                countriesPerPage={allPages}
                totalCountries={data.length}
                paginate={paginate}
            />
        </div>
    );
};

export default Home;
