import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import { Link, Typography } from "@mui/material";

const ProfileTimelineItem = ({ title, text, url, hasConnector }) => {
  return (
    <TimelineItem sx={{ paddingLeft: 1.5 }}>
      <TimelineSeparator>
        <TimelineDot variant="outlined" color="primary" />
        {hasConnector && <TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent>
        <Typography>{title}: </Typography>
        <Typography color="text.secondary">
          <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
            color="text.secondary"
            sx={{
              '&:hover': {
                color: 'primary.main',
              }
            }}
          >
            {text}
          </Link>
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
};

export default ProfileTimelineItem;
