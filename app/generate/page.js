import React from 'react'
import GenerateContent from '../components/genzsection'
import { Suspense } from 'react'

const generate = () => {


    return (
       
        <Suspense fallback={<div>Loading...</div>}>
        <GenerateContent />
      </Suspense>
    )
}

export default generate