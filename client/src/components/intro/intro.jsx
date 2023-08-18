import './intro.css'

const intro = () => {
  return (
    <div>
        <div className='col'>
            <div className='mx-auto wrapper'>
                <div className='intro1'>
                    <img className='bottombaner' src='/button.png'></img>
                    <h1 className='uptext'>Buy, trade and store <br></br> cryptocurrencies</h1>
                </div>
                <img className='imgintro' alt='introimg' src='/intro.svg'></img>
            </div>
        </div>
        <div className='divinput'>
            <input className='logoinput' placeholder='Example@gmail.com'></input><button className='logobtn'>Sign in</button>
        </div>
    </div>
  )
}

export default intro