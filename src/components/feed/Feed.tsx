import React from "react";
import { Post } from "../../service";
import { StyledContainer } from "../common/Container";
import Tweet from "../tweet/Tweet";
import Loader from "../loader/Loader";
import InfiniteScroll from "react-infinite-scroll-component";

interface FeedProps {
  posts: Post[];
  loading: boolean;
  loadMore: () => void;
}

const Feed = ({ posts, loading, loadMore }: FeedProps) => {
  return (
    <InfiniteScroll
      dataLength={posts.length}
      next={loadMore}
      hasMore={!loading}
      loader={""}
    >
      <StyledContainer width={"100%"} alignItems={"center"}>
        {posts
          .filter((post, index, self) => {
            return self.findIndex((p) => p.id === post.id) === index;
          })
          .map((post: Post) => (
            <Tweet key={post.id} post={post} />
          ))}
        {loading && <Loader />}
      </StyledContainer>
    </InfiniteScroll>
  );
};

export default Feed;
