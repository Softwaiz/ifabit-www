import { getFileSource } from "@/core/utils";
import { notFound } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
    let url = new URL(request.url || "");
    let fileName = url.searchParams.get("file") as string;

    let sourceFile = await getFileSource(fileName);

    if (sourceFile) {
        return NextResponse.json({ url: sourceFile.url });
    }
    return notFound();
}