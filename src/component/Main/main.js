import './main.css'


function Main() {
    return (
        <div className='main'>

            <div className='main-top'>
                <div className='sec-left'>
                          <img src="images\image-web-3-desktop.jpg" />
                       <div className='info'>
                              <h1>The Bright Future of Web 3.0</h1>
                              <div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                <button>READ MORE</button>
                              </div>
                       </div>
                </div>

                <div className='sec-right'>
                    <p>
                        <h1 id='titr'>New</h1>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    </p>
                    <p>
                        <h1>The Downside of Al Artistry</h1>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    </p>
                    <p id='no-border'>
                        <h1>Is VC Funding Drying Up?</h1>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    </p>
                </div>

            </div>
            <div className='main-bottom'>

            </div>
        </div>
    );
}

export default Main;