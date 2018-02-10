import React, { Component } from "react"
import { connect } from "react-redux"

// HOC: protect routes for logged in users
export default ComposedComponent => {
  class Authentication extends Component {
    componentWillMount() {
      const { authenticated, history } = this.props
      !authenticated && history.push("/")
    }

    componentWillUpdate(nextProps) {
      const { history } = this.props
      !nextProps.authenticated && history.push("/")
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps({ auth: { authenticated } }) {
    return { authenticated }
  }

  return connect(mapStateToProps)(Authentication)
}
