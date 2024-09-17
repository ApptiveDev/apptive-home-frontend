import Page from '@components/templates/Page';
import HeroSection from '@components/organisms/main/HeroSection';
import ActivitySection from '@components/organisms/main/activity/ActivitySection';
import MainSection from '@components/organisms/main/MainSection';
import GallerySection from '@components/organisms/gallery/GallerySection';
import Qna from '@components/organisms/qna/Qna';

function App() {

  return (
    <Page>
      <Qna />
      <HeroSection id="hero-section" /> 
      <MainSection id="main-section" mode="dark" />
      <ActivitySection id="activity-section" />
      <GallerySection id="gallery-section" />
    </Page>
  );
}

export default App;
