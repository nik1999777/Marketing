import { Box, styled } from "@mui/material";

export const StyledBox = styled(Box)<{ ellipsis?: boolean }>(
  ({ ellipsis }) => ({
    ...(ellipsis && {
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
    }),
  })
);
