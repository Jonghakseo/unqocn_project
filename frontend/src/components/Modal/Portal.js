import { useMemo } from 'react'
import { createPortal } from 'react-dom'

function Portal({ children, elementId }) {
  const rootElement = useMemo(() => document.getElementById(elementId), [elementId])
  //Modal을 담을 컴포넌트. 바깥으로 빼기 위해 따로 선언

  return createPortal(children, rootElement)
}

export default Portal
