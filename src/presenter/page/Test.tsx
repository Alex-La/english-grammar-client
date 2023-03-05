import React, {memo} from 'react'

export const Test: React.FC = memo(() => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="card w-1/3 bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">
          <div className="flex flex-col w-full border-opacity-50">
            <div className="grid h-20 card bg-primary text-primary-content text-xl rounded-box place-items-center">
              Be
            </div>
            <div className="divider">Translation</div>
            <div className="card rounded-box flex-row justify-between">
              <input type="text" placeholder="Your answer..." className="input input-bordered w-full" />
              <button className="btn btn-primary btn-square ml-2" disabled>
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
          </div>
          {true && <progress className="progress progress-primary w-full"></progress>}
        </div>
      </div>
    </div>
  )
})

Test.displayName = Test.name
