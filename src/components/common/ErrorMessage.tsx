import React from "react";

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className="my-10 p-4 text-center text-red-700 bg-red-100 border border-red-300 rounded dark:bg-red-900 dark:text-red-100 dark:border-red-700">
      <p className="font-extrabold text-lg">Error</p>
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
