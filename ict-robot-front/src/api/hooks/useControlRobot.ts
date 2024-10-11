import { useMutation } from "@tanstack/react-query";

import { BASE_URL, fetchInstance } from "../instance";

export type ControlResponse = {
  result: string;
  message: string;
};

export const getControlPath = () => `${BASE_URL}/api/remote/control`;

export const ControlRobot = async (robotId: string, code: string) => {
  const response = await fetchInstance.post<ControlResponse>(getControlPath(), {
    robot_id: robotId,
    code: code,
  });
  return response.data;
};

export const useControlRobot = () => {
  return useMutation({
    mutationFn: (data: { robotId: string; code: string }) => ControlRobot(data.robotId, data.code),
    onError: (error) => {
      console.error("Error in control:", error);
    },
  });
};
