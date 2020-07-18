const paging = (page: number, totalPost: number) => {
  const maxPost = 10;

  let currentPage = page ? page : 1;
  const totalPage = Math.ceil(totalPost / maxPost);
  const skipPage = (page - 1) * maxPost;

  if (currentPage > totalPage) {
    currentPage = totalPage;
  }

  return { maxPost, skipPage, totalPage, currentPage };
};

export default paging;
