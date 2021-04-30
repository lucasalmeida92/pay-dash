import { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'

const UserPicture = styled.img`
  cursor: pointer;
  width: 48px;
  height: 48px;
  margin-left: 40px;
  border-radius: 48px;
  transition: all 200ms ease-out;
  object-fit: cover;

  &:hover, &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.grey};
  }
`
const Wrapper = styled.div`
  position: relative;
`
const DropdownMenu = styled.div`
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

    a {
      display: block;
      padding: 16px 48px 16px 28px;
      color: ${({ theme }) => theme.colors.lightGrey3};
      font-size: .8rem;
      white-space: nowrap;
      transition: all 200ms ease-out;

      &:hover {
        background-color: rgba(255,255,255, .1);
        color: ${({ theme }) => theme.colors.lightGrey1};
      }
    }
  }
`

function UserMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const wrapperRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [wrapperRef])

  return (
    <Wrapper ref={wrapperRef}>
      <UserPicture
        src="/images/user-picture.jpg"
        alt="Fulano da Silva"
        onClick={() => setIsOpen(!isOpen)}
        isOpen={isOpen}
      />
      <DropdownMenu isOpen={isOpen}>
        <li><a href="#" title="My account link">My account</a></li>
        <li><a href="#" title="Loggout link">Loggout</a></li>
      </DropdownMenu>
    </Wrapper>
  )
}

export default UserMenu
