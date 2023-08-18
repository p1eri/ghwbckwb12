import './coins.css'

const coins = () => {
  return (
    <div>
        <div className='wrap'>
            <div className='mx-auto coinsection'>
              <div className='textsectop'>
                <p>Assets</p>
                  <div className='lastsector'>
                    <p>Price</p>
                    <p>Change</p>
                    <p>Volume</p>
                  </div>
              </div>
            </div>
            <div className='mx-auto butdiv'>
              <button className='underbut'>All assets</button>
            </div>
        </div>
    </div>
  )
}

export default coins