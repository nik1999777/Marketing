import { defineConfig } from "orval";

export default defineConfig({
  swagger: {
    output: {
      mode: "tags-split",
      target: "src/api/endpoints.ts",
      schemas: "src/api/model",
      client: "react-query",
      override: {
        mutator: {
          path: "./src/http/axiosInstance.ts",
          name: "axiosInstance",
        },
      },
    },
    input: {
      target: "./swagger.yaml",
    },
  },
});
