import React, { Component } from "react"
import { connect } from "react-redux"

// HOC: protect routes for Admin auth'd routes
export default ComposedComponent => {
  class Authentication extends Component {
    componentWillMount() {
      if (this.props.access !== "Admin") this.props.history.push("/feature")
    }

    componentWillUpdate(nextProps) {
      if (nextProps.access !== "Admin") this.props.history.push("/feature")
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps({ auth: { access } }) {
    return { access }
  }

  return connect(mapStateToProps)(Authentication)
}
