import { useQuery } from "@tanstack/react-query";

import type { AnalysisChangeData } from "@/types";

import { BASE_URL, fetchInstance } from "../instance";

type AnalysisChangeResponse = {
  result: string;
  data: AnalysisChangeData[];
};

export const getAnalysisChangePath = () => `${BASE_URL}/api/analyze/change`;

export const getAnalysisChange = async () => {
  const response = await fetchInstance.get<AnalysisChangeResponse>(getAnalysisChangePath());
  return response.data;
};

export const useGetAnalysisChange = () => {
  return useQuery({
    queryKey: [getAnalysisChangePath()],
    queryFn: getAnalysisChange,
  });
};
