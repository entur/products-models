import { ProductsErrorPendingDeprecationData } from '../types/interfaces';
import { ErrorDetails } from '../types/types';

/**
 * @deprecated
 */
//TODO: Remove ProductsErrorPendingDeprecation when the spring boot migration is done
class ProductsErrorPendingDeprecation extends Error {
  error: string;
  errorDescription?: string;
  errorDetails: Array<ErrorDetails>;
  constructor({
    error = '',
    errorDescription = '',
    errorDetails = [],
    ...rest
  }: ProductsErrorPendingDeprecationData) {
    super(rest.message);
    this.error = error;
    this.errorDescription = errorDescription;
    this.errorDetails = errorDetails;
  }
}

export default ProductsErrorPendingDeprecation;
