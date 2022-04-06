import React,{useState} from 'react'

export default function TextForm(props) {

    const [text,setText] = useState("");

    function handleOnChange(event){
        setText(event.target.value);
    }

    function handleUpClick(){
        const newText = text.toUpperCase();
        setText(newText);
        props.ShowAlert("Converted to UpperCase","success","green-500");
    }
     
    function handleLoClick(){
        const newText = text.toLowerCase();
        setText(newText);
        props.ShowAlert("Converted to LowerCase","success","green-500");
    }

    function handleCpClick(){
        let newText = text.toLowerCase();
        newText = newText.split(" ");
        let capitilizeText = "";
        Array.from(newText).forEach(element => {
            capitilizeText += element.charAt(0).toUpperCase() + element.slice(1) + " ";
        });
        setText(capitilizeText);
        props.ShowAlert("Converted to Capitalcase","success","green-500");
    }

    function handleClearClick(){
        const newText = "";
        setText(newText);
        props.ShowAlert("TextBox is Cleared","success","green-500");
    }

    function handleCopyClick(){
        navigator.clipboard.writeText(text);
        props.ShowAlert("Copy to clipboard!","success","green-500");
    }

    function countWords(){
        let numberOfWords = 0;
        let givenText = text.split(" ");
        givenText = givenText.filter((word)=>{
            if(word !== ""){
                return true;
            }
            return false;
        });
        numberOfWords = givenText.length;
        return numberOfWords;
    }

    function countCharacters(){
        let numberOfCharacters = 0;
        let givenText = text.split("");
        givenText = givenText.filter((character)=>{
            if(character !== " "){
                return true;
            }
            return false;
        });
        numberOfCharacters = givenText.length;
        return numberOfCharacters;
        
    }


  return (
      <>
        <div className='w-4/5 mx-auto my-8'>
            <div className='my-4'>
            <h2 className={`my-4 text-2xl text-${props.mode === 'light'?'black' : 'white'}`}>{props.heading}</h2>
            <textarea name="" id="" cols="30" rows="10" value={text} onChange={handleOnChange} className='border-[1px] border-gray-400 outline-0 w-full rounded-md resize-none p-4 text-md' style={{backgroundColor:props.mode === 'light'?'white' : '#111',color:props.mode === 'light'?'black' : 'white'}} placeholder='Enter Your Text Here ...'></textarea>
            </div>
        <button onClick={handleUpClick} className='py-2 px-5 mr-3 bg-blue-500 rounded-md cursor-pointer text-white hover:bg-blue-600 transition'>Convert To Uppercase</button>
        <button onClick={handleLoClick} className='py-2 px-5 mr-3 bg-blue-500 rounded-md cursor-pointer text-white hover:bg-blue-600 transition'>Convert To Lowercase</button>
        <button onClick={handleCpClick} className='py-2 px-5 mr-3 bg-blue-500 rounded-md cursor-pointer text-white hover:bg-blue-600 transition'>Convert To Capitalcase</button>
        <button onClick={handleClearClick} className='py-2 px-5 mr-3 bg-blue-500 rounded-md cursor-pointer text-white hover:bg-blue-600 transition'>Clear Text</button>
        <button onClick={handleCopyClick} className='py-2 px-5 mr-3 bg-blue-500 rounded-md cursor-pointer text-white hover:bg-blue-600 transition'>Copy Text</button>
        </div>
        <div className='w-4/5 mx-auto my-8' style={{color:props.mode === 'light'?'black' : 'white'}}>
            <h2 className='my-4 text-2xl'>Your Text Summary</h2>
            <p>{countWords()} words and {text.length} characters (including spaces) and {countCharacters()} characters (without spaces) and {text.split(".").length - 1} Sentenses</p>
            <p>{(countWords()) * 0.008} Minutes Reading Time</p>
            <p>{(countWords()) * 0.005} Minutes Speaking Time</p>
        </div>
        <div className='w-4/5 mx-auto my-8' style={{color:props.mode === 'light'?'black' : 'white'}}>
            <h2 className='my-4 text-2xl'>Preview</h2>
            <p className='text-grey-300 w-full'>{text.length>0?text:"Enter something in the textbox above to preview it"}</p>
        </div>
    </>
  )
}
// text.split(" ").length - 1
