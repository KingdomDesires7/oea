import React from 'react';
import './BalloonWrenchModal.css';
import './3DToggle.css';

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
                <button onClick={()=>clicky()} className="BWMCloseButton">X</button>
            </div>

            <div className="BWMOptionsContainer">
                {/* <div className="BWMOption1Container">
                    <input type='checkbox' id='c3d'/>
                    <label for='c3d'>light</label>
                </div> */}
                 <div className="BWMOption1Container">
                <input type="checkbox" id="toggle" name="toggle" value="is_on"/>
            <label for="toggle" className="toy-toggle">
                <span className="border1"></span>
                <span className="border2"></span>
                <span className="border3"></span>
                <span className="handle">
                    <span className="handle-off"></span>
                    <span className="handle-on"></span>
                        </span>
                    </label>
                </div> 

                <div className="BWMOption2Container">
                    <input type='checkbox' id=''/>
                </div>


                {/* <button className="BWMOption2">Toggle Typing</button> */}
            </div>
        </div>
    </div>
  )
}

export default BalloonWrenchModal