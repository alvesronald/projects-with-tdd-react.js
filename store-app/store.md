# Store Form App

## Store product

As a merchandise manager, I want to store new products as a way of
administrating my products.

**Acceptance Criteria (AC):**

- There must be a create product form page.
- The form must have the following fields: name, size, type (electronic,
  furniture, clothing) and a submit button.
- All the fields are required.
  - If the user leaves empty fields and clicks the submit button, the form page
    must display required messages as the format: _“The [field name] is
    required”_ aside of the proper field.
  - If the user blurs a field that is empty, then the form must display the
    required message for that field.
- The form must send the data to a backend endpoint service.
  - The submit button should be disabbled while the form page is fetching the
    data. After fetching, the submit button does not have to be disabled.
  - In the success path, the form page must display the success message
    _“Product stored”_ and clean the fields values.
  - In a server error, the form page must display the error message _“Unexpected
    error, please try again”_.
  - In the invalid request path, the form page must display the error message
    _“The form is invalid, the fields [field1...fieldN] are required”_.
  - In the not found service path, the form page must display the message
    _“Connection error, please try later”_.

---

# Aplicação de formulário de loja

## Armazenar produto

Como gerente de mercadorias, quero estocar novos produtos como forma de
ser capaz de gerenciá-los.

** Critérios de Aceitação (AC): **

- Deve haver uma página de formulário de criação de produto.
- O formulário deve conter os seguintes campos: nome, tamanho, tipo
  (eletrônicos, móveis, roupas) e um botão enviar.
- Todos os campos são obrigatórios.
  - Se o usuário deixar os campos vazios e clicar no botão enviar, a página
    do formulário deve conter as mensagens obrigatórias com o formato: _ “O
    [nome do campo] é obrigatório” _ ao lado do campo correspondente.
  - Se o usuário borrar um campo que está vazio, o formulário deve
    exibir a mensagem necessária para esse campo.
- O formulário deve enviar os dados para um serviço de endpoint de back-end.
  - O botão Enviar deve ser desativado enquanto a página do formulário
    está recuperando os dados. Após a recuperação, não é necessário
    desative o botão enviar.
  - No caminho de sucesso, a página do formulário deve exibir a mensagem de sucesso.
    success _ "Produto Armazenado" _ e limpe os valores do campo.
  - Em um erro do servidor, a página do formulário deve exibir a mensagem
    error _ "Erro inesperado, tente novamente" _.
  - Na rota de solicitação inválida, a página do formulário deve exibir o
    mensagem de erro _ “O formulário não é válido, os campos [campo1 ...
    campoN] são obrigatórios” _.
  - No caminho do serviço não encontrado, a página do formulário deve exibir
    a mensagem _ "Falha na conexão, tente novamente mais tarde" _.
