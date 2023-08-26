import React from 'react';
import { Container, ContentSection, ImageSection, Paragraph, QrImage, Title } from './styles';

const App: React.FC = () => {
  return (
    <main>
      <Container>
        <ImageSection>
          <QrImage src='/image-qr-code.png'></QrImage>
        </ImageSection>
        <ContentSection>
          <Title>Improve your front-end<br /> skills by building projects</Title>
          <Paragraph>  Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</Paragraph>
        </ContentSection>
      </Container>
      
    </main>
  );
};

export default App;
