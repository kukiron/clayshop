import React from "react"
import { withStyles } from "material-ui/styles"
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from "material-ui/ExpansionPanel"
import ExpandMoreIcon from "material-ui-icons/ExpandMore"

import Users from "./Users"
import Doors from "./Doors"

const styles = theme => ({
  root: {
    margin: "20px auto",
    width: "75%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
})

// Render the doors & user detail lists in an expansion panel
const SimpleExpansionPanel = props => {
  const { classes } = props
  return (
    <div className="home">
      <img src="assets/images/clayshop_logo.png" alt="ClayShop logo" />
      <h1>Welcome to ClayShop</h1>
      <div className={classes.root}>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <div className={`${classes.heading} users-list`}>Shop Doors</div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div className="users-list">
              <Doors />
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <div className={`${classes.heading} users-list`}>Users' List</div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div className="users-list">
              <Users />
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    </div>
  )
}

export default withStyles(styles)(SimpleExpansionPanel)
