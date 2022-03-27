import PropTypes from 'prop-types'

export default function Navbar(props){
    return (
        <header className='flex justify-between items-center bg-[#2d3436] text-white p-4 px-8'>
        <h2 className='uppercase font-bold text-xl'>{props.title}</h2>
        <ul className='flex gap-8'>
          <li><a href="/">Home</a></li>
          <li><a href="/">Shop</a></li>
          <li><a href="/">{props.about}</a></li>
          <li><a href="/">Contact</a></li>
        </ul>
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