import Container from '@/components/atoms/container/Container';
import Image from '@/components/atoms/image/Image';
import linkIconOrange from '@assets/images/link-icon-orange.svg';

interface GalleryCardProps {
  title: string;
  url: string;
  image: string;
}

function GalleryCard({ title, image }: GalleryCardProps) {
  return (
    <Container
      direction="column"
      size={{ width: '460px', height: '390px' }}
      justify="space-between"
      style={{ padding: '20px 20px', boxSizing: 'border-box' }}
    >
      <Container
        size={{ width: '440px', height: 'max-height' }}
        align="flex-end"
        justify="space-between"
      >
        <Container
          size={{ width: '330px', height: '52px' }}
          padding="0 20px "
          style={{
            borderLeft: '2px solid #000',
            fontSize: '22px',
            lineHeight: '26px',
            whiteSpace: 'pre-wrap',
          }}
        >
          <span dangerouslySetInnerHTML={{ __html: title }} />
        </Container>
        <Image style={{ width: '18px' }} src={linkIconOrange} alt="link icon" />
      </Container>
      <Image
        style={{ width: '460px', height: 'auto', borderRadius: '32px' }}
        src={image}
        alt="gallery image"
      />
    </Container>
  );
}

export default GalleryCard;
