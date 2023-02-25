import React, { useState } from "react";
import { IDeleteTelegramChannelContainer } from "./DeleteTelegramChannel.types";
import { useQueryClient } from "react-query";
import { deleteChannel } from "../../../../api/channel-controller/channel-controller";
import Spinner from "../../../../shared/ui/Spinner";
import DeleteTelegramChannel from "./DeleteTelegramChannel";

const DeleteTelegramChannelContainer: React.FC<
  IDeleteTelegramChannelContainer
> = ({ numSelected }) => {
  const query = useQueryClient();
  const [loading, setLoading] = useState<boolean>(false);

  const onDeleteChannel = () => {
    numSelected.forEach((id) => {
      setLoading(true);
      deleteChannel(id)
        .then((response) => {
          query.refetchQueries("getChannels");
          numSelected.length = 0;
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    });
  };

  if (loading) return <Spinner />;

  return (
    <DeleteTelegramChannel
      numSelected={numSelected}
      onDeleteChannel={onDeleteChannel}
    />
  );
};

export default DeleteTelegramChannelContainer;
