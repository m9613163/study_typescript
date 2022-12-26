import * as R from 'ramda'
import { IPerson, makeRandomIPerson } from './model/person'

const getName = R.pipe(R.prop('name'), R.tap(name => console.log(name)))

const person: IPerson = makeRandomIPerson()
const originalName = getName(person)                // Genevieve McCoy (랜덤 생성된 이름)

const modifiedPerson = R.assoc('name', 'Albert Einstein')(person)
const modifiedName = getName(modifiedPerson)        // Albert Einstein (수정된 이름)