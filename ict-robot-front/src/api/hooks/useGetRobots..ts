import { useQuery } from "@tanstack/react-query";

import type { RobotData } from "@/types";

import { BASE_URL, fetchInstance } from "../instance";

type RobotResponseData = {
  result: string;
  data: RobotData[];
};

export const getRobotsPath = () => `${BASE_URL}/api/robots`;

export const getRobots = async () => {
  const response = await fetchInstance.get<RobotResponseData>(getRobotsPath());
  return response.data;
};

export const useGetRobots = () => {
  return useQuery({
    queryKey: [getRobotsPath()],
    queryFn: getRobots,
  });
};
