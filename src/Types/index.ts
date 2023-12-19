import POST from './Post';
import PROJECT from './Project';
import EXPERIENCE from './Experience';

interface IServerState {
  submitting: boolean
  response?: {
    status: number
    msg: string
  } | null
}

interface IContactField {
  id: string,
  name: string,
  value: string,
  type?: string,
  placeholder?: string,
  onChange?: any,
  rows?: number, // for textarea
  required?: boolean
}

export { POST, PROJECT, EXPERIENCE, IServerState, IContactField };