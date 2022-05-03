import { StyleSheet , View ,Text} from 'react-native';

import React from 'react';

const Header = (props) => {
  return (
    <View>
      <Text style={styles.header}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header:{
    fontWeight:'bold',
    fontSize:22,
    color: '#000000',
    margin:24,
  }
});

export default Header;
