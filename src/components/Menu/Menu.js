import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'

const menu_items = [
	{
		label: 'Users',
		link: '/usuario'
	},
	{
		label: 'Triagem',
		link: '/triagem'
	},
	{
		label: 'Condomino',
		link: '/condominio'
	},
	{
		label: 'Teste',
		link: '/teste'
	}
]

const MenuComponent = () => {
	const [active, setActive] = useState(null)
	const selectIndicator = useRef(null)

	const moveSelector = (activeItem) => {
		const {top, left, width, height} = document.querySelector(`.${activeItem}`).getBoundingClientRect()
			selectIndicator.current.style.top = `${top + height + 4}px`
			selectIndicator.current.style.left = `${left}px`
			selectIndicator.current.style.width = `${width}px`
	} 
	useEffect(() => {
		active && moveSelector(active)
	}, [active])
	return (
		<React.Fragment>
			<SelectedIndicator ref={selectIndicator} active={active} />
			<Container>
				<LogoContainer />
				<Menu>
					{menu_items.map(item => (
						<li key={item.link} className={item.label} onClick={() => setActive(item.label)}>{item.label}</li>
					))}
				</Menu>
				<UserContainer />
			</Container>
		</React.Fragment>
	)
}
const SelectedIndicator = styled.div`
	width: 100px;
	border-radius: 2px;
	height: 4px;
	background-color: green;
	position: absolute;
	z-index: 2;
	opacity: ${({active}) => active ? '1' : '0'};
	transition: all 0.5s ease, opacity 0.2s ease 0.2s;
`
const Container = styled.div`
	box-shadow: 0px 2px 8px rgba(62, 71, 86, 0.2);
	padding: 40px;
	flex: 1;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-between;
	box-shadow: 1px black 2px;
`

const LogoContainer = styled.div ``
const Menu = styled.ul`
	li {
		font-size: 30px;
		display: inline-flex;
		margin: 0 30px;
		&:first-child {
			margin-left: 0;
		}
		&:last-child {
			margin-right: 0;
		}
	}
`
const UserContainer = styled.div``

export default MenuComponent