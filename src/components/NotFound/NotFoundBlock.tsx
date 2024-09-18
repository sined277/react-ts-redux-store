import React from 'react'
import { Link } from 'react-router-dom'

import { ROUTES } from '../../utils/ROUTES'

const NotFoundBlock: React.FC = () => {
  return (
    <div>
    <h1>Page is not found <span>:(</span></h1>
    <div>
      <Link to={ROUTES.HOME}>
        <button>На главную</button>
      </Link>
    </div>
  </div>
  )
}



export default NotFoundBlock