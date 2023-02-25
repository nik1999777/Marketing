import { useAddChannel as _useAddChannel } from "../../api/channel-controller/channel-controller";

export const useAddChannel = () => {
  return _useAddChannel({
    mutation: {
      onError: (error) => {
        console.log(error);
      },
    },
  });
};
