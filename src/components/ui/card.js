import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"
import Link from "@material-ui/core/Link"
import nothing from "../../images/nothing@0.3x.png"

const useStyles = makeStyles({
  card: {
    width: 296,
    height: 256,
  },
  media: {
    height: 140,
  },
})

export default function MediaCard() {
  const classes = useStyles()

  return (
    <Link component={"a"} href={"https://www.google.com"} underline={"none"}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={nothing}
            title="Application VCer"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Nothing
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              You see nothing here ...
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  )
}
