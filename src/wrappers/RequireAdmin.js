import React, { Component } from "react"
import { connect } from "react-redux"

// HOC: protect routes for Admin auth'd routes
export default ComposedComponent => {
  class RequireAdmin extends Component {
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

  const mapStateToProps = ({ users: { userAccess } }) => ({ userAccess })

  return connect(mapStateToProps)(RequireAdmin)
}
