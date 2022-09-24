function Pagination(props) {
  const per_page = 5;

  const getDataArray = () => {
    const pages = [];
    const totalRecord = 100;
    const pageCount = totalRecord / per_page;
    for (let i = 1; i <= pageCount; i++) {
      pages.push(i);
    }
    return pages;
  };
  return (
    <div>
      {getDataArray().map((page) => {
        return (
          <button
            id={`button-${page}`}
            className={props.currentPage === page ? "active-btn" : ""}
            onClick={() => {
              props.getPageData(page);
            }}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
}

export default Pagination;
