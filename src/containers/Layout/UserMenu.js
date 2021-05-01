import styled from 'styled-components'
import DropdownMenu from '../../components/DrowpdownMenu'

const UserPicture = styled.img`
  cursor: pointer;
  width: 48px;
  height: 48px;
  margin-left: 24px;
  border-radius: 48px;
  transition: all 200ms ease-out;
  object-fit: cover;

  &:hover, &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.grey};
  }
`


function UserMenu() {
  return (
    <DropdownMenu
      openButton={
        <UserPicture
          src="/images/user-picture.jpg"
          alt="Fulano da Silva"
        />
      }
    >
      <li><a href="#" title="My account link">My account</a></li>
      <li><a href="#" title="Loggout link">Loggout</a></li>
    </DropdownMenu>
  )
}

export default UserMenu
