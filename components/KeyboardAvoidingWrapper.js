import React, { Children } from 'react'
import { KeyboardAvoidingView, TouchableWithoutFeedback, ScrollView, Keyboard } from 'react-native';

const KeyboardAvoidingWrapper = ({children}) =>{
    return(
        <KeyboardAvoidingView style={{flex:1}}>
            <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    {children}
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

export default KeyboardAvoidingWrapper;