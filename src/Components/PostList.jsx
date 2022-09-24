import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import Post from "./Post";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  async function fetchPagination() {
    setLoading(true);
    const postResponse = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=5`
    );
    const jsonResponse = await postResponse.json();
    // console.log(jsonResponse);
    setPosts(jsonResponse);
    setLoading(false);
  }

  useEffect(() => {
    fetchPagination();
  }, [currentPage]);

  const getPageData = (page) => {
    setCurrentPage(page);
  };

  if (loading === true) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <div>
        {posts.map((post) => (
          <Post post={post} />
        ))}
        <Pagination currentPage={currentPage} getPageData={getPageData} />
      </div>
    </div>
  );
}

export default PostList;
