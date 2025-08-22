'use client'

import dynamic from 'next/dynamic'
import { useMemo } from 'react'

const EventMap = () => {
  const Map = useMemo(() => dynamic(
    () => import('./Map'),
    { 
      loading: () => <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
        <p className="text-muted-foreground">Harita yükleniyor...</p>
      </div>,
      ssr: false 
    }
  ), [])

  return <Map />
}

export default EventMap
