import React, { useContext } from 'react';
import FeedBackText from '../components/FeedBackText';
import ContentContext from '../contexts/ContentContext';


function EvalStats() {

    const {contentValues, eyeValues, voiceValues} = useContext(ContentContext);
    const [contentUp, setContentUp] = contentValues;
    const [eyeUp, setEyeUp] = eyeValues;
    const [voiceUp, setVoiceUp] = voiceValues;
  
    var cont;
    var eye;
    var vc;

    const evalStats = () => {
        contentValues[0] === true ? (
            cont = <FeedBackText feedBackName="Content" percentFeedBack="50"/>
        ) : (
            cont = ""
        )
        
        eyeValues[0] === true ? (
            eye = <FeedBackText feedBackName="Eye-contact" percentFeedBack="69"/>
        ) : (
            eye = ""
        )
        
        voiceValues[0] === true ? (
            vc = <FeedBackText feedBackName="Voice" percentFeedBack="84"/>
        ) : (
            vc = ""
        )
    }

    
    evalStats()
  return (
    <div>
        {cont}
        {eye}
        {vc}

    </div>
  )
}

export default EvalStats
