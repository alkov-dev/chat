import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import io from "socket.io-client";

export const messages = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://test-chat-backend-hwads.ondigitalocean.app/api/",
  }),
  endpoints: (build) => ({
    getMessages: build.query({
      query: (params) => `messages?skip=${params.skip}&limit=${params.limit} `,
      async onCacheEntryAdded(
        arg,
        { updateCachedData, cacheDataLoaded, cacheEntryRemoved },
      ) {
        const socket = io("wss://test-chat-backend-hwads.ondigitalocean.app", {
          transports: ["websocket"],
          upgrade: false,
        });

        try {
          await cacheDataLoaded;
          socket.on("message", (mes) => {
            updateCachedData((data) => [
              ...data,
              { ...mes, lvl: Math.round(Math.random() * 10) },
            ]);
          });
        } catch {}
        await cacheEntryRemoved;
      },
    }),
    getOldMessages: build.query({
      query: (params) => `messages?skip=${params.skip}&limit=${params.limit} `,
    }),
  }),
});

export const { useGetMessagesQuery, useGetOldMessagesQuery } = messages;