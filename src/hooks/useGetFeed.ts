import { useEffect, useState } from "react";
import { useHttpRequestService } from "../service/HttpRequestService";
import { setLength, updateFeed } from "../redux/user";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

export const useGetFeed = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [after, setAfter] = useState("")
  const [hasMore, setHasMore] = useState(true)
  const posts = useAppSelector((state) => state.user.feed);
  const query = useAppSelector((state) => state.user.query);

  const dispatch = useAppDispatch();

  const service = useHttpRequestService();

  const fetchPosts = async () => {
    if (!hasMore) {
      return
    } else {
      setLoading(true)
      await service.getPaginatedPosts(12, after, query).then((res) => {
        if (res.lenght === 0) setHasMore(false)
        const updatedPosts = Array.from(new Set([...posts, ...res]));
        setAfter(updatedPosts[(updatedPosts.length - 1)].id);
        dispatch(updateFeed(updatedPosts));
        dispatch(setLength(updatedPosts.length));
        setLoading(false)
      }).catch((e) => {
        console.log(e);
      })
    }
  }
  
  useEffect(() => {
    try {
      setError(false);
      fetchPosts()
      } catch (e) {
        setError(true);
        console.log(e);
      }
    
  }, [query, page]);

  const loadMore = () => {
    setPage(page + 1);
  };

  return { posts, loading, error, loadMore };
};
