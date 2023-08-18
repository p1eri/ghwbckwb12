import './regist.css'

const regist = () => {
  return (
    <div className='regmain'>
        <h1 className='regtext'>Register your account now <br></br>and start to trade</h1>
        <div className='divforinp'>
            <input className='logoinput' placeholder='Example@gmail.com'></input><button className='logobtn'>Sign in</button>
        </div>
    </div>
  )
}

export default regist