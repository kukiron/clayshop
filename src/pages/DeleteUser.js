import React, { Component } from "react"
import { connect } from "react-redux"
// import { ListItemIcon } from "material-ui/List"
// import Person from "material-ui-icons/Person"

import { fetchUsers, deleteUser } from "../data/actions"
import renderError from "../components/RenderError"

// Rendering a list of users to delete account
class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers()
  }

  // Call the action creator to handle the delete
  handleDelete(id) {
    const { deleteUser, history } = this.props
    deleteUser(id, { history })
  }

  renderUsersList() {
    const { usersList } = this.props
    if (!usersList) return <div>Loading...</div>

    return usersList.map((user, i) => (
      <div key={i}>
        <li className="user">
          <i className="material-icons users-list__icon">person_pin</i>
          <div>
            <h6>{user.fullname}</h6>
            <p>{`Door Access: ${user.access}`}</p>
          </div>
          <button
            className="btn btn-raised btn-danger delete-btn"
            onClick={() => this.handleDelete(user._id)}
          >
            Delete
          </button>
        </li>
        <hr />
      </div>
    ))
  }

  render() {
    const { deleteErrorMsg } = this.props

    return (
      <div className="users-list__delete">
        <div>{renderError(deleteErrorMsg)}</div>
        <ul> {this.renderUsersList()}</ul>
      </div>
    )
  }
}

const mapStateToProps = ({
  users: { usersList },
  errors: { deleteErrorMsg }
}) => ({ usersList, deleteErrorMsg })

export default connect(mapStateToProps, { fetchUsers, deleteUser })(UsersList)
