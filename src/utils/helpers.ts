export const __prod__ = process.env.NODE_ENV === 'production';
export const getEnvPath = `.${process.env.NODE_ENV}.env`;
