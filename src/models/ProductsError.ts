import { ProductsErrorData } from '../types/interfaces';

class ProductsError extends Error {
  data: string;
  error: string;
  originalStatus: string;
  status: string;
  constructor({
    data = '',
    error = '',
    originalStatus = '',
    status = '',
    ...rest
  }: ProductsErrorData) {
    super(rest.message);
    this.data = data;
    this.error = error;
    this.originalStatus = originalStatus;
    this.status = status;
  }
}

export default ProductsError;
