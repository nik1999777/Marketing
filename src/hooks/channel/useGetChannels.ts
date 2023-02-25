import { useQuery } from "react-query";
import { ChannelPageSettings } from "../../api/model";
import { getChannels } from "../../api/channel-controller/channel-controller";

export const useGetChannels = (params: ChannelPageSettings) =>
  useQuery(["getChannels", params], () => getChannels(params));
