import React from 'react'

import Background from '../components/background'

class DefaultLayout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedMusic: 1
    }
  }
  render() {
    return (
      <div>
        New layout
        <Background selectedMusic={this.state.selectedMusic} />
        {this.props.children}
      </div>
    )
  }
}

export default DefaultLayout
