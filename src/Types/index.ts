import POST from './Post';
import PROJECT from './Project';
import EXPERIENCE from './Experience';

interface ServerState {
  submitting: boolean
  response?: {
    status: number
    msg: string
  } | null
}

interface ContactField {
  id: string,
  name: string,
  value: string,
  type?: string,
  placeholder?: string,
  onChange?: any,
  rows?: number, // for textarea
  required?: boolean
}

export { POST, PROJECT, EXPERIENCE, ServerState, ContactField };