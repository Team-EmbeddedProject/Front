import { useQuery } from "@tanstack/react-query";

import type { RobotLog } from "@/types";

import { BASE_URL, fetchInstance } from "../instance";

export type RobotLogResponse = {
  result: string;
  data: RobotLog[];
};

export const getRobotLogPath = (robotId: string) => `${BASE_URL}/api/log/${robotId}`;

export const getRobotLog = async (robotId: string) => {
  const response = await fetchInstance.get<RobotLogResponse>(getRobotLogPath(robotId));
  return response.data;
};

export const useGetRobotLog = (robotId: string) => {
  return useQuery({
    queryKey: ["robotLog", robotId],
    queryFn: () => getRobotLog(robotId),
    enabled: !!robotId,
  });
};
