import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";

const CustomTimelineItem = ({ content, hasConnector }) => {
  return (
    <TimelineItem sx={{ paddingLeft: 1.5 }}>
      <TimelineSeparator>
        <TimelineDot variant="outlined" color="primary" />
        {hasConnector && <TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent>{content}</TimelineContent>
    </TimelineItem>
  );
};

export default CustomTimelineItem;
