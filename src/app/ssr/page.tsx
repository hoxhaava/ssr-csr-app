
import { GetServerSideProps } from "next";
import { inferProcedureInput } from "@trpc/server";
import { createTRPCClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "~/server/api/root";
import superjson from 'superjson';
import { Suspense, use } from "react";

import { LatestPost } from "../_components/post";
import { api } from "~/trpc/react";

type Post = { id: number; name: string };
type SSRPageProps = {
    latestPost: Post | null;
}

const trpcClient = createTRPCClient<AppRouter>({
    links: [
        httpBatchLink({
            url: `/trpc`,
            transformer: superjson,
        }),
    ],
});
const getServerSideProps: GetServerSideProps= async () => {
    try {
        //Fetch data using tRPC client
        const latestPost = await trpcClient.post.getLatest.query();
        return { props: { latestPost } };
    } catch (error) {
        console.error("Failed to fetch the latest post:", error);
        return { props: { latestPost: null } }
    }
}
const SSRPage: React.FC<SSRPageProps> = ({ latestPost }) => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-10">SSR Page</h1>
            <Suspense fallback={<div>Loading...</div>}>
                <LatestPost initialData={latestPost} />
            </Suspense>
        </div>
    );
};

export default SSRPage;
