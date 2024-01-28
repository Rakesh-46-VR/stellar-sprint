import React from 'react'
import {SafeAreaView , ScrollView} from 'react-native'
import ElevatesCards from './ElevatesCards'

const Picks = () => {
    return(
        <SafeAreaView>
            <ScrollView>
                <ElevatesCards/>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Picks