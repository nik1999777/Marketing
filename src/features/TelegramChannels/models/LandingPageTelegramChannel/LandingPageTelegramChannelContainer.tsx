import React, { ChangeEvent, useEffect, useState } from "react";
import { ILandingPageTelegramChannelContainer } from "./ILandingPageTelegramChannel.types";
import LandingPageTelegramChannel from "./LandingPageTelegramChannel";
import { useUpdateChannel } from "../../../../hooks/channel/useUpdateChannel";
import { useQueryClient } from "react-query";
import { useDebounce } from "use-debounce";
import { Typography } from "@mui/material";
import { SubmitHandler } from "react-hook-form";
import { ChannelDto } from "../../../../api/model";
import { shorteningUrl } from "../../../../api/channel-controller/channel-controller";
import { checkQuestionMark } from "../../utils/checkQuestionMark";
import { replaceSpaceAndTranslateEnglish } from "../../utils/replaceSpaceAndTranslateEnglish";
import Spinner from "../../../../shared/ui/Spinner";

const LandingPageTelegramChannelContainer: React.FC<
  ILandingPageTelegramChannelContainer
> = (props) => {
  const { channel, handleClose, setValue, handleSubmit, open, control } = props;
  const { estimated, utmUrl, link, participantsCount, category } = channel;

  const { mutateAsync, isLoading } = useUpdateChannel();
  const query = useQueryClient();
  const [valueUtmUrl, setValueUtmUrl] = useState<string>("");
  const [debouncedValue] = useDebounce<string>(valueUtmUrl, 500);

  let recommendations: JSX.Element;
  if (estimated === 1) {
    recommendations = (
      <Typography variant="h6" component="h3">
        Не рекомендуется
      </Typography>
    );
  } else if (estimated === 2 || estimated === 3) {
    recommendations = (
      <Typography variant="h6" component="h3">
        Стоит подумать
      </Typography>
    );
  } else if (estimated === 4 || estimated === 5) {
    recommendations = (
      <Typography variant="h6" component="h3">
        Стоит попробовать
      </Typography>
    );
  }

  const onStart: SubmitHandler<ChannelDto> = (data) => {
    mutateAsync({ data }).then(() => {
      query.refetchQueries("getChannels");
    });
    handleClose();
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValueUtmUrl(e.target.value);
  };

  useEffect(() => {
    if (debouncedValue)
      shorteningUrl({ url: debouncedValue }).then((response) => {
        setValue(
          "utmUrl",
          `${checkQuestionMark(
            debouncedValue
          )}utm_source=tg&utm_medium=seed&utm_campaign=${link?.substring(
            1
          )}&utm_content=${replaceSpaceAndTranslateEnglish(
            category?.name!
          )}&utm_term=${participantsCount}`
        );
        setValue("shortUrl", response);
      });
  }, [debouncedValue]);

  const handleClickPlacement = () => {
    setValue("solution", "PLACEMENT");
  };

  const handleClickRejection = () => {
    setValue("solution", "REJECTION");
  };

  if (isLoading) return <Spinner />;

  return (
    <LandingPageTelegramChannel
      handleSubmit={handleSubmit}
      open={open}
      onStart={onStart}
      recommendations={recommendations!}
      estimated={estimated!}
      handleChange={handleChange}
      control={control}
      handleClickPlacement={handleClickPlacement}
      handleClickRejection={handleClickRejection}
    />
  );
};

export default LandingPageTelegramChannelContainer;
