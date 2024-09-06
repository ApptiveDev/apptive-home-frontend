import Image from '@/components/atoms/image/Image';
import FormOpen from '@assets/icons/qna/close_icon.svg';
import FormClose from '@assets/icons/qna/airplane_btn.svg';

function FloatingButton({isOpen, onClick}: {isOpen: boolean, onClick: () => void}) {

  const handleButtonClick = () => {
    onClick();
  };
  return(
    <button onClick={handleButtonClick} style={{ display:'block', alignContent:'center',width:'60px', height:'60px', borderRadius:'24px', backgroundColor:'#FF861A', border:'2px solid #ECEDEE4D', padding:'12px',boxSizing:'border-box',zIndex:1000}}>
      <Image style={isOpen?{height:'80%',width:'80%'}:{height:'100%',width:'100%'}} src={isOpen?FormOpen:FormClose} alt="button" />
    </button>
  )
}

export default FloatingButton;