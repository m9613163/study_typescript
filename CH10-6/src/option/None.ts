import { nullabe } from "./nullable"
import { IValuable } from "./IValuable"
import { IFunctor } from "./IFunctor"

export class None implements IValuable<nullabe>, IFunctor<nullabe> {
    getOrElse<T>(defaultValue: T | nullabe) {
        return defaultValue
    }
    map<U>(fn: (T) => U) {
        return new None
    }
}