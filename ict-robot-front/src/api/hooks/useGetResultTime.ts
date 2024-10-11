import { useQuery } from "@tanstack/react-query";

import { BASE_URL, fetchInstance } from "../instance";

export type GraphPeriodResponse = {
  result: string;
  data: {
    start_time: Date;
    end_time: Date;
  };
};

export const getGraphPeriodPath = (robotId: string) => `${BASE_URL}/api/trash/period/${robotId}`;

export const getGraphPeriod = async (robotId: string) => {
  const response = await fetchInstance.get<GraphPeriodResponse>(getGraphPeriodPath(robotId));
  return response.data;
};

export const useGetGraphPeriod = (robotId: string) => {
  return useQuery({
    queryKey: ["graphTime", robotId],
    queryFn: () => getGraphPeriod(robotId),
    enabled: !!robotId,
  });
};
