import React, { ForwardedRef } from "react";
import TweetBox from "../tweet-box/TweetBox";
import { PostModal } from "../post-modal/PostModal";

interface TweetModalProps {
  open: boolean;
  onClose: () => void;
}

export const TweetModal = React.forwardRef(({ open, onClose }: TweetModalProps, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <>
      <PostModal show={open} onClose={onClose}>
        <TweetBox close={onClose} ref={ref}/>
      </PostModal>
    </>
  );
});
export default TweetModal;
