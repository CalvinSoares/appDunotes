
import React, { ReactNode } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

type safeAreaWrapperProps = {
    children: ReactNode
}

const SafeAreaWrapper = ({ children }: safeAreaWrapperProps) => {
  return (
    <SafeAreaView
        style={{
            flex: 1
        }}
    >
        {children}
    </SafeAreaView>
  )
}

export default SafeAreaWrapper