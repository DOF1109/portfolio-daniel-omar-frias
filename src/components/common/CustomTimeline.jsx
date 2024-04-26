import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
  timelineItemClasses,
} from "@mui/lab";
import { Typography } from "@mui/material";

const CustomTimeline = ({ title, icon, children }) => {
  return (
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          display: "none",
        },
        px: 2,
      }}
    >
      {/* Header */}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary">{icon}</TimelineDot>
          <TimelineConnector sx={{ height: "2rem" }} />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" mt={1}>{title}</Typography>
        </TimelineContent>
      </TimelineItem>

      {/* Items */}
      {children}
    </Timeline>
  );
};

export default CustomTimeline;
