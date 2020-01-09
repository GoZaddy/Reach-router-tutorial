import posed from "react-pose";
import React, {useState} from "react";
const Box = posed.div({
    visible: {
        opacity: 1,
        
        transition: {
            opacity: {ease: "easeOut", duration: 300},  //set the time for the Box to becomem visible
            //default: {ease: "linear", duration: 500}
        } 
    },
    hidden: {
        opacity: 0,
        
    }
});

const TestPose = () => {
    const[isVisible, setVisibility] = useState(false);
    return (
        <div>
            <Box className = "box" pose = {isVisible? "visible": "hidden"}>
            <p>hey</p>
        </Box>
        <button onClick = {() =>  {setVisibility(!isVisible)}}>setVisibility</button>
        </div>
        
    )
}

export default TestPose;