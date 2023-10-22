import type { IResult } from "../types";

export const handleCatchErrors = (error: unknown):IResult => {
  const result: IResult = { error: [''], isError: false, data: {} }
  const err = error as Error
  result.error = [err.message]
  result.isError = true

  return result
}
