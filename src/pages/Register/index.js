import React from 'react'
import Row from 'components/Row'
import Button from 'components/Button'
import Textfield from 'components/Textfield'
import Column from 'components/Column'

function Register() {
  return (
    <>
      <Column size={5} style={{ padding: '100px' }}>
        <Row>
          <div align="center">
            <h1>Cadastre-se</h1>
          </div>

          <Textfield style={{ width: '430px' }} label="Nome" name="nome" />
          <br />
          <Textfield style={{ width: '430px' }} label="Email" name="email" />
          <br />
          <Textfield
            style={{ width: '430px' }}
            type="password"
            label="Senha"
            name="senha"
          />
          <br />
          <Button
            color="secondary"
            // eslint-disable-next-line no-alert
            type="submit"
          >
            Cadastrar
          </Button>
        </Row>
      </Column>
    </>
  )
}

export default Register
