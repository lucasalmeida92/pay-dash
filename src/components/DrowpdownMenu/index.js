import { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
`
const Menu = styled.div`
  z-index: 999;
  position: absolute;
  overflow: hidden;
  top: ${({ top }) => top || 'calc(100% + 16px)'};
  right: ${({ right }) => right || 0};
  display: ${({ isOpen }) => isOpen ? 'block' : 'none'};
  border-radius: 24px;
  padding: 2px;
  background-color: ${({ theme }) => theme.colors.dark};

  li {
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey2};

    &:last-child {
      border-bottom: none;
    }

    a, button {
      width: 100%;
      display: block;
      padding: 16px 48px 16px 28px;
      color: ${({ theme }) => theme.colors.lightGrey3};
      font-size: .8rem;
      text-align: left;
      white-space: nowrap;
      transition: all 200ms ease-out;

      &:hover {
        background-color: rgba(255,255,255, .1);
        color: white;
      }
    }
  }
`

function DropdownMenu({ className, openButton, children, onClickOpen, top, right }) {
  const [isOpen, setIsOpen] = useState(false)
  const wrapperRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false)
        onClickOpen && onClickOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [wrapperRef])

  function handleClickOpen() {
    setIsOpen(!isOpen)
    onClickOpen && onClickOpen(!isOpen)
  }

  return (
    <Wrapper ref={wrapperRef} className={className}>
      <span onClick={handleClickOpen}>
        {openButton}
      </span>

      <Menu isOpen={isOpen} top={top} right={right}>
        { children }
      </Menu>
    </Wrapper>
  )
}

export default DropdownMenu
