import './index.styl'
import * as React from 'preact/compat'
import docs from './lit.doc'
import renderLitDoc from '@lit-doc/render'
import {h, render, Fragment} from 'preact'

const view = (
  <Fragment>{
    renderLitDoc(
      docs['@lit-doc/example-mul'].source,
      docs['@lit-doc/example-mul'].exports.doc
    )
  }</Fragment>
)

render(view, document.body)
