import React from 'react'
import { HeaderBackButton } from '@react-navigation/stack';
import { goBack } from '../navigation/navigatorRef'
export const HomeDetailsNavigation = {
        headerLeft: (props) => (
            <HeaderBackButton
                {...props}
                onPress={() => {
                    goBack()
                }}
            />
        ),
    }
