/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from "styled-components";
import _ from "lodash";

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <Container>
      <ul className="pagination">
        {pages.map((page) => (
          <li key={page} className={page === currentPage ? "active" : ""}>
            <a
              href="#"
              className="page-link"
              onClick={() => onPageChange(page)}
            >
              <span>{page}</span>
            </a>
          </li>
        ))}
      </ul>
    </Container>
  );
};

const Container = styled.nav`
  padding: 0 40px;
  margin: 0 auto;
  margin-top: 10vh;
  display: flex;
  justify-content: center;

  ul {
    list-style: none;
    display: flex;
    gap: 15px;

    li {
      background-color: #303030;
      color: #fff;
      font-size: 18px;
      font-weight: 500;
      border-radius: 5px;
      cursor: pointer;

      a {
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    li.active {
      background-color: #7b61ff;
    }
  }
`;

export default Pagination;
