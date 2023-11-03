import React from 'react'
import { useParams } from 'react-router-dom'

export default function CityDetails() {
  const { cityDetails } = useParams()
  return (
    <div>CityDetails {cityDetails}</div>
  )
}
