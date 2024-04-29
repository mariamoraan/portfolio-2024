import { InjectionToken, container } from "tsyringe";

type Type<T> = new (...args: never[]) => T;

export function useResolve<T>(types: Type<T>[]): T[] {
  return types.map((x) => container.resolve(x as InjectionToken<T>));
}
