/* PAGE: POST_LIST
   ========================================================================== */

import { TStore, actions, useDispatch, useSelector } from "store";
import { useEffect, useMemo } from "react";

import { NavLink } from "react-router-dom";

const Posts = () => {
  const posts = useSelector((state: TStore) => state.postList.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.postList.fetchList());
  }, [dispatch]);

  const renderPosts = useMemo(() => {
    return posts?.map((post) => {
      return (
        <NavLink key={post.id} to={`/posts/${post.id}`}>
          Post: {post.name}
        </NavLink>
      );
    });
  }, [posts]);

  return <>{renderPosts}</>;
};

export default Posts;
