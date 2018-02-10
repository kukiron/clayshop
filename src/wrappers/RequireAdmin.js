import React, { Component } from "react"
import { connect } from "react-redux"

// HOC: protect routes for Admin auth'd routes
export default ComposedComponent => {
  class AuthAdmin extends Component {
    componentWillMount() {
      const { userAccess, history } = this.props
      userAccess !== "Admin" && history.push("/clayshop")
    }

    componentWillUpdate(nextProps) {
      const { history } = this.props
      nextProps.userAccess !== "Admin" && history.push("/clayshop")
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps({ users: { userAccess } }) {
    return { userAccess }
  }

  return connect(mapStateToProps)(AuthAdmin)
}
