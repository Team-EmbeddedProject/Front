import { useMutation } from "@tanstack/react-query";

import { BASE_URL, fetchInstance } from "../instance";

export type ConnectRobotResponse = {
  result: string;
  message?: string;
};

export const connectRobotPath = () => `${BASE_URL}/api/remote/connect`;

export const connectRobot = async (robotId: string) => {
  const response = await fetchInstance.post<ConnectRobotResponse>(connectRobotPath(), {
    robot_id: robotId,
  });
  return response.data;
};

export const useConnectRobot = () => {
  return useMutation({
    mutationFn: (robotId: string) => connectRobot(robotId),
  });
};
