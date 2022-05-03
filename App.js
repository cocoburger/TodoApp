/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
    KeyboardAvoidingView, Platform,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';
import DateHead from './components/DateHead';
import {SafeAreaProvider} from 'react-native-safe-area-context/src/SafeAreaContext';
import {SafeAreaView} from 'react-native-safe-area-context';
import AddTodo from './components/AddTodo';
import Empty from './components/Empty';

function App() {
  const today = new Date();
  console.log(today);
  return (
      <SafeAreaProvider>
          {/*  safeArea를 bottom 하단 부분에만 적용한다는 의미*/}
          <SafeAreaView edges={['bottom']} style={styles.block}>
              <KeyboardAvoidingView
              // behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                  behavior={Platform.select({ios:'padding', android:undefined})}
              style={styles.avoid}>
                  <DateHead date={today} />
                  <Empty />
                  <AddTodo />
              </KeyboardAvoidingView>
          </SafeAreaView>
      </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
    block: {
        flex: 1,
        backgroundColor: 'rgba(255,255,255,0.99)'

    },
    avoid: {
        flex: 1,
    }
});
export default App;
