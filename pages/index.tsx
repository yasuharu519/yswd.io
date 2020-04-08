import { Text, Row, Col } from '@zeit-ui/react'
import { useMediaQuery } from 'react-responsive'
import styled from '@emotion/styled'

const Header = styled.h1`
  border: 20px solid #000000;
  width: 60%;
  text-align: center;
  margin: 0 auto;
  padding: 60px 0;
  font-weight: bold;
  font-size: 45px;
  margin-top: 150px
`

const Home = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const bigScreenOption = {
    span: 16,
    offset: 4,
  }
  const smallScreenOption = {
    span: 24,
    offset: 0,
  }
  const containerOption = isTabletOrMobile ? smallScreenOption : bigScreenOption;

  return (
    <>
      <Row>
        <Col {...containerOption}>
          <Header>Yasuharu Sawada</Header>
        </Col>
      </Row>
    </>
  )
}

export default Home
