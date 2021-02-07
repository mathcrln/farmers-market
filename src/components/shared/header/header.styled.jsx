import styled from "styled-components"
import { Carrot } from "@styled-icons/fa-solid"

const HeaderStyled = styled.header`
  background: ${({ theme }) => theme.primaryColor};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Title = styled.h1`
  font-weight: 400;
`
const LogoIcon = styled(Carrot)`
  color: white;
  width: 3rem;
  margin-right: 1rem;
`

export { HeaderStyled, Title, LogoIcon }
