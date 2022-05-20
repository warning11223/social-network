import React, {useState} from 'react';
import styles from "./Users.module.css";
import {Pagination} from "@mui/material";

const Paginator = ({totalUsers, pageSize, currentPage, onChangeCurrentPage}) => {
    const pagesCount = Math.ceil(totalUsers / pageSize);
    const pages = [];

    for( let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }



    return (
        <>
            <Pagination
                count={pagesCount}
                shape="rounded"
                color='secondary'
                page={currentPage}
                onChange={(_, num) => onChangeCurrentPage(num)}
            />


           {/* {pages
                .map((item, index) => {
                return <span
                    className={currentPage === item ? styles.active : styles.cursor}
                    key={index}
                    onClick={() => onChangeCurrentPage(item)}
                >{item}</span>
            })}*/}

        </>
    );
};

export default Paginator;
