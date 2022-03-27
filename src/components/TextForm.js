import React,{useState} from 'react'

export default function TextForm(props) {

    const [text,setText] = useState("");

    function handleOnChange(event){
        setText(event.target.value);
    }

    function handleUpClick(){
        const newText = text.toUpperCase();
        setText(newText);
    }
     
    function handleLoClick(){
        const newText = text.toLowerCase();
        setText(newText);
    }


  return (
      <>
        <div className='w-4/5 mx-auto my-8'>
            <div className='my-4'>
            <h2 className='my-4 text-2xl'>{props.heading}</h2>
            <textarea name="" id="" cols="30" rows="10" value={text} onChange={handleOnChange} className='border-[1px] border-gray-400 outline-0 w-full rounded-md resize-none p-4 text-md' placeholder='Enter Your Text Here'></textarea>
            </div>
        <button onClick={handleUpClick} className='py-2 px-5 mr-3 bg-blue-500 rounded-md cursor-pointer text-white hover:bg-blue-600 transition'>Convert To Uppercase</button>
        <button onClick={handleLoClick} className='py-2 px-5 bg-blue-500 rounded-md cursor-pointer text-white hover:bg-blue-600 transition'>Convert To Lowercase</button>
        </div>
        <div className='w-4/5 mx-auto my-8'>
            <h2 className='my-4 text-2xl'>Your Text Summary</h2>
            <p>{text.split(" ").length - 1} words and {text.length} characters</p>
        </div>
        <div className='w-4/5 mx-auto my-8'>
            <h2 className='my-4 text-2xl'>Preview</h2>
            <p className='text-grey-300'>{text}</p>
        </div>
    </>
  )
}
