import { createPromiseClient } from "@connectrpc/connect";
import { createGrpcTransport } from "@connectrpc/connect-node";
import { ElizaService } from "./gen/eliza_connect";

const transport = createGrpcTransport({
  baseUrl: "https://demo.connectrpc.com",
  httpVersion: "2",
});
const client = createPromiseClient(ElizaService, transport);

client
  .say({})
  .then((r) => {
    console.log(r);
  })
  .catch((e) => {
    console.log(e);
  });
