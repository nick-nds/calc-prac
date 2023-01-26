"use client"

import { useState } from 'react'
import { UserInput } from './components/UserInput'
import { Lists } from './components/Lists'
import { UserInterface } from './components/UserInterface'

export default function Home() {
  const [lists, setLists] = useState({
    l1: [],
    l2: [],
  })
  return <>
    <UserInput lists={lists} setLists={setLists}/>
    <Lists lists={lists} setLists={setLists}/>
    <UserInterface lists={lists} />
  </>
}
