import React from "react";

import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";
import Button from "@material-ui/core/Button";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Link from "@material-ui/core/Link";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import useStyles from "../styles/FooterStyles";

function Footer() {
  const classes = useStyles();

  return (
    <AppBar position="absolute" color="primary" className={classes.footer}>
      <Toolbar className={classes.footerIcons}>
        <div>
          <Link
            href="https://github.com/officialYogesh"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
          >
            <IconButton
              aria-label="Github"
              aria-haspopup="true"
              color="inherit"
            >
              <GitHubIcon />
            </IconButton>
          </Link>
          <Link
            href="https://www.linkedin.com/in/yogeshpatil28/"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
          >
            <IconButton
              aria-label="LinkedIn"
              aria-haspopup="true"
              color="inherit"
            >
              <LinkedInIcon />
            </IconButton>
          </Link>
          <Link
            href="https://www.instagram.com/_yogi28_/"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
          >
            <IconButton
              aria-label="Github"
              aria-haspopup="true"
              color="inherit"
            >
              <InstagramIcon />
            </IconButton>
          </Link>
          <Link
            href="mailto:officialyogeshp@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
          >
            <IconButton
              aria-label="Github"
              aria-haspopup="true"
              color="inherit"
            >
              <EmailIcon />
            </IconButton>
          </Link>
        </div>
        <div>
          <Button
            href="https://github.com/covid19india/api"
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            color="secondary"
            disableElevation
            className={classes.button}
            endIcon={<OpenInNewIcon />}
          >
            API
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;
