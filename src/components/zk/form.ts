import { Base, baseConstructor } from './base'
type FormPropData = {}
export class Form extends Base<FormPropData> {
  constructor(comConfig: baseConstructor) {
    super(comConfig)
  }
}
