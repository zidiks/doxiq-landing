import { NextRequest } from "next/server";
import { TinaNodeBackend, LocalAuthProvider } from "tinacms/dist/tinacms-node";
import config from "../../../../tina/config";

const isLocal = process.env.TINA_PUBLIC_IS_LOCAL === "true";

const handler = TinaNodeBackend({
  authProvider: isLocal ? new LocalAuthProvider() : undefined,
  config
});

export const GET = (request: NextRequest) => handler.GET(request);
export const POST = (request: NextRequest) => handler.POST(request);
