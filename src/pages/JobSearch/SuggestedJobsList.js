/**
 *  Lucas Emanuel 2023
 *  https://github.com/LucasDevSystem
 */
import { Grid, Paper, MobileStepper } from "@mui/material";
import SuggestedOpportunityCard from "./ SuggestedOpportunitiesCard";

const cardStyle = {
  height: 200,
  width: 250,
  backgroundColor: (theme) =>
    theme.palette.mode === "dark" ? "#79d5e8" : "#cceffe",
};

const SuggestedJobsList = ({ jobs = [], onClick }) => {
  return (
    <div>
      <Grid sx={{ flexGrow: 1 }} marginTop={2} container spacing={2}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={2}>
            {jobs.map((job, index) => (
              <Grid key={job?.id || index} item>
                <Paper sx={cardStyle}>
                  <SuggestedOpportunityCard
                    {...job}
                    onClick={() => onClick(job)}
                  />
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      <MobileStepper
        variant="dots"
        steps={jobs.length}
        position="static"
        activeStep={0}
        sx={{ flexGrow: 1, justifyContent: "center", padding: 2 }}
      />
    </div>
  );
};

export default SuggestedJobsList;
