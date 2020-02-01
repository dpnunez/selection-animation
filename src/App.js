import React from 'react';
import styled from 'styled-components'

import Menu from 'components/Menu'

const App = () => {
  return (
    <Container>
      <Menu />
    </Container>
  )
}

const Container = styled.div`
display: flex;
align-items: center;
  height: 100vh;
  width: 100vw;
`

export default App;
