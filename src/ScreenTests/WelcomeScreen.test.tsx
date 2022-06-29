import React from "react";
import WelcomeScreen from "../screens/WelcomeScreen";
import {render} from '@testing-library/react-native';


describe('WelcomeScreen',()=>{
    it('should go ListScreen',()=>{
        const page = render(<WelcomeScreen/>)
    })
})