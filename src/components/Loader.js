import React from 'react'
import { Stack } from '@mui/material'
import { InfinitySpin } from 'react-loader-spinner'

const Loader = () => {
  return (
    <Stack direction="row" sx={{ justifyContent: "center", alignItems: "center", width: '100%' }}>
        <InfinitySpin 
        width='200'
        color="#FF2625"
        />
    </Stack>
  )
}

export default Loader