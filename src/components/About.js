import React, {useState} from 'react'

export default function About() {

    const [mystyle, setMyStyle] = useState({
        color : "black",
        backgroundColor : "#fff"
    });

    const [btntext,setBtnText] = useState("Enable Dark Mode");


    function toggelState(){
        if(mystyle.color === 'black'){
            setMyStyle({
                color:"white",
                backgroundColor : "#0b0b0b"
            });
            setBtnText("Enable Light Mode");
        }
        else{
            setMyStyle({
                color:"black",
                backgroundColor: "white"
            });
            setBtnText("Enable Dark Mode");
        }
    }


  return (
    <div className='relative py-4' style={mystyle}>
        <button className='absolute top-4 right-4 px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 transition' onClick={toggelState}>{btntext}</button>
        <div className='w-3/5 mx-auto my-4'>
            <h2 className='text-4xl font-bold'>About Us</h2>
            <h3 className='text-3xl font-medium mt-4'>Heading 1</h3>
            <p className='my-4 text-[20px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam assumenda omnis quis illum, minus vero aperiam alias explicabo tempore perferendis quos similique exercitationem soluta, quae ad harum nostrum natus recusandae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ex.</p>
            <h3 className='text-3xl font-medium mt-2'>Heading 2</h3>
            <p className='my-4 text-[20px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam assumenda omnis quis illum, minus vero aperiam alias explicabo tempore perferendis quos similique exercitationem soluta, quae ad harum nostrum natus recusandae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nam repellendus laborum repudiandae laboriosam. Facere voluptatibus nobis beatae perspiciatis cumque ipsam error quam mollitia voluptatem alias! Nulla facere nemo eaque. lorem</p>
            <h3 className='text-3xl font-medium mt-2'>Heading 3</h3>
            <p className='my-4 text-[20px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam assumenda omnis quis illum, minus vero aperiam alias explicabo tempore perferendis quos similique exercitationem soluta, quae ad harum nostrum natus recusandae! Lorem ipsum dolor sit amet.</p>
            <h3 className='text-3xl font-medium mt-2'>Heading 4</h3>
            <p className='my-4 text-[20px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam assumenda omnis quis illum, minus vero aperiam alias explicabo tempore perferendis quos similique exercitationem soluta, quae ad harum nostrum natus recusandae!</p>
        </div>


    </div>
  )
}

// BackgroundColor - #0b0b0b (For Dark Mode)