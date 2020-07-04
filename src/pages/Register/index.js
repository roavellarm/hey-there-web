import React from 'react'
import Row from 'components/Row'
import Button from 'components/Button'
import Textfield from 'components/Textfield'
import Column from 'components/Column'

function Register() {
  return (
    <Column size={5}>
      <Column size={12}>
        <h1>Cadastre-se</h1>
      </Column>

      <Row>
        <Column size={12}>
          <Textfield label="Nome" name="nome" />
          <br />
          <Textfield label="Email" name="email" />
          <br />
          <Textfield type="password" label="Senha" name="senha" />
          <br />
          <Button
            color="secondary"
            type="submit"
            fullWidth
            style={{ margin: '1rem 0px' }}
          >
            Cadastrar
          </Button>
        </Column>
      </Row>
    </Column>
  )
}

export default Register
