import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
// import CloseButton from './CloseButton'
import Portal from './Portal'

function Modal({ className, onClose, maskClosable, closable, visible, children, src }) {
  //클래스 이름, 닫는 버튼, 닫을 수 있는지, 보이는지, 자식, 소스 받아옴
  const onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(e)
    }
  }

  const close = (e) => {
    if (onClose) {
      onClose(e)
    }
  }

  useEffect(() => {
    document.body.style.cssText = `position: fixed; top: -${window.scrollY}px`
    return () => {
      const scrollY = document.body.style.top
      document.body.style.cssText = `position: ""; top: "";`
      window.scrollTo(0, parseInt(scrollY || '0') * -1)
    }
  }, [])

  return (
    <Portal elementId="modal-root">
      <ModalOverlay visible={visible} />
      <ModalWrapper className={className} onClick={maskClosable ? onMaskClick : null} tabIndex={-1} visible={visible}>
        <ModalInner tabIndex={0} className="modal-inner">
          {closable && (
            <CloseButton className="modal-close" onClick={close}>
              &#x2715;
            </CloseButton>
          )}
          <ModalImage src={src} alt="full_size_image" draggable="false"></ModalImage>
          {/* {closable && <CloseButton className="modal-close" onClick={close} />} */}

          {children}
        </ModalInner>
      </ModalWrapper>
    </Portal>
  )
}

Modal.defaultProps = {
  visible: false,
  closable: true,
  maskClosable: true,
}

Modal.propTypes = {
  visible: PropTypes.bool,
}

const CloseButton = styled.button`
  position: absolute;
  font-weight: 900;
  font-size: 1.5rem;

  /* height: 20px; */
  /* width: 20px; */
  border: 0px solid skyblue;
  background-color: rgba(0, 0, 0, 0);
  color: gray;
  /* padding: 5px; */
`

const ModalWrapper = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`

const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`

const ModalInner = styled.div`
  display: flex;
  justify-content: flex-end;
  /* align-content: flex-end; */
  box-sizing: border-box;
  position: fixed;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.5);
  background-color: rgba(0, 0, 0, 0.01);
  border-radius: 5px;
  margin: 0 auto;
  padding: 1px 1px;
`

const ModalImage = styled.img`
  max-height: 90vh;
  width: auto;
  max-width: 90vw;
`

export default Modal
