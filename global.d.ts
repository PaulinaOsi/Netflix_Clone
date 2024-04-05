import { PrismaClient } from "./node_modules/.prisma/client/default";

declare global {
    namespace globalThis {
        var prismadb: PrismaClient
    }
}