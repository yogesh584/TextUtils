import PropTypes from 'prop-types'

export default function Navbar(props){
    function darkModeSwitch(event){
      let SwitchCircle = document.querySelector("#SwitchCircle");
      SwitchCircle.classList.toggle("darkModeSwitchActive");
    }

    // #2d3436
    return (
        <header className={`flex justify-between items-center bg-[${props.mode === 'light'?'#fff' : '#131313'}] text-white py-5 px-8 shadow-md transition duration-200`}>
        <h2 className={`uppercase font-bold text-xl text-${props.mode === 'light'?'black' : '#fff'}`}>{props.title}</h2>
        <ul className='flex gap-8'>
          <li><a href="/" className={`text-${props.mode === 'light'?'black' : '#fff'} transition duration-200`}>Home</a></li>
          <li><a href="/" className={`text-${props.mode === 'light'?'black' : '#fff'} transition duration-200`}>Shop</a></li>
          <li><a href="/" className={`text-${props.mode === 'light'?'black' : '#fff'} transition duration-200`}>{props.about}</a></li>
          <li><a href="/" className={`text-${props.mode === 'light'?'black' : '#fff'} transition duration-200`}>Contact</a></li>
        </ul>
        <div className='flex items-center gap-4'>
          <div className='w-10 bg-white h-5 rounded-xl p-[2px] cursor-pointer border-[1px] border-grey-900' onClick={()=>{props.toggleMode(); darkModeSwitch();}}>
            <div className='aspect-square rounded-full bg-blue-500 h-full transition' id='SwitchCircle'></div>
          </div>
          <span className={`text-${props.mode === 'light'?'black' : 'white'} transition duration-200`}>Enable Dark Mode</span>
        </div>
      </header>
    );
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired
};

Navbar.defaultProps = {
    title: "TextUtils",
    about: "About"
};