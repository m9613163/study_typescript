import fetch from "node-fetch"

export const fetchJokes = <T>() => new Promise<T>((resolve, reject) => {
    const jokeUrl = 'https://api.chucknorris.io/jokes/random'

    fetch(jokeUrl)
        .then(res => res.json())
        .then((fetchResult: unknown) => resolve(fetchResult as T))
        .catch((e: Error) => reject(e))
})