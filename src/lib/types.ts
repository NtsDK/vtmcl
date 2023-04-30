export type Merge<T, U> = Pick<T & U, keyof (T & U)>;
