"use client";
import { Skeleton, Stack } from "@mui/material";

export default function CardSkeleton() {
  return (
    <Stack spacing={1}>
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
      <Skeleton variant="rectangular" height={60} />
      <Skeleton variant="rounded" height={60} />
    </Stack>
  );
}
