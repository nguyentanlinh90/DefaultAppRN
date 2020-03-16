import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';
import {changeMsgCode} from '../../../api/helpers';

class SplashContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.disableYellowBox = true;
  }

  render() {
    const {} = this.props;
    return (
      <View>
        <Text>Chào mừng!</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    msg_code: state.splash.msg_code,
    message: state.splash.message,
    data: state.splash.data,
  };
}

export default connect(mapStateToProps, {
  changeMsgCode,
})(SplashContainer);
