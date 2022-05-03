import React from 'react';
import {View, StyleSheet, Text, StatusBar} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

//useSafeAreaInsets 함수를 사용하여 StautsBar의 높이를 구할 수 있다.


function DateHead({date}) {
    const year = date.getFullYear();
    const month = date.getMonth()+1 //0 - 11 까지 있으므로 +1
    const day = date.getDate();
    const formatted = `${year}년 ${month}월 ${day}일`;
    const {top} = useSafeAreaInsets();

    return (
        <>
            <View style={[styles.statusBarPlaceholder, {height: top}]} />
            <StatusBar backgroundColor="#6667AB" barStyle={'light-content'}/>
            <View style={styles.block}>
                <Text style={styles.dateText} > {formatted} </Text>
            </View>
        </>
    );
}
const styles = StyleSheet.create({
    block: {
        padding: 16,
        backgroundColor: '#6667AB',
    },
    dateText: {
        fontSize: 26,
        color: 'white',
        fontWeight: 'bold'
    },
    statusBarPlaceholder: {
        backgroundColor: '#6667AB',
    }
});

export default DateHead;
