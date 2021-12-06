import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { get } from "lodash";
import React from "react";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#ffc857",
    backgroundImage: "linear-gradient(316deg, #ffc857 0%, #3e2f5b 74%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
  nowShowing: {
    color: "#d09d1f",
  },
});

const JUST_TICKET_URL = `https://www.justickets.in/chennai/evp-cinemas-chembarambakkam`;

export const openJustTicket = (movieItem = null) => {
  if (movieItem) {
    const URL = get(movieItem, "ticketURL") || JUST_TICKET_URL;
    if (URL) window.open(URL, "_blank", 'rel="canonical"');
  } else {
    window.open(JUST_TICKET_URL, "_blank", 'rel="canonical"');
  }
};

const BookNow = () => {
  const classess = useStyles();
  return (
    <Grid container direction="row" spacing={10} alignItems="center">
      <Grid item md={12}>
        <div
          style={{
            marginLeft: "2vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Typography
            variant="h4"
            component="h4"
            className={classess.nowShowing}
            alignItems="center"
          >
            Now Showing
          </Typography>
        </div>
      </Grid>
      {/* <Grid item xs={5} md={3} lg={2}>
        <Button
          onClick={}
          align="right"
          variant="contained"
          size="large"
          color="success"
          className={classess.root}

        >
          Book Now
        </Button>
      </Grid> */}
    </Grid>
  );
};

export default BookNow;
