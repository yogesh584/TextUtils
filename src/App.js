import './App.css';


function App() {
  return (
    <>
      <header className='flex justify-between items-center bg-purple-500 text-white p-4 px-8'>
        <h2 className='uppercase font-bold text-xl'>TextUtils</h2>
        <ul className='flex gap-8'>
          <li><a href="/">Home</a></li>
          <li><a href="/">Shop</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Contact</a></li>
        </ul>
      </header>
    </>
  );
}

export default App;
