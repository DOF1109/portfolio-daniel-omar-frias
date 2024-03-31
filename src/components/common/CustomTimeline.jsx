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
import ProfileTimelineItem from "./ProfileTimelineItem";

const CustomTimeline = ({ title, icon }) => {
  return (
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          display: "none",
        },
        px: 3,
      }}
    >
      {/* Header */}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary">{icon}</TimelineDot>
          <TimelineConnector sx={{ height: "2rem" }} />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6">{title}</Typography>
        </TimelineContent>
      </TimelineItem>

      {/* Items */}
      <ProfileTimelineItem content="Frontend" hasConnector={true} />

      <ProfileTimelineItem content="MUI" hasConnector={true} />

      <ProfileTimelineItem content="React" hasConnector={false} />
    </Timeline>
  );
};

export default CustomTimeline;
