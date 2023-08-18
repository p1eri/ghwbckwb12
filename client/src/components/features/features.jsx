import './features.css'

const features = () => {
  return (
    <div className='containerfeat'>
        <div className='cards'>
            <div className='first'>
                <img src='/cred.svg' alt='img'></img>
                <h1 className='feattop'>User Safe Asset Fund <br></br>(SAFU)world.</h1>
                <p className='featunder'>Bitlist holds 10% of all trading fees<br></br> in a protected asset fund to protect<br></br> a portion of user funds.</p>
            </div>

            <div className='sec'>
                <img src='/eyye.svg' alt='img'></img>
                <h1 className='feattop'>User Access Control</h1>
                <p className='featunder'>Personalized access control allows <br></br> you to limit the devices and <br></br> addresses that can access your <br></br>account.</p>
            </div>

            <div className='third'>
                <img src='/msg.svg' alt='img'></img>
                <h1 className='feattop'>Improved data encryption</h1>
                <p className='featunder'>Your transaction data is encrypted <br></br> - only you can access your <br></br>personal data.</p>
            </div>
        </div>

        <div className='cards2'>
            <div className='first'>
                <img src='/msg.svg' alt='img'></img>
                <h1 className='feattop'>Support 24/7</h1>
                <p className='featunder'>24/7 real-time support is always <br></br> ready to help you.</p>
            </div>

            <div className='sec'>
                <img src='/rock.svg' alt='img'></img>
                <h1 className='feattop'>Fast replineshments <br></br>and withdraws</h1>
                <p className='featunder'>Transfer funds to and from your <br></br> accounts quickly and easily.</p>
            </div>

            <div className='third'>
                <img src='/pays.svg' alt='img'></img>
                <h1 className='feattop'>Comfortable P2P platform</h1>
                <p className='featunder'>Top up your account in any <br></br> convenient way on the P2P <br></br> platform at favorable rates.</p>
            </div>
        </div>
    </div>
  )
}

export default features