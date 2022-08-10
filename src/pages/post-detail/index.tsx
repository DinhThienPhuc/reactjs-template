/* PAGE: POST_DETAIL
   ========================================================================== */

import { TStore, actions, useDispatch, useSelector } from "store";

import { useEffect } from "react";
import { useParams } from "react-router-dom";

const PostDetail = () => {
  const params = useParams();
  const postDetail = useSelector((state: TStore) => state.postDetail.data);
  const dispatch = useDispatch();

  useEffect(() => {
    if (params.postId) {
      dispatch(actions.postDetail.fetchDetail(params.postId));
    }
  }, [dispatch, params.postId]);

  return (
    <>
      <p>Post id: {params.postId}</p>
      <p>Post name: {postDetail.name}</p>
    </>
  );
};

export default PostDetail;
