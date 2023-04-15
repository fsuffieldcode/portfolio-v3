import styled from 'styled-components'

const StyledWorkSection = styled.section`
	margin-bottom: 2rem;
`

const HeaderContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`

const Header = styled.h2`
	margin: 5rem 0 3rem 0;
	font-size: 4vw;
	font-style: italic;
	color: var(--almostblack);
`
const StyledFooter = styled.footer`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-bottom: 2rem;
	text-align: center;
	margin: 1rem;

	span {
		font-style: normal;
	}
`

export { HeaderContainer, Header, StyledWorkSection, StyledFooter }
