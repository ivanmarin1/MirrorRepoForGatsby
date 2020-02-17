import React from "react"
import { Link } from "gatsby"
import styles from "../styles/nav.module.css"

const Pagination = ({ currentPage, pageCount }) => {
  return (
    <nav className={styles.pagination}>
      {currentPage > 1 ? (
        <Link
          title="Prethodna stranica"
          to={`/review/${currentPage - 1}`}
          className={styles.arrow}
        >
          &#8249;
        </Link>
      ) : (
        <span />
      )}
      Stranica {currentPage} od {pageCount}
      {currentPage < pageCount ? (
        <Link
          title="Sljedeća stranica"
          to={`/review/${currentPage + 1}`}
          className={styles.arrow}
        >
          &#8250;
        </Link>
      ) : (
        <span />
      )}
    </nav>
  )
}

export default Pagination
