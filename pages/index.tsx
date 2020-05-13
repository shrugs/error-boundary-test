import React, { PropsWithChildren, useEffect } from 'react'
import { ErrorBoundary, FallbackProps } from 'react-error-boundary'

console.log('environment:', process.env.NODE_ENV)

function Bomb() {
  useEffect(() => {
    throw new Error(`Explosion!`)
  }, [])

  return null;
}

function MyFallbackComponent({ error }: FallbackProps) {
  return (
    <div>
      <span>Caught error: {error.message}</span>
      <img
        height={150}
        src="https://media1.tenor.com/images/a5200ff8939402e4e2bbda3a8107d2b1/tenor.gif"
      />
    </div>
  )
}

function MyErrorBoundary({ children }: PropsWithChildren<{}>) {
  return (
    <ErrorBoundary FallbackComponent={MyFallbackComponent} onError={() => {}}>
      <Bomb />
    </ErrorBoundary>
  )
}

export default function Home() {
  return (
    <MyErrorBoundary>
      <Bomb />
    </MyErrorBoundary>
  )
}
