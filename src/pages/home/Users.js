import React, { Component } from "react"
import { connect } from "react-redux"
import { withStyles } from "@material-ui/core/styles"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Divider from "@material-ui/core/Divider"

import { fetchUsers } from "../../data/actions"

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper
  },
  list: {
    width: "50vw",
    marginRight: "10px"
  }
})

class UsersDetail extends Component {
  componentDidMount() {
    this.props.fetchUsers()
  }

  // Get the users' list from server and list them with access details
  renderUsers() {
    const { usersList, classes } = this.props
    if (!usersList) return <div>Loading...</div>

    return usersList.map((user, index) => (
      <div key={index}>
        <ListItem className={classes.list}>
          <i className="material-icons">person_pin</i>
          <ListItemText
            primary={user.fullname}
            secondary={`Door Access: ${user.access}`}
          />
          {user.email}
        </ListItem>
        <Divider dark="true" />
      </div>
    ))
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <List component="nav">{this.renderUsers()}</List>
      </div>
    )
  }
}

const mapStateToProps = ({ users: { usersList } }) => ({ usersList })

const Users = connect(
  mapStateToProps,
  { fetchUsers }
)(UsersDetail)

export default withStyles(styles)(Users)
