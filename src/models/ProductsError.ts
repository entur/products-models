import { ProductsErrorData } from '../types/interfaces';
import { ErrorDetails } from '../types/types';

class ProductsError extends Error {
  error: string;
  errorDescription?: string;
  errorDetails: Array<ErrorDetails>;
  constructor({
    error = '',
    errorDescription = '',
    errorDetails = [],
    ...rest
  }: ProductsErrorData) {
    super(rest.message);
    this.error = error;
    this.errorDescription = errorDescription;
    this.errorDetails = errorDetails;
  }
}

export default ProductsError;
