import { Success, Failure } from "../classes/Validation";

export const checkLangth = (o: {password?: string}, minLength: number = 6) => {
    const {password} = o
    return (!password || password.length < minLength) ?
        new Failure(['Password must have more then 6 characters']): new Success(o)
}