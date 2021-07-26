import React from 'react'

import * as ComboSuite from '@zbtsu/combo-suite'

const App = () => {
  const [state, setState] = React.useState('')
  const combo = ComboSuite.useComboParser(state)
  console.log({ combo })
  return (
    <div>
      <input onChange={(e) => setState(e.target.value)} value={state} />
      <ComboSuite.ComboPreview combo={combo} />
    </div>
  )
}

export default App
