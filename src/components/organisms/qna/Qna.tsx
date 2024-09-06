import { useEffect, useRef, useState } from "react";
import FloatingButton from "./FloatingButton";
import QnaForm from "./QnaForm";
import { MAX_CONTENT_WIDTH } from '@styles/sizes';
import Container from "@/components/atoms/container/Container";

function Qna() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const formRef = useRef<HTMLDivElement>(null); // QnaForm을 감쌀 ref
  const buttonRef = useRef<HTMLButtonElement>(null); // FloatingButton을 감싸는 ref

  const handleButtonClick = () => {
    setIsFormOpen(!isFormOpen);
  };

  // QnaForm 외부 클릭 감지
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // 클릭한 요소가 QnaForm과 FloatingButton 외부일 경우에만 폼을 닫음
      if (
        formRef.current &&
        !formRef.current.contains(event.target as Node) &&
       
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsFormOpen(false);
      }
    };

    // 클릭 이벤트 리스너 추가
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // 컴포넌트 언마운트 시 이벤트 리스너 제거
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [formRef, buttonRef]);

  return (
    <Container
      size="full-width"
      maxWidth={MAX_CONTENT_WIDTH}
      direction="column"
      padding="20px"
      style={{
        padding: '50px 0',
        position:'fixed',
        alignItems:'end',
        display:'flex',flexDirection:'column', right:'30px',bottom:'10px', 
        zIndex:1000
      }}
      responsiveStyle={{
        sm: { padding: '50px 5%' },
      }}
    >
      <div 
      
      style={{display:'flex',flexDirection:'column', alignItems:'end',bottom:'10px', gap:'10px',zIndex:1000}}>
        <QnaForm ref={formRef} isOpen={isFormOpen}/>
        <FloatingButton ref={buttonRef} isOpen={isFormOpen} onClick={handleButtonClick} />
      </div>
    </Container>
    
 
  )  
}
export default Qna;