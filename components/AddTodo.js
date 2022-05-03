import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
function AddTodo(props) {
    return (
        <View style={styles.block} >
            <TextInput placeholder="할 일을 입력하세요." style={styles.input} />
        </View>
    );
}

const styles = StyleSheet.create({
    block: {
        height: 64,
        paddingHorizontal: 16,
        borderColor: '#bdbdbd',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        justifyContent: 'center',
    },
    input: {
        fontSize: 16,
        paddingVertical: 8,
    },
});

export default AddTodo;
