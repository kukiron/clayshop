import React, { Component } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

import { routeChange } from "../data/actions"

// HOC: protect routes for Admin auth'd routes
export default ComposedComponent => {
  class ResetErrors extends Component {
    componentWillReceiveProps(nextProps) {
      this.props.location.pathname !== nextProps.location.pathname &&
        this.props.routeChange()
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  return withRouter(connect(null, { routeChange })(ResetErrors))
}
