import React, {Component } from 'react'
import Page from './view'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'

class Template extends Component {
  constructor (props) {
    super(props)
    this.state = {
      txtMessage: ''
    }
  }

  handleBackRoute = () => {
    Actions.pop()
  }

  onChangeMessage = (txtMessage) => {
    this.setState({ txtMessage })
  }

  render () {
    const { selectedUser, userListData } = this.props
    const { txtMessage } = this.state
    const { onChangeMessage, handleBackRoute } = this
    return (
      <Page
        handleBackRoute={handleBackRoute}
        selectedUser={selectedUser}
        userListData={userListData}
        txtMessage={txtMessage}
        onChangeMessage={onChangeMessage}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userListData: state.userListData
  }
}

export default connect(mapStateToProps)(Template)
