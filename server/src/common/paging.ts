const paging = (page: number, totalPost: number) => {
  const maxPost = 10; // (1)
  const maxPage = 10; // (2)
  let currentPage = page ? page : 1; // (3)
  const hidePost = page === 1 ? 0 : (page - 1) * maxPost; // (4)
  const totalPage = Math.ceil(totalPost / maxPost); // (5)

  if (currentPage > totalPage) {
    // (6)
    currentPage = totalPage;
  }
  const startPage = Math.floor((currentPage - 1) / maxPage) * maxPage + 1; // (7)
  let endPage = startPage + maxPage - 1; // (8)

  if (endPage > totalPage) {
    // (9)
    endPage = totalPage;
  }

  return { startPage, endPage, hidePost, maxPost, totalPage, currentPage }; // (10)
};

export default paging;
