import { useEffect, useState } from "react";
import { useHttpRequestService } from "../service/HttpRequestService";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Chat } from "../service";

export const useGetChats = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [after, setAfter] = useState("")
  const [hasMore, setHasMore] = useState(true)
  const user = useAppSelector((state) => state.user)
  const [chats, setChats] = useState<Chat[]>([])

  
  const dispatch = useAppDispatch();

  const service = useHttpRequestService();

  const fetchMessages = async () => {
    if (!hasMore) {
        return
    } else {
      setLoading(true)
      await service.getChat(user.user.id).then((res) => {
        // if (res.lenght === 0) setHasMore(false)
        // console.log(res);
        
        const updatedChats = Array.from(new Set([...chats, ...res]));
        setChats(updatedChats)
        setLoading(false)
      }).catch((e) => {
        console.log(e);
      })
    }
  }
  
  useEffect(() => {
    try {
      setError(false);
      fetchMessages()
      } catch (e) {
        setError(true);
        console.log(e);
      }
    
  }, []);

  const loadMore = () => {
    setPage(page + 1);
  };

  return { chats };
};
