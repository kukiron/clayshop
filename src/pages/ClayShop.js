import React, { Component } from "react"
import { connect } from "react-redux"

import { fetchUserAccess } from "../data/actions"
import { AccessButton } from "../components/Buttons"

// App landing page for all the shop employees
class ClayShop extends Component {
  componentWillMount() {
    this.props.fetchUserAccess()
  }

  handlePermission(door) {
    const { access, history } = this.props,
      // check for user authorization level for door access
      doorAccess = access === "Admin" || access === "Both" || access === door

    doorAccess ? history.push("/authorized") : history.push("/unauthorized")
  }

  render() {
    return (
      <div className="clayshop">
        <h1>Get Access to ClayShop</h1>
        <div className="front-door">
          <h3>Front Door</h3>
          <AccessButton
            door="Front"
            onClick={e => this.handlePermission(e.target.id)}
          />
        </div>

        <div className="storage-door">
          <h3>Storage Door</h3>
          <AccessButton
            door="Storage"
            onClick={e => this.handlePermission(e.target.id)}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ auth: { access } }) => {
  return { access }
}

export default connect(mapStateToProps, { fetchUserAccess })(ClayShop)
