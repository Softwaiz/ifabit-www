import { getFileSource } from "@/core/utils";
import { NextApiRequest } from "next";
import { notFound } from "next/navigation";
import { NextResponse } from "next/server";

export const GET = async (request: NextApiRequest) => {
    let url = new URL(request.url || "");
    let fileName = url.searchParams.get("file") as string;

    let sourceFile = await getFileSource(fileName);

    if (sourceFile) {
        return NextResponse.json({ url: sourceFile.url });
    }
    return notFound();
}