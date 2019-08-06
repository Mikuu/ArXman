import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Typography, Box } from '@material-ui/core';
import Link from "@material-ui/core/Link"

const useStyles = makeStyles(theme => ({
  box: {
    width: 296,
    height: theme.spacing(11),
    color: "white",
  },
  media: {
    height: 140,
  },
}));

export default function FlatCard() {
  const classes = useStyles()

  return (
    <Link component={"a"} href={"https://vcer.arxman.com"} underline={"none"}>
      <Box
          border={1}
          display={"flex"}
          borderColor={"white"}
          justifyContent={"center"}
          alignItems={"center"}
          className={classes.box}
      >
        <Typography gutterBottom variant="h5" component="h2">
          nothing
        </Typography>
      </Box>
    </Link>
  )
}
