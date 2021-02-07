import styled from "styled-components"
import { Bell } from "@styled-icons/fa-solid"

const BannerStyled = styled.aside`
  background: ${({ theme }) => theme.secondaryColor};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`
const LogoIcon = styled(Bell)`
  color: white;
  width: 1rem;
  margin-right: 1rem;
`

export { BannerStyled, LogoIcon }
