import React, { ReactNode } from "react";
import { StyledBlurredBackground } from "../common/BlurredBackground";
import { ModalCloseButton } from "../common/ModalCloseButton";
import { StyledTweetModalContainer } from "../tweet-modal/TweetModalContainer";
import ReactPortal from "../react-portal/ReactPortal";

interface PostModalProps {
  onClose: () => void;
  show: boolean;
  children: ReactNode;
}

export const PostModal = ({ onClose, show, children }: PostModalProps) => {
  return (
    <>
      {show && (
        <ReactPortal wrapperId='react-portal-modal' >
          <StyledBlurredBackground>
            <StyledTweetModalContainer>
              <ModalCloseButton onClick={onClose} />
              {children}
            </StyledTweetModalContainer>
          </StyledBlurredBackground>
        </ReactPortal>
      )}
    </>
  );
};
