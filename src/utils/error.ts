// 사용자 정의 에러 클래스
export class CustomError extends Error {
  constructor(message: string, public code: number) {
    super(message);
    this.name = "CustomError";
  }
}

export class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

export class NetworkError extends Error {
  constructor(message: string, public statusCode: number) {
    super(message);
    this.name = "NetworkError";
  }
}

// 타입 가드 함수
export function isCustomError(error: unknown): error is CustomError {
  return error instanceof CustomError;
}

export function isValidationError(error: unknown): error is ValidationError {
  return error instanceof ValidationError;
}

export function isNetworkError(error: unknown): error is NetworkError {
  return error instanceof NetworkError;
}

// 공통 에러 핸들링 함수
export function handleError(error: unknown): string {
  if (isValidationError(error)) {
    return `Validation Error: ${error.message}`;
  }

  if (isNetworkError(error)) {
    return `Network Error: ${error.message} (Status: ${error.statusCode})`;
  }

  if (isCustomError(error)) {
    return `Custom Error: ${error.message} (Code: ${error.code})`;
  }

  if (error instanceof Error) {
    return error.message;
  }

  return "An unknown error occurred";
}
