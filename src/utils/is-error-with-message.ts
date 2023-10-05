import { ErrorWithMEssage } from "../types"

export const isErrorWithMessage = (
  error: unknown
): error is ErrorWithMEssage => {
  return (
    typeof error === "object" &&
    error !== null &&
    "data" in error &&
    typeof (error as Record<string, unknown>).data === "object"
  )
}
