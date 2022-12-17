import { ResultType } from "./ResultType"

export const doSomething = (): ResultType => {
    try {
        throw new Error('Some error ouccurs...')
    } catch(e) {
        return [false, e.message]
    }
}