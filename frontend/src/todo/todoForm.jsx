import React from 'react'

// components
import Grid from '../tamplete/grid'
import IconButton from '../tamplete/iconButton'

export default props => (
  <div role="form" className="todoForm">

    <Grid cols="12 9 10">
      <input id="description" className="form-control" placeholder="Adicione uma tarefa"></input>
    </Grid>

    <Grid cols="12 3 2">
      <IconButton style="primary" icon="plus"></IconButton>
    </Grid>
  </div>
)