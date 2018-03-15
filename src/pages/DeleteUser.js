import React, { Component } from "react"
import { connect } from "react-redux"

import { fetchUsers, deleteUser } from "../data/actions"
import renderError from "../components/RenderError"

// Rendering a list of users to delete account
class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers()
  }

  // Call the action creator to handle the deletion
  handleDelete(id) {
    const { deleteUser, history } = this.props
    deleteUser(id, { history })
  }

  renderUsersList() {
    const { usersList } = this.props
    if (!usersList) return <h4>Loading...</h4>

    return usersList.map((user, i) => (
      <div key={i}>
        <li className="user">
          <i className="material-icons users-list__icon">person_pin</i>
          <h6>{user.fullname}</h6>
          <p>{`Door Access: ${user.access}`}</p>
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
        <ul>{this.renderUsersList()}</ul>
      </div>
    )
  }
}

const mapStateToProps = ({
  users: { usersList },
  errors: { deleteErrorMsg }
}) => ({ usersList, deleteErrorMsg })

export default connect(mapStateToProps, { fetchUsers, deleteUser })(UsersList)
