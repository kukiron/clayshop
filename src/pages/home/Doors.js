import React from "react"
import { withStyles } from "material-ui/styles"
import List, { ListItem, ListItemText } from "material-ui/List"
import Divider from "material-ui/Divider"

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper
  }
})

// List the doors & their details
const DoorsDetail = props => {
  const { classes } = props

  return (
    <div className={classes.root}>
      <List component="nav">
        <ListItem style={{ width: "50vw", marginRight: "10px" }}>
          <i className="material-icons">store</i>
          <ListItemText primary="Front Door" />
          Employees need to have authorized access for the front door
        </ListItem>
        <Divider dark="true" />

        <ListItem style={{ width: "50vw", marginRight: "10px" }}>
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
