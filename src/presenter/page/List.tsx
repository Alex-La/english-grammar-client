import React, {memo, useEffect} from 'react'
import {useStore} from 'zustand'

import {executeUseCase, getIrregularVerbsUseCase, irregularVerbsStore} from '~adapter'

export const List: React.FC = memo(() => {
  const irregularVerbs = useStore(irregularVerbsStore, state => state.irregularVerbs)

  console.log(irregularVerbs)

  useEffect(() => {
    executeUseCase(getIrregularVerbsUseCase)
  }, [])

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Translation</th>
            <th>V1</th>
            <th>V2</th>
            <th>V3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>Быть</td>
            <td>Be</td>
            <td>Was/Were</td>
            <td>Been</td>
          </tr>
          <tr>
            <th>2</th>
            <td>Начинать</td>
            <td>Begin</td>
            <td>Began</td>
            <td>Begun</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
})

List.displayName = List.name
