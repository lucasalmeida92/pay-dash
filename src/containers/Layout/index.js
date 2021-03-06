import styled from 'styled-components'
import SearchInput from './SearchInput'
import UserMenu from './UserMenu'
import NotificationsButton from '../../components/NotificationsButton'
import LanguagesMenu from './LanguagesMenu'
import SideNav from './SideNav'

const Wrapper = styled.div`
  display: grid;
  min-height: 100vh;
  max-width: 1476px;
  margin: 0 auto;
  grid-template: 112px 1fr 32px / auto 1fr 48px;
  grid-template-areas: "header header"
                       "sidenav content";
  @media(max-width: 920px) {
    width: 100vw;
    grid-template: 80px auto / 100vw;
    grid-template-areas: "header"
                         "content";
    overflow-x: hidden;
  }
`
const Header = styled.header`
  grid-area: header;
  display: grid;
  grid-template: 100% / 152px auto auto;
  grid-template-areas: "logo search navbar";

  @media(max-width: 920px) {
    grid-template: 100% / 100px 1fr;
    grid-template-areas: "logo navbar";
    padding: 0 24px;
  }
`
const Logo = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-area: logo;

  @media(max-width: 920px) {
    justify-items: start;
  }

  h1 {
    margin: 0;
    color: ${({ theme }) => theme.colors.dark};
    font-size: 2.5rem;
    font-weight: 800;
    transform: translateY(-4px);

    @media(max-width: 920px) {
      font-size: 2rem;
    }
  }
`
const Search = styled.div`
  display: grid;
  align-items: center;
  grid-area: search;
  justify-self: start;
  padding-left: 16px;

  @media(max-width: 920px) {
    display: none;
  }
`
const NavBar = styled.nav`
  grid-area: navbar;
  justify-self: end;
  display: flex;
  align-items: center;
`
const SidenavWrapper = styled.nav`
  grid-area: sidenav;

  @media(max-width: 920px) {
    display: none;
  }
`
const Content = styled.main`
  grid-area: content;
  background-color: white;
  border-radius: 60px;
  padding: 48px;

  @media(max-width: 920px) {
    border-radius: 32px;
    padding: 24px;
  }
`

function Layout({ children }) {
  return (
    <Wrapper>
      <Header>
        <Logo>
          <h1>Pay</h1>
        </Logo>
        <Search>
          <SearchInput />
        </Search>
        <NavBar>
          <LanguagesMenu />
          <NotificationsButton marginLeft="4px"/>
          <UserMenu />
        </NavBar>
      </Header>
      <SidenavWrapper>
        <SideNav />
      </SidenavWrapper>
      <Content>
        { children }
      </Content>
    </Wrapper>
  )
}

export default Layout
