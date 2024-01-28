import { useCallback } from "react";
import { backend } from "@src/api";

export function useAssetManager() {

    const getAssetUploadUrl = useCallback((fileName: string) => {
        return backend.service("assets").create({name: fileName}) as Promise<{ url: string, file: string }>;
    }, []);

    const uploadFile = useCallback(async (file: File, name: string) => {
        let uploadUrl = await getAssetUploadUrl(name);
        await fetch(uploadUrl.url,{
            method: "PUT",
            body: file
        })
        return uploadUrl.file;
    }, [getAssetUploadUrl]);

    const getAssetDownloadUrl = useCallback((fileName: string) => {
        return backend.service("assets").find({
            query: {
                file: fileName
            }
        }) as Promise<string>;
    }, []);

    return {
        getAssetUploadUrl,
        getAssetDownloadUrl,
        uploadFile
    }
}