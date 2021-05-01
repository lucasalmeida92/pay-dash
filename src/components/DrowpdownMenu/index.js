import { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
`
const Menu = styled.div`
  position: absolute;
  overflow: hidden;
  top: calc(100% + 16px);
  right: 0;
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
        color: ${({ theme }) => theme.colors.lightGrey1};
        font-weight: 700;
      }
    }
  }
`

function DropdownMenu({ openButton, children, onClickOpen }) {
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
    <Wrapper ref={wrapperRef}>
      <span onClick={handleClickOpen}>
        {openButton}
      </span>

      <Menu isOpen={isOpen}>
        { children }
      </Menu>
    </Wrapper>
  )
}

export default DropdownMenu
