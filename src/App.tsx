import ChatRoom from "pages/ChatRoom";
import styled, { css } from "styled-components";
import { useRecoilState } from "recoil";
import { resizeState } from "recoil/recoil";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import ChatList from "pages/ChatList";

const App = () => {
  const [isMobile, setIsMobile] = useRecoilState(resizeState);

  const _handleResize = () => {
    if (window.innerWidth <= 640) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    if (window.innerWidth <= 640) {
      setIsMobile(true);
    }

    window.addEventListener("resize", _handleResize);
    return () => {
      window.removeEventListener("resize", _handleResize);
    };
  }, []);

  return (
    <Wrapper>
      <Container isMobile={isMobile}>
        <Routes>
          <Route path="/chatList" element={<ChatList />} />
          <Route path="/chatRoom" element={<ChatRoom />} />
        </Routes>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div<{ isMobile: boolean }>`
  border: 1px solid lightgrey;
  ${({ isMobile }) =>
    isMobile
      ? css`
          height: 100%;
          width: 100%;
        `
      : css`
          height: 640px;
          width: 360px;
          border-radius: 7px;
        `}
`;

export default App;
