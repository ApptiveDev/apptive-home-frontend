import Page from '@components/templates/Page';
import HeroSection from '@components/organisms/main/HeroSection';
import ActivitySection from '@components/organisms/main/activity/ActivitySection';
import MainSection from './components/organisms/main/MainSection';
import GallerySection from './components/gallery/GallerySection';
import Qna from './components/organisms/qna/Qna';

function App() {
  return (
    <Page>
      <Qna />
      <HeroSection />
      <MainSection mode="dark" />
      <ActivitySection />
      <GallerySection />
    </Page>
  );
}

export default App;
