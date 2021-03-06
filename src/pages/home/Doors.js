import React from "react"
import { withStyles } from "@material-ui/core/styles"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Divider from "@material-ui/core/Divider"

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper
  },
  list: {
    width: "50vw",
    marginRight: "10px"
  }
})

// List the doors & their details
const DoorsDetail = props => {
  const { classes } = props

  return (
    <div className={classes.root}>
      <List component="nav">
        <ListItem className={classes.list}>
          <i className="material-icons">store</i>
          <ListItemText primary="Front Door" />
          Employees need to have authorized access for the front door
        </ListItem>
        <Divider dark="true" />

        <ListItem className={classes.list}>
          <i className="material-icons">storage</i>
          <ListItemText primary="Storage Door" />
          Only the employees with proper authorization can access the storage
        </ListItem>
        <Divider dark="true" />
      </List>
    </div>
  )
}

export default withStyles(styles)(DoorsDetail)
