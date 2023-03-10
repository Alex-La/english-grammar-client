import React, {FormEvent, memo, useCallback, useEffect, useRef, useState} from 'react'

import {capitalizeFirstLetter, usePendingPromise} from '#shared'
import {IrregularVerb, RandomVerb} from '~core'
import {executeUseCase, getRandomIrregularVerbUseCase, giveAnswerOnIrregularVerbUseCase, showToast} from '~adapter'

export const Test: React.FC = memo(() => {
  const {isPending, setPromise} = usePendingPromise()
  const inputRef = useRef<HTMLInputElement>(null)

  const [randomVerb, setRandomVerb] = useState<RandomVerb>({id: NaN as IrregularVerb['id'], target: 'v1', variant: ''})
  const [answer, setAnswer] = useState<string>('')
  const [wrongAnsweredVerb, setWrongAnsweredVerb] = useState<IrregularVerb>()

  const getRandomVerb = useCallback(async () => {
    const verb = await setPromise(executeUseCase(getRandomIrregularVerbUseCase))
    if (verb) setRandomVerb(verb)
  }, [setPromise])

  useEffect(() => {
    getRandomVerb()
  }, [getRandomVerb])

  const onSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      setWrongAnsweredVerb(undefined)

      const result = await setPromise(
        executeUseCase(giveAnswerOnIrregularVerbUseCase, randomVerb.id, randomVerb.target, answer),
      )

      if (result) {
        if (typeof result === 'boolean') {
          showToast('Cool!', 'success')
          getRandomVerb()
          setAnswer('')
        } else {
          setWrongAnsweredVerb(result)
        }
      }
      inputRef.current?.focus()
    },
    [randomVerb.id, randomVerb.target, answer],
  )

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="card w-1/3 bg-neutral text-neutral-content relative">
        {wrongAnsweredVerb && (
          <div className="w-full absolute bottom-full mb-4">
            <p className="text-center mb-1 text-primary">{wrongAnsweredVerb.translation}</p>
            <div className="w-full flex flex-row">
              <div className="card bg-neutral flex-1">
                <div className="card-body items-center text-center">{wrongAnsweredVerb.v1}</div>
              </div>
              <div className="card bg-neutral flex-1 mx-4">
                <div className="card-body items-center text-center">{wrongAnsweredVerb.v2} </div>
              </div>
              <div className="card bg-neutral flex-1">
                <div className="card-body items-center text-center">{wrongAnsweredVerb.v3}</div>
              </div>
            </div>
          </div>
        )}
        <div className="card-body items-center text-center">
          <form className="flex flex-col w-full border-opacity-50" onSubmit={onSubmit}>
            <div className="grid h-20 card bg-primary text-primary-content text-xl rounded-box place-items-center">
              {capitalizeFirstLetter(randomVerb.variant)}
            </div>
            <div className="divider">{capitalizeFirstLetter(randomVerb.target)}</div>
            <div className="card rounded-box flex-row justify-between">
              <input
                ref={inputRef}
                value={answer}
                onChange={e => setAnswer(e.target.value)}
                type="text"
                placeholder="Your answer..."
                className="input input-bordered w-full"
              />
              <button className="btn btn-primary btn-square ml-2" disabled={isPending || !answer} type="submit">
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
          </form>
          {isPending && <progress className="progress progress-primary w-full absolute bottom-0"></progress>}
        </div>
      </div>
    </div>
  )
})

Test.displayName = Test.name
