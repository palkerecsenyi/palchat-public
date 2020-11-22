import React from 'react';
import './styles/index.scss';
import './styles/flex.scss';
import './styles/text.scss';

function App() {
    return (
        <div className='Centered'>
            <img height={100} alt='PalChat logo' src={require('./icon.png')} />
            <h1 className='Big White No-Margin'>PalChat</h1>

            <p className='White No-Margin Block'>
                Digital socialising shouldn't be about sending meaningless strings of messages or mindlessly scrolling through images.
            </p>

            <p className='White No-Margin-Bottom Block'>
                Which is why PalChat is about sharing genuine moments with your friends in real life.
            </p>

            <p className='White No-Margin-Bottom Block'>
                <a href='https://app.getbeamer.com/palchat/en' target='_blank'>
                    Release notes
                </a>
            </p>

            <div className='Row'>
                <div>
                    <a target='_blank'
                       rel='noopener noreferrer'
                       href='https://play.google.com/apps/testing/rocks.PalChat'
                    >
                        <img
                            alt='Get it on Google Play'
                            src='https://play.google.com/intl/en_gb/badges/static/images/badges/en_badge_web_generic.png'
                            height={75}
                        />
                    </a>
                </div>
                <div>
                    <a
                        target='_blank'
                        rel='noopener noreferrer'
                        href='https://testflight.apple.com/join/jCAlHRRz'
                    >
                        <img
                            alt='Download on the App Store'
                            src={require('./256x256.png')}
                            height={153}
                        />
                    </a>
                </div>
            </div>


            <p className='Smallprint White'>
                Google Play and the Google Play logo are trademarks of Google LLC.
            </p>

            <p className='Smallprint White'>
                PalChat Technologies Limited is a registered company in England (12615227)
            </p>
        </div>
    );
}

export default App;
