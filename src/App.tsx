import { useState } from 'react'
import "./index.css"


const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];



function App() {

  //let step = 2;


  const [step, setStep] = useState(1);

  function handlePervious() {
    if (step > 1)
      setStep(() => step - 1)
  }
  function handleNext() {

    if (step < 3)
      setStep(() => step + 1)
  }

  return (
    <div className='steps'>
      <div className='numbers'>
        <div className={step >= 1 ? "active" : " "}>1</div>
        <div className={step >= 2 ? "active" : " "}>2</div>
        <div className={step >= 3 ? "active" : " "}>3</div>
      </div>



      <StepMessage step={step}>{messages[step - 1]} </StepMessage>

      <div className='buttons'>



        <Button bgcolor={'#7950f2'} textcolor={'white'} onClick={handlePervious} ><span>'⛵' </span>Pervious</Button>
        <Button bgcolor={'#7950f2'} textcolor={'white'} onClick={handleNext} >Next <span>'🛵' </span> <span>'🛵' </span></Button>
      </div>
    </div>
  )
}


function Button({ bgcolor, textcolor, onClick, children }: any) {

  return (<button style={{ backgroundColor: bgcolor, color: textcolor }} onClick={onClick}>{children}</button>)
}


function StepMessage({ step, children }: any) {

  return (

    <div className='message'>
      <h3>Step:{step}</h3>
      {children}
    </div>)

}

export default App
