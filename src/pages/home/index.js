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
    marginTop: "20px",
    width: "100%"
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
      <img src="public/images/clayshop_logo.png" alt="ClayShop logo" />
      <h1>Welcome to ClayShop</h1>
      <div className={classes.root}>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <div className={`${classes.heading} user--list-class`}>
              Shop Doors
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div className="user--list-class">
              <Doors />
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <div className={`${classes.heading} user--list-class`}>
              Users' List
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div className="user--list-class">
              <Users />
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    </div>
  )
}

export default withStyles(styles)(SimpleExpansionPanel)
