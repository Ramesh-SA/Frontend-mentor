

import React from "react"

export interface HidSchema {
  id:number
  platenumber: string
  operatorname: string
  runtime: string
  samplenumber: number
}

export interface HidSampleSchema {
  samplenumber: string
  referencenumber:string
  kind:string
  patientid:string
  hidplateno:string
  rundate:string
  score:number
  status:string
  actions: React.ReactNode

}
