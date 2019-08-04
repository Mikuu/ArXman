import React from "react"
import PropTypes from "prop-types"
import Typography from "@material-ui/core/Typography"
import header from "../../images/header-1@0.5x.png"

const Layout = ({ children }) => {
  return (
    <div style={{ background: "black", height: "-webkit-fill-available" }}>
      <header style={{ height: "160px" }}>
        <img style={{ maxWidth: "-webkit-fill-available" }} src={header} alt={"header image"} />
      </header>
      <div>
        <Typography
          style={{ color: "aliceblue", marginBottom: "128px" }}
          variant="h2"
          align="center"
          gutterBottom
        >
          ArXman's home page
        </Typography>
        <main>{children}</main>
        <footer />
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
