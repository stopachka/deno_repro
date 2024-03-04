import { id, init, tx } from "npm:@instantdb/admin@0.8.1";

const db = init({ appId: "myAppId", adminToken: "adminToken" });

Deno.serve((_request: Request) => {
  return new Response(
    "Hello, world!" + db.toString() + id() + JSON.stringify(tx.users)
  );
});
