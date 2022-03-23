import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";

const PageShell = styled.div`
  height: 100vh;
  max-width: 100vw;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  scroll-behavior: smooth;
`;

const HomeSections = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  scroll-snap-align: start;
`;

const BackgroundImage = styled.img`
  height: 100vh;
  z-index: -1;
  width: 100vw;
  object-fit: cover;
  overflow: hidden;
`;

function Home() {
  return (
    <>
      <Helmet>
        <title>전기차, 태양광 및 청정 에너지 | Tesla 대한민국</title>
      </Helmet>

      <PageShell>
        <HomeSections>
          <BackgroundImage
            src="https://tesla-cdn.thron.com/delivery/public/image/tesla/8e2df1b9-a4bf-4eb9-beec-2cf5cc77fca0/bvlatuR/std/2880x2400/Desktop-ModelY"
            alt="경사진 언덕의 고속도로를 주행하는 Model Y Metallic Blue"
          />
        </HomeSections>
        <HomeSections>
          <BackgroundImage
            src="https://tesla-cdn.thron.com/delivery/public/image/tesla/e90a341e-f9ca-4aa1-8eab-94afea118786/bvlatuR/std/2880x1800/M3-Homepage-D"
            alt="Red Model 3 accelerating on an elevated highway"
          />
        </HomeSections>
        <HomeSections>
          <BackgroundImage
            src="https://tesla-cdn.thron.com/delivery/public/image/tesla/58df46a8-26c5-401f-9325-388b2990dcc3/bvlatuR/std/3296x1798/mx-homepage-desktop"
            alt="산으로 둘러싸인 도로를 주행하는 Model X Pearl White"
          />
        </HomeSections>
        <HomeSections>
          <BackgroundImage
            src="https://tesla-cdn.thron.com/delivery/public/image/tesla/676da95d-942e-414c-8534-f1832f0d4ced/bvlatuR/std/3296x1798/ms-homepage-desktop"
            alt="Red Model S accelerating on an elevated highway"
          />
        </HomeSections>
        <HomeSections>
          <BackgroundImage
            src="https://tesla-cdn.thron.com/delivery/public/image/tesla/27d0055c-b0bf-476c-b3aa-ec59d314f871/bvlatuR/std/2880x2400/Desktop-SolarPanels"
            alt="Tesla 태양광 패널 및 Powerwall이 설치된 미국식 목장 스타일의 주택"
          />
        </HomeSections>
      </PageShell>
    </>
  );
}

export default Home;
