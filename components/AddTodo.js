import React, { useState } from 'react';
import {View, StyleSheet, TextInput, Image, TouchableOpacity} from 'react-native';
function AddTodo(props) {
    const [text, setText] = useState('');

    return (
        <View style={styles.block} >
            <TextInput
                placeholder="할 일을 입력하세요."
                style={styles.input}
                value={text}
                onChangeText={setText}
            />
            <TouchableOpacity activeOpacity={0.5}>
                <View style={styles.buttonStyle}>
                    <Image source={require('../assets/icons/add_white/add_white.png')} />
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    block: {
        backgroundColor:'white',
        height: 64,
        paddingHorizontal: 16,
        borderColor: '#bdbdbd',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    input: {
        flex: 1,
        fontSize: 16,
        paddingVertical: 8,
    },
    buttonStyle : {
        alignItems:'center',
        justifyContent:'center',
        width:48,
        height:48,
        backgroundColor:'#6667AB',
        borderRadius:24,
        marginTop: 7

    }
});

export default AddTodo;
