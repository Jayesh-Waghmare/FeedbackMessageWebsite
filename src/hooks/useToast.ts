import { toast } from "sonner";

export function useToast() {
  return {
    toast,
    success: (message: string, options = {}) =>
      toast.success(message, options),
    error: (message: string, options = {}) =>
      toast.error(message, options),
    info: (message: string, options = {}) =>
      toast.info(message, options),
    warning: (message: string, options = {}) =>
      toast.warning(message, options),
    custom: toast, // fallback for full customization
  };
}
