import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  Keyboard,
} from 'react-native';
function AddTodo( {onInsert }) {
  const [text, setText] = useState('');

  const onPress = () => {
    onInsert(text);
    setText('');
    Keyboard.dismiss();
  };

  const button = (
    <View style={styles.buttonStyle}>
      <Image source={require('../assets/icons/add_white/add_white.png')} />
    </View>
  );
  return (
    <View style={styles.block}>
      <TextInput
        placeholder="할 일을 입력하세요."
        style={styles.input}
        value={text}
        onChangeText={setText}
        autoCapitalize='none'
        onSubmitEditing={onPress}
        returnKeyType="done"
      />
      {/* Platform.select 함수를 사용하여 특정 os일 때 보여주는 컴포넌트를 달리한다. */}
      {Platform.select({
        ios: (
          <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
            {button}
          </TouchableOpacity>
        ),
        android: (
          <View style={styles.circleWrapper}>
            <TouchableNativeFeedback onPress={onPress}>{button}</TouchableNativeFeedback>
          </View>
        ),
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    backgroundColor: 'white',
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
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    backgroundColor: '#6667AB',
    borderRadius: 24,
    marginTop: 7,
  },
  circleWrapper: {
    overflow: 'hidden',
    borderRadius: 24,
  },
});

export default AddTodo;
