import React from 'react'
import { FormattedDate, FormattedMessage } from "react-intl";

function App({importantDate}) {
  return (
    <div className="App">
      <h1>This is React App.</h1>
      <FormattedMessage id='hello' />
      <FormattedDate
        value={importantDate}
        year="numeric"
        month="long"
        day="numeric"
        weekday="long"
      />
    </div>
  )
}

export default App