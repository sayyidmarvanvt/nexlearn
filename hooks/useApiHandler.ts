import { useState } from "react";
import api from "@/lib/axiosClient";

interface ApiOptions {
  url: string;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  data?: any;
  headers?: Record<string, string>;
  onSuccess?: (data: any) => void;
  onError?: (message: string) => void;
}

export function useApiHandler() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const clearError = () => setError(null);
  const sendRequest = async ({
    url,
    method = "POST",
    data,
    headers,
    onSuccess,
    onError,
  }: ApiOptions) => {
    setLoading(true);
    setError(null);
    try {
      const res =
        method === "GET"
          ? await api.get(url, { headers })
          : await api({ url, method, data, headers });

      const result = res.data;
      console.log("✅ API response:", result);

      if (result.success) {
        onSuccess?.(result);
      } else {
        const msg = result.message || "Request failed";
        setError(msg);
        onError?.(msg);
      }
    } catch (err: any) {
      const msg =
        err.response?.data?.message ||
        err.response?.data?.detail ||
        "Something went wrong";
      setError(msg);
      onError?.(msg);
      console.error("❌ API Error:", msg);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, sendRequest ,clearError};
}
