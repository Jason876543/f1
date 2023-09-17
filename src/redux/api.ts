import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  endpoints: (builder) => ({
    getDriversRankings: builder.query<DriverRankingsResponse, string>({
      query: (season) => `rankings/drivers?season=${season}`,
    }),
    getTeamsRankings: builder.query<TeamRankingsResponse, string>({
      query: (season) => `rankings/teams?season=${season}`,
    }),
    getSeasons: builder.query<Array<number>, void>({
      query: () => 'seasons',
    })
  }),
});

export const {
  useGetDriversRankingsQuery,
  useGetTeamsRankingsQuery,
  useGetSeasonsQuery,
} = api;