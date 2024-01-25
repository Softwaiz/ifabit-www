import { FileUtils } from "@/utils/file";
import { useEffect, useState } from "react";

export function useFileAsBuffer(file: File) {
  const [loading, setLoading] = useState(true);
  const [buffer, setBuffer] = useState<ArrayBuffer>();

  useEffect(() => {
    let reader = new FileReader();
    reader.onloadstart = (ev) => {
      setLoading(true);
    };
    reader.onloadend = (progress) => {
      setLoading(false);
      setBuffer(reader.result as ArrayBuffer);
    };
    reader.readAsArrayBuffer(file);
  }, [file]);

  return {
    loading,
    buffer,
  };
}

export function useFileAsBinaryString(file: File) {
  const [loading, setLoading] = useState(true);
  const [buffer, setBuffer] = useState<string>();

  useEffect(() => {
    let reader = new FileReader();
    reader.onloadstart = (ev) => {
      setLoading(true);
    };
    reader.onloadend = (progress) => {
      setLoading(false);
      setBuffer(reader.result as string);
    };
    reader.readAsBinaryString(file);
  }, [file]);

  return {
    loading,
    bin: buffer,
  };
}

export function useFileAsText(file: File, encoding: string = "utf-8") {
  const [loading, setLoading] = useState(true);
  const [buffer, setBuffer] = useState<string>();

  useEffect(() => {
    let reader = new FileReader();
    reader.onloadstart = (ev) => {
      setLoading(true);
    };
    reader.onloadend = (progress) => {
      setLoading(false);
      setBuffer(reader.result as string);
    };
    reader.readAsText(file, encoding);
  }, [file]);

  return {
    loading,
    text: buffer,
  };
}

export function useFileAsDataUrl(file: File | undefined) {
  const [loading, setLoading] = useState(true);
  const [buffer, setBuffer] = useState<string>();

  useEffect(() => {
    if(file) {
      let reader = new FileReader();
      reader.onloadstart = (ev) => {
        setLoading(true);
      };
      let url = "";
      reader.onloadend = (progress) => {
        setLoading(false);
        setBuffer(reader.result as string);
        url = reader.result as string;
      };
      reader.readAsDataURL(file);
  
      return () => {
        URL.revokeObjectURL(url);
      };
    }
  }, [file]);

  return {
    loading,
    url: buffer,
  };
}

interface FileExtract<T = string> {
  file: File;
  data: T;
}

export function useFilesAsBinaryString(files: File[]) {
  const [loading, setLoading] = useState(true);
  const [buffers, setBuffers] = useState<FileExtract[]>([]);

  useEffect(() => {
    setLoading(true);
    Promise.all(
      files.map((f) => {
        return FileUtils.readAsBinaryString(f).then((bin) => {
          return {
            file: f,
            data: bin,
          };
        });
      })
    ).then((datas) => {
      setBuffers(datas);
    });
  }, [files]);

  return {
    loading,
    files: buffers,
  };
}

export function useFilesAsBuffer(files: File[]) {
  const [loading, setLoading] = useState(true);
  const [buffers, setBuffers] = useState<FileExtract<ArrayBuffer>[]>([]);

  useEffect(() => {
    setLoading(true);
    Promise.all(
      files.map((f) => {
        return FileUtils.readAsArrayBuffer(f).then((bin) => {
          return {
            file: f,
            data: bin,
          };
        });
      })
    ).then((datas) => {
      setBuffers(datas);
    });
  }, [files]);

  return {
    loading,
    files: buffers,
  };
}
