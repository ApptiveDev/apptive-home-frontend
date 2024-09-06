import { useState } from "react";
import FloatingButton from "./FloatingButton";
import QnaForm from "./QnaForm";
import { MAX_CONTENT_WIDTH } from '@styles/sizes';
import Container from "@/components/atoms/container/Container";

function Qna() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleButtonClick = () => {
    setIsFormOpen(!isFormOpen);
  };
  return (
    <Container
      size="full-width"
      maxWidth={MAX_CONTENT_WIDTH}
      direction="column"
      padding="20px"
      style={{
        padding: '50px 20px',
      }}
      responsiveStyle={{
        lg: { padding: '100px 20px' },
      }}
    >
      <div style={{position:'fixed',display:'flex',flexDirection:'column',alignItems:'end', right:'10px',bottom:'10px', border:'2px solid #ECEDEE4D',gap:'5px',zIndex:1000}}>
        <QnaForm isOpen={isFormOpen}/>
        <FloatingButton isOpen={isFormOpen} onClick={handleButtonClick} />
      </div>
    </Container>
    
 
  )  
}
export default Qna;