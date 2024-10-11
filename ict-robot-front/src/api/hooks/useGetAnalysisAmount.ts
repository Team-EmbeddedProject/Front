import { useQuery } from "@tanstack/react-query";

import type { AnalysisAmountData } from "@/types";

import { BASE_URL, fetchInstance } from "../instance";

type AnalysisAmountResponse = {
  result: string;
  data: AnalysisAmountData[];
};

export const getAnalysisAmountPath = () => `${BASE_URL}/api/analyze/amount`;

export const getAnalysisAmount = async () => {
  const response = await fetchInstance.get<AnalysisAmountResponse>(getAnalysisAmountPath());
  return response.data;
};

export const useGetAnalysisAmount = () => {
  return useQuery({
    queryKey: [getAnalysisAmountPath()],
    queryFn: getAnalysisAmount,
  });
};
