import React, { Component } from "react"
import { connect } from "react-redux"
import { withStyles } from "material-ui/styles"
import List, { ListItem, ListItemText } from "material-ui/List"
import Divider from "material-ui/Divider"

import { fetchUsers } from "../../data/actions"

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper
  }
})

class UsersDetail extends Component {
  componentDidMount() {
    this.props.fetchUsers()
  }

  // Get the user list from server and list them with access details
  renderUsers() {
    const { users } = this.props
    if (!users) return <div>Loading...</div>

    return users.map((user, index) => (
      <div key={index}>
        <ListItem style={{ width: "50vw", marginRight: "10px" }}>
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

const mapStateToProps = ({ auth: { users } }) => ({ users })

const Users = connect(mapStateToProps, { fetchUsers })(UsersDetail)

export default withStyles(styles)(Users)
