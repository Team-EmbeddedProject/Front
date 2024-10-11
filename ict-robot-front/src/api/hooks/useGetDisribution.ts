import { useQuery } from "@tanstack/react-query";

import type { MapData } from "@/types";

import { BASE_URL, fetchInstance } from "../instance";

export type TrashDistributionResponse = {
  result: string;
  data: MapData[];
};

export type GetTrashDistributionParams = {
  robotId: string;
  startDate: string;
  endDate: string;
};

export const getDistributionPath = () => `${BASE_URL}/api/trash/distribution/`;

export const getTrashDistribution = async ({
  robotId,
  startDate,
  endDate,
}: GetTrashDistributionParams) => {
  const response = await fetchInstance.get<TrashDistributionResponse>(getDistributionPath(), {
    params: {
      robot_id: robotId,
      startDate,
      endDate,
    },
  });
  return response.data;
};

export const useGetDistribution = (params: GetTrashDistributionParams) => {
  const { robotId, startDate, endDate } = params;

  return useQuery({
    queryKey: ["trashDistribution", robotId, startDate, endDate],
    queryFn: () => getTrashDistribution(params),
    enabled: !!robotId && !!startDate && !!endDate,
  });
};
