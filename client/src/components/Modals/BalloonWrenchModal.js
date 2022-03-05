import React from 'react';
import './BalloonWrenchModal.css';
import './3DToggle.css';
// import cancelButton from './cancelButton';

function BalloonWrenchModal() {

    const clicky = () => {
        alert('323')
    }
  return (
    <div className="BWMBackground">
        <div className="BWMContainer">
        <div className="BWMTitleContainer">
                <div className="BWMTitle">Balloon Wrench</div>
            </div>
            <div className="BWMCloseButtonContainer">
                <button onClick={()=>clicky()} className="BWMCloseButton"></button>
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
                </div>


                <div className="BWMOption2Contents">

                <span className="BWMOption2TextContainer">
                    <span className="BWMOption2Label">Toggle Typewriting 2</span>
                </span>
                 <span className="BWMOption2Container">
                    <input type="checkbox" id="toggle2" name="toggle2" value="is_on"/>
                    <label for="toggle2" className="toy-toggle2"></label>
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
                </div>

            </div>
        </div>
    </div>
  )
}

export default BalloonWrenchModal