import styled from "@emotion/styled";

import { IntroSection } from "@/components/features/Home/IntroSection";
import { MainBanner } from "@/components/features/Home/MainBanner";
import { Footer } from "@/components/features/Layout/Footer";

export const HomePage = () => {
  return (
    <Wrapper>
      <MainBanner />
      <IntroSection />
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div``;
