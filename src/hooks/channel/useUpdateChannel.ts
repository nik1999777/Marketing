import { useUpdateChannel as _useUpdateChannel } from "../../api/channel-controller/channel-controller";

export const useUpdateChannel = () => {
  return _useUpdateChannel({
    mutation: {
      onError: (error) => {
        console.log(error);
      },
    },
  });
};
