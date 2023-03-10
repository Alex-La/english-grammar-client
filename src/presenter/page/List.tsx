import {capitalizeFirstLetter, usePendingPromise} from '#shared'
import React, {memo, useEffect} from 'react'
import {useStore} from 'zustand'

import {executeUseCase, getIrregularVerbsUseCase, irregularVerbsStore} from '~adapter'

export const List: React.FC = memo(() => {
  const irregularVerbs = useStore(irregularVerbsStore, state => state.irregularVerbs)
  const {isPending, setPromise} = usePendingPromise()

  useEffect(() => {
    setPromise(executeUseCase(getIrregularVerbsUseCase))
  }, [setPromise])

  return (
    <div className="overflow-x-auto">
      {isPending && <progress className="progress progress-primary w-full"></progress>}

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
          {irregularVerbs.map(({id, translation, v1, v2, v3}) => (
            <tr key={`irr_verb_${id}`}>
              <th>{id}</th>
              <td>{capitalizeFirstLetter(translation)}</td>
              <td>{capitalizeFirstLetter(v1)}</td>
              <td>{v2.split('/').map(capitalizeFirstLetter).join(' / ')}</td>
              <td>{capitalizeFirstLetter(v3)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
})

List.displayName = List.name
