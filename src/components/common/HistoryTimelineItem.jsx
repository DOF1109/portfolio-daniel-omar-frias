import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import { Typography } from "@mui/material";

const HistoryTimelineItem = ({ title, date, description, hasConnector }) => {
  return (
    <TimelineItem sx={{ paddingLeft: 1.5, my: 1 }}>
      <TimelineSeparator>
        <TimelineDot variant="outlined" color="primary" sx={{ mb: 3 }} />
        {hasConnector && <TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent>
        <Typography>{title}</Typography>
        <Typography variant="caption">{date}</Typography>
        <Typography variant="body2" color="text.secondary" mt={1}>
          {description}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
};

export default HistoryTimelineItem;
