/**
 * Generated by orval v6.10.3 🍺
 * Do not edit manually.
 * OpenAPI definition
 * OpenAPI spec version: v0
 */
import { useQuery, useMutation } from "react-query";
import type {
  UseQueryOptions,
  UseMutationOptions,
  QueryFunction,
  MutationFunction,
  UseQueryResult,
  QueryKey,
} from "react-query";
import type {
  TradeDto,
  ValidListTradeFieldDto,
  TradeStepDto,
  ValidListTradeStepDto,
  TradePageDto,
  PageSettings,
  PageDto,
  TradeStepFieldDto,
  ValidListTradeStepFieldDto,
} from "../model";
import { axiosInstance } from "../../http/axiosInstance";

export const nextStep = (
  id: string,
  validListTradeFieldDto: ValidListTradeFieldDto
) => {
  return axiosInstance<TradeDto>({
    url: `/api/v1/crm/trade/${id}/next`,
    method: "put",
    headers: { "Content-Type": "application/json" },
    data: validListTradeFieldDto,
  });
};

export type NextStepMutationResult = NonNullable<
  Awaited<ReturnType<typeof nextStep>>
>;
export type NextStepMutationBody = ValidListTradeFieldDto;
export type NextStepMutationError = unknown;

export const useNextStep = <TError = unknown, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof nextStep>>,
    TError,
    { id: string; data: ValidListTradeFieldDto },
    TContext
  >;
}) => {
  const { mutation: mutationOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof nextStep>>,
    { id: string; data: ValidListTradeFieldDto }
  > = (props) => {
    const { id, data } = props ?? {};

    return nextStep(id, data);
  };

  return useMutation<
    Awaited<ReturnType<typeof nextStep>>,
    TError,
    { id: string; data: ValidListTradeFieldDto },
    TContext
  >(mutationFn, mutationOptions);
};
export const lastStep = (
  id: string,
  validListTradeFieldDto: ValidListTradeFieldDto
) => {
  return axiosInstance<TradeDto>({
    url: `/api/v1/crm/trade/${id}/last`,
    method: "put",
    headers: { "Content-Type": "application/json" },
    data: validListTradeFieldDto,
  });
};

export type LastStepMutationResult = NonNullable<
  Awaited<ReturnType<typeof lastStep>>
>;
export type LastStepMutationBody = ValidListTradeFieldDto;
export type LastStepMutationError = unknown;

export const useLastStep = <TError = unknown, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof lastStep>>,
    TError,
    { id: string; data: ValidListTradeFieldDto },
    TContext
  >;
}) => {
  const { mutation: mutationOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof lastStep>>,
    { id: string; data: ValidListTradeFieldDto }
  > = (props) => {
    const { id, data } = props ?? {};

    return lastStep(id, data);
  };

  return useMutation<
    Awaited<ReturnType<typeof lastStep>>,
    TError,
    { id: string; data: ValidListTradeFieldDto },
    TContext
  >(mutationFn, mutationOptions);
};
export const updateTradeStep = (from: string, to: string) => {
  return axiosInstance<void>({
    url: `/api/v1/crm/trade/move/${from}/${to}`,
    method: "put",
  });
};

export type UpdateTradeStepMutationResult = NonNullable<
  Awaited<ReturnType<typeof updateTradeStep>>
>;

export type UpdateTradeStepMutationError = unknown;

export const useUpdateTradeStep = <
  TError = unknown,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof updateTradeStep>>,
    TError,
    { from: string; to: string },
    TContext
  >;
}) => {
  const { mutation: mutationOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof updateTradeStep>>,
    { from: string; to: string }
  > = (props) => {
    const { from, to } = props ?? {};

    return updateTradeStep(from, to);
  };

  return useMutation<
    Awaited<ReturnType<typeof updateTradeStep>>,
    TError,
    { from: string; to: string },
    TContext
  >(mutationFn, mutationOptions);
};
export const createClientTrade = (id: string) => {
  return axiosInstance<TradeDto>({
    url: `/api/v1/crm/trade/${id}/create`,
    method: "post",
  });
};

export type CreateClientTradeMutationResult = NonNullable<
  Awaited<ReturnType<typeof createClientTrade>>
>;

export type CreateClientTradeMutationError = unknown;

export const useCreateClientTrade = <
  TError = unknown,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof createClientTrade>>,
    TError,
    { id: string },
    TContext
  >;
}) => {
  const { mutation: mutationOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof createClientTrade>>,
    { id: string }
  > = (props) => {
    const { id } = props ?? {};

    return createClientTrade(id);
  };

  return useMutation<
    Awaited<ReturnType<typeof createClientTrade>>,
    TError,
    { id: string },
    TContext
  >(mutationFn, mutationOptions);
};
export const getStep = (signal?: AbortSignal) => {
  return axiosInstance<TradeStepDto[]>({
    url: `/api/v1/crm/trade/steps`,
    method: "get",
    signal,
  });
};

export const getGetStepQueryKey = () => [`/api/v1/crm/trade/steps`];

export type GetStepQueryResult = NonNullable<
  Awaited<ReturnType<typeof getStep>>
>;
export type GetStepQueryError = unknown;

export const useGetStep = <
  TData = Awaited<ReturnType<typeof getStep>>,
  TError = unknown
>(options?: {
  query?: UseQueryOptions<Awaited<ReturnType<typeof getStep>>, TError, TData>;
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const { query: queryOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetStepQueryKey();

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getStep>>> = ({
    signal,
  }) => getStep(signal);

  const query = useQuery<Awaited<ReturnType<typeof getStep>>, TError, TData>(
    queryKey,
    queryFn,
    queryOptions
  ) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryKey;

  return query;
};

export const updateSteps = (validListTradeStepDto: ValidListTradeStepDto) => {
  return axiosInstance<TradeStepDto[]>({
    url: `/api/v1/crm/trade/steps`,
    method: "post",
    headers: { "Content-Type": "application/json" },
    data: validListTradeStepDto,
  });
};

export type UpdateStepsMutationResult = NonNullable<
  Awaited<ReturnType<typeof updateSteps>>
>;
export type UpdateStepsMutationBody = ValidListTradeStepDto;
export type UpdateStepsMutationError = unknown;

export const useUpdateSteps = <TError = unknown, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof updateSteps>>,
    TError,
    { data: ValidListTradeStepDto },
    TContext
  >;
}) => {
  const { mutation: mutationOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof updateSteps>>,
    { data: ValidListTradeStepDto }
  > = (props) => {
    const { data } = props ?? {};

    return updateSteps(data);
  };

  return useMutation<
    Awaited<ReturnType<typeof updateSteps>>,
    TError,
    { data: ValidListTradeStepDto },
    TContext
  >(mutationFn, mutationOptions);
};
export const getClientTrades = (id: string, pageSettings: PageSettings) => {
  return axiosInstance<TradePageDto>({
    url: `/api/v1/crm/trade/steps/client/${id}/trades`,
    method: "post",
    headers: { "Content-Type": "application/json" },
    data: pageSettings,
  });
};

export type GetClientTradesMutationResult = NonNullable<
  Awaited<ReturnType<typeof getClientTrades>>
>;
export type GetClientTradesMutationBody = PageSettings;
export type GetClientTradesMutationError = unknown;

export const useGetClientTrades = <
  TError = unknown,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof getClientTrades>>,
    TError,
    { id: string; data: PageSettings },
    TContext
  >;
}) => {
  const { mutation: mutationOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof getClientTrades>>,
    { id: string; data: PageSettings }
  > = (props) => {
    const { id, data } = props ?? {};

    return getClientTrades(id, data);
  };

  return useMutation<
    Awaited<ReturnType<typeof getClientTrades>>,
    TError,
    { id: string; data: PageSettings },
    TContext
  >(mutationFn, mutationOptions);
};
export const getStepTrades = (id: string, pageSettings: PageSettings) => {
  return axiosInstance<PageDto>({
    url: `/api/v1/crm/trade/step/${id}/trades`,
    method: "post",
    headers: { "Content-Type": "application/json" },
    data: pageSettings,
  });
};

export type GetStepTradesMutationResult = NonNullable<
  Awaited<ReturnType<typeof getStepTrades>>
>;
export type GetStepTradesMutationBody = PageSettings;
export type GetStepTradesMutationError = unknown;

export const useGetStepTrades = <
  TError = unknown,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof getStepTrades>>,
    TError,
    { id: string; data: PageSettings },
    TContext
  >;
}) => {
  const { mutation: mutationOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof getStepTrades>>,
    { id: string; data: PageSettings }
  > = (props) => {
    const { id, data } = props ?? {};

    return getStepTrades(id, data);
  };

  return useMutation<
    Awaited<ReturnType<typeof getStepTrades>>,
    TError,
    { id: string; data: PageSettings },
    TContext
  >(mutationFn, mutationOptions);
};
export const getStepFields = (id: string, signal?: AbortSignal) => {
  return axiosInstance<TradeStepFieldDto[]>({
    url: `/api/v1/crm/trade/step/${id}/fields`,
    method: "get",
    signal,
  });
};

export const getGetStepFieldsQueryKey = (id: string) => [
  `/api/v1/crm/trade/step/${id}/fields`,
];

export type GetStepFieldsQueryResult = NonNullable<
  Awaited<ReturnType<typeof getStepFields>>
>;
export type GetStepFieldsQueryError = unknown;

export const useGetStepFields = <
  TData = Awaited<ReturnType<typeof getStepFields>>,
  TError = unknown
>(
  id: string,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof getStepFields>>,
      TError,
      TData
    >;
  }
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const { query: queryOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetStepFieldsQueryKey(id);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getStepFields>>> = ({
    signal,
  }) => getStepFields(id, signal);

  const query = useQuery<
    Awaited<ReturnType<typeof getStepFields>>,
    TError,
    TData
  >(queryKey, queryFn, { enabled: !!id, ...queryOptions }) as UseQueryResult<
    TData,
    TError
  > & { queryKey: QueryKey };

  query.queryKey = queryKey;

  return query;
};

export const updateStepFields = (
  id: string,
  validListTradeStepFieldDto: ValidListTradeStepFieldDto
) => {
  return axiosInstance<TradeStepFieldDto[]>({
    url: `/api/v1/crm/trade/step/${id}/fields`,
    method: "post",
    headers: { "Content-Type": "application/json" },
    data: validListTradeStepFieldDto,
  });
};

export type UpdateStepFieldsMutationResult = NonNullable<
  Awaited<ReturnType<typeof updateStepFields>>
>;
export type UpdateStepFieldsMutationBody = ValidListTradeStepFieldDto;
export type UpdateStepFieldsMutationError = unknown;

export const useUpdateStepFields = <
  TError = unknown,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof updateStepFields>>,
    TError,
    { id: string; data: ValidListTradeStepFieldDto },
    TContext
  >;
}) => {
  const { mutation: mutationOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof updateStepFields>>,
    { id: string; data: ValidListTradeStepFieldDto }
  > = (props) => {
    const { id, data } = props ?? {};

    return updateStepFields(id, data);
  };

  return useMutation<
    Awaited<ReturnType<typeof updateStepFields>>,
    TError,
    { id: string; data: ValidListTradeStepFieldDto },
    TContext
  >(mutationFn, mutationOptions);
};
