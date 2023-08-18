import './footer.css'
import Button from 'react-bootstrap/Button';

const footer = () => {
  return (
    <div className='footer'>
        <div className='fcont'>
            <div className='frside'>
                <img className='footerlogo' src='/footerlogo.svg' alt='img'></img>
                <img className='sm' src='/smfooter.svg' alt='img'></img>
                <div className='bfoot'>
                    <Button variant="primary" className='reg'>Register</Button>
                    <Button variant="primary" className='log'>Log in</Button>
                </div>
            </div>

            <div className='flside'>
                <div className='fcollum'>
                    <p>Trade</p>
                    <p>P2P</p>
                    <p>Partners</p>
                    <p>Mining</p>
                    <p>Academy</p>
                </div>
                <div className='scollum'>
                    <p>Privacy policy</p>
                    <p>Terms of rules</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default footer