import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"

import MediaCard from "./card"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  item: {
    maxWidth: "fit-content",
  },
}))

export default function ApplicationBoard() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}
      >
        <Grid className={classes.item} item xs>
            <MediaCard />
        </Grid>
      </Grid>
    </div>
  )
}
