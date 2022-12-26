import { ILocation } from "./ILocaion"
import { makeILocation } from "./makeILocaion"
import { makeRandomICoordinates } from "../coordinates"
import Chance from "chance"
const c = new Chance

export const makeRandomILocation = (): ILocation => 
    makeILocation(c.country(), c.city(), c.address(), makeRandomICoordinates())