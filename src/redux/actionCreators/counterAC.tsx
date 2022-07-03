import * as actionTypes from "../actionTypes/counterAT";

export interface TypeCount {
  type: string;
  payload: {
    str: string,
    val: number
  };
}

export interface TypeAddCounter {
  type: string;
  payload: {
    str: string,
    val: number
  };
}

export interface TypeDeleteCounter {
  type: string;
}

export const getCount = (count: {
  str: string,
  val: number
}):TypeCount => {
  return{
    type: actionTypes.COUNT,
    payload: count
  }
}

export const addCounter = (plus: {
  str: string,
  val: number
}):TypeAddCounter => {
  return{
    type: actionTypes.ADD_COUNTER,
    payload: plus,
  }
}

export const deleteCounter = ():TypeDeleteCounter => {
  return{
    type: actionTypes.DELETE_COUNTER,
  }
}

export type CountAction = TypeCount | TypeAddCounter | TypeDeleteCounter;
