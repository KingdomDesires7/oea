import React from 'react';
import './BalloonWrenchModal.css';
import './3DToggle.css';
import './RadioHopping.sass';
// import cancelButton from './cancelButton';

function BalloonWrenchModal({closeBalloonWrench}) {

    const closeBalloonWrenchClicked = () => {
        closeBalloonWrench()
        const iPadShellContainer = document.querySelector('.iPadShellContainer')
        iPadShellContainer.style.pointerEvents = "all"
    }

    const colorSchemeClicked = (mode) => {
        if (mode === 'lightMode') {
        }
        if (mode === 'darkMode') {
        }
    }

  return (
    <div className="BWMBackground">
        <div className="BWMContainer">
        <div className="BWMTitleContainer">
                <div className="BWMTitle">Balloon Wrench</div>
            </div>
            <div className="BWMCloseButtonContainer">
                <button onClick={()=>closeBalloonWrenchClicked()} className="BWMCloseButton"></button>
            </div>

            <div className="BWMOptionsContainer">
                <div className="BWMOption1Contents">

                <span className="BWMOption1TextContainer">
                    <span className="BWMOption1Label">Toggle Typewriting</span>
                </span>
                 <span className="BWMOption1Container">
                    <input type="checkbox" id="toggle" name="toggle" value="is_on"/>
                    <label for="toggle" className="toy-toggle"></label>
                </span> 
                <span className="BWMOption1DescriptionContainer">
                    <span className="BWMOption1DescriptionLabel">Turns off the instructions shown in the omnibox</span>
                </span>
                </div>


                <div className="BWMOption2Contents">

                <span className="BWMOption2TextContainer">
                    <span className="BWMOption2Label">Toggle Typewriting 2</span>
                </span>
                 <span className="BWMOption2Container">
                    <input type="checkbox" id="toggle2" name="toggle2" value="is_on"/>
                    <label for="toggle2" className="toy-toggle2"></label>
                </span> 
                <span className="BWMOption2DescriptionContainer">
                    <span className="BWMOption2DescriptionLabel">Toggles something else here</span>
                </span>
                </div>


                <div className="BWMOption3Contents">

                <span className="BWMOption3TextContainer">
                    <span className="BWMOption3Label">Toggle Typewriting 3</span>
                </span>
                 <span className="BWMOption3Container">
                    <input type="checkbox" id="toggle3" name="toggle3" value="is_on"/>
                    <label for="toggle3" className="toy-toggle3"></label>
                </span> 
                    <span className="BWMOption3DescriptionContainer">
                        <span className="BWMOption3DescriptionLabel">Toggles a third TBH thing here</span>
                    </span>
                </div>
                <div className="BWMOption4Contents">
                <form>

<input onClick={() => colorSchemeClicked('lightMode')} className="radioHopping" id="a" type="radio" name="hopping" value="a" checked/>
<label className="radioHopping" for="a"><span></span>Dark Mode</label>
<input className="radioHopping" id="b" type="radio" name="hopping" value="b"/>
<label onClick={() => colorSchemeClicked('darkMode')} className="radioHopping" for="b"><span></span>Light Mode</label>
{/* <input className="radioHopping" id="c" type="radio" name="hopping" value="c"/>
<label className="radioHopping" for="c"><span></span>C</label> */}
    <div className="radioHopping worm">
    <div className="radioHopping worm__segment"></div>
    <div className="radioHopping worm__segment"></div>
    <div className="radioHopping worm__segment"></div>
    <div className="radioHopping worm__segment"></div>
    <div className="radioHopping worm__segment"></div>
    <div className="radioHopping worm__segment"></div>
    <div className="radioHopping worm__segment"></div>
    <div className="radioHopping worm__segment"></div>
    <div className="radioHopping worm__segment"></div>
    <div className="radioHopping worm__segment"></div>
    <div className="radioHopping worm__segment"></div>
    <div className="radioHopping worm__segment"></div>
    <div className="radioHopping worm__segment"></div>
    <div className="radioHopping worm__segment"></div>
    <div className="radioHopping worm__segment"></div>
    <div className="radioHopping worm__segment"></div>
    <div className="radioHopping worm__segment"></div>
    <div className="radioHopping worm__segment"></div>
    <div className="radioHopping worm__segment"></div>
    <div className="radioHopping worm__segment"></div>
    <div className="radioHopping worm__segment"></div>
    <div className="radioHopping worm__segment"></div>
    <div className="radioHopping worm__segment"></div>
    <div className="radioHopping worm__segment"></div>
    <div className="radioHopping worm__segment"></div>
    <div className="radioHopping worm__segment"></div>
    <div className="radioHopping worm__segment"></div>
    <div className="radioHopping worm__segment"></div>
    <div className="radioHopping worm__segment"></div>
    <div className="radioHopping worm__segment"></div>
</div>
</form>
        </div>
        </div>
    </div>
</div>
  )
}

export default BalloonWrenchModal