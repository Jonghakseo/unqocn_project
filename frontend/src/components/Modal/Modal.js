import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
// import CloseButton from './CloseButton'
import Portal from './Portal'

function Modal({ className, onClose, maskClosable, closable, visible, children, src }) {
  //클래스 이름, 닫는 버튼, 닫을 수 있는지, 보이는지, 자식, 소스 받아옴
  const img_src = src

  const onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      document.body.style.cssText = `overflow-x: hidden !important; overflow-y: unset !important; height: unset !important; touch-action: unset !important;`
      onClose(e)
    }
  }

  const close = (e) => {
    if (onClose) {
      document.body.style.cssText = `overflow-x: hidden !important; overflow-y: unset !important; height: unset !important; touch-action: unset !important;`
      onClose(e)
    }
  }

  const inflate = (e) => {
    let win = window.open(img_src, '_blank')
    win.focus()
  }

  useEffect(() => {
    // document.body.style.cssText = `position: fixed; top: -${window.scrollY}px`
    document.body.style.cssText = `overflow: hidden; height: 100%; touch-action: none;`
    //하단 방식은 포지션을 0으로 고정시키는 문제때문에 (배경색상 변경됨) css옵션 변경으로 문제 해결함.
    return () => {
      //   const scrollY = document.body.style.top
      //   document.body.style.cssText = `position: ""; top: "";`
      //   window.scrollTo(1, parseInt(scrollY || '0') * -1)
    }
  }, [])

  return (
    <Portal elementId="modal-root">
      <ModalOverlay visible={visible} />
      <ModalWrapper
        className={className}
        onClick={maskClosable ? onMaskClick : null}
        tabIndex={-1}
        visible={visible}
      >
        <ModalInner tabIndex={0} className="modal-inner">
          {closable && (
            <CloseButton className="modal-close" onClick={close}>
              &#10007;
            </CloseButton>
          )}
          <ModalImage src={src} alt="full_size_image" draggable="false"></ModalImage>
          {/* {closable && <CloseButton className="modal-close" onClick={close} />} */}

          {children}
          <InflateButton className="inflate-button" onClick={inflate}>
            &nbsp;원본 이미지 보기&nbsp;
          </InflateButton>
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
  right: 4px;
  top: 4px;
  font-weight: 900;
  font-size: 1.5rem;
  /* height: 2rem; */
  /* width: 1.8rem; */
  text-align: center;
  border: solid 1px rgba(0, 0, 0, 0);
  border-radius: 5px;
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.3);
  transition: color 0.5s, background-color 0.5s;
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.9);
    color: #ffffff;
  }
  /* padding: 2px 2px; */
`

const InflateButton = styled.div`
  position: absolute;
  bottom: 4px;
  right: 4px;
  font-weight: 600;
  font-size: 1rem;
  /* width: 8rem; */
  /* font-weight: 500; */
  margin: 2px 3px;
  border: solid 1px rgba(0, 0, 0, 0);
  border-radius: 5px;
  color: black;
  background-color: rgba(0, 0, 0, 0.3);
  transition: color 0.5s, background-color 0.5s;
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.9);
    color: #ffffff;
  }
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
  &:focus {
    outline: none;
  }
`

const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #454f5dbb;
  z-index: 999;
  &:focus {
    outline: none;
  }
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
  &:focus {
    outline: none;
  }
`

const ModalImage = styled.img`
  height: auto;
  min-height: 70vh;
  max-height: 95vh;
  object-fit: contain;
  width: auto;
  max-width: 90vw;

  &:focus {
    outline: none;
  }
`

export default Modal
