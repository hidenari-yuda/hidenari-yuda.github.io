import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
import makeStyles from "@mui/styles/makeStyles";
import Grid from "@mui/material/Grid";

const styles = {
  grid: {
    position: "relative",
    width: "100%",
    minHeight: "1px",
    paddingRight: "15px",
    paddingLeft: "15px",
    /* flexBasis: "auto" */
  },
};

const useStyles = makeStyles(styles as Parameters<typeof makeStyles>[0]);

export default function GridItem(props: { [x: string]: any }) {
  const { children, className, ...rest } = props;
  const classes = useStyles();
  return (
    <Grid item {...rest} className={classes.grid + " " + className}>
      {children}
    </Grid>
  );
}

GridItem.defaultProps = {
  className: "",
};

GridItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
