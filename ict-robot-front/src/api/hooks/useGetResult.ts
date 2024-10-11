import { useQuery } from "@tanstack/react-query";

import type { TrashResult } from "@/types";

import { BASE_URL, fetchInstance } from "../instance";

export type TrashResultResponse = {
  result: string;
  data: TrashResult[];
};

export type GetTrashResultParams = {
  robotId: string;
  startDate: string;
  endDate: string;
};

export const getTrashResultPath = () => `${BASE_URL}/api/trash/graph/`;

export const getTrashResult = async ({ robotId, startDate, endDate }: GetTrashResultParams) => {
  const response = await fetchInstance.get<TrashResultResponse>(getTrashResultPath(), {
    params: {
      robot_id: robotId,
      startDate,
      endDate,
    },
  });
  return response.data;
};

export const useGetTrashResult = (params: GetTrashResultParams) => {
  const { robotId, startDate, endDate } = params;

  return useQuery({
    queryKey: ["trashResult", robotId, startDate, endDate],
    queryFn: () => getTrashResult(params),
    enabled: !!robotId && !!startDate && !!endDate,
  });
};
