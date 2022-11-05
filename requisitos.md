- Armazenamento de dados

  - [x] Para persistir os dados (usuários e tweets), utilize variáveis globais em memória
  - [x] O formato de um **usuário** deve ser:
    ```jsx
    {
    	username: 'bobesponja',
    	avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info"
    }
    ```
  - [x] O formato de um **tweet** deve ser:
    ```jsx
    {
    	username: "bobesponja",
      tweet: "eu amo o hub"
    }
    ```

- **POST** `/sign-up`

  - [x] Deve receber (pelo body da request), um parâmetro **username** e um **avatar**, contendo o nomeo do username d usuário e a sua foto de avatar:
    ```jsx
    {
        username: "bobesponja",
    		avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info"
    }
    ```
  - [x] Salvar esse usuário num array de usuários do servidor
  - [x] Por fim, retornar a mensagem `“OK”`

- **POST** `/tweets`

  - [x] Deve receber (pelo body da request), os parâmetros `username` e `tweet`:
    ```jsx
    {
    	username: "bobesponja",
      tweet: "eu amo o hub"
    }
    ```
  - [x] Salvar esse tweet num array de tweets do servidor
  - [x] Por fim, retornar a mensagem `“OK”`

- **GET** `/tweets`
  - [x] Retornar os 10 últimos tweets publicados
    ```jsx
    [
      {
        username: "bobesponja",
        avatar:
          "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "eu amo o hub",
      },
    ];
    ```
  - Repare que a informação “avatar” **não vem** da requisição **post** de `/tweets`. Para retornar o “avatar” na requisição **get** de `/tweets`, você vai precisar obtê-lo de outra forma.

**BONUS**

- Validação de dados
  - [x] Todas as rotas deverão validar os dados recebidos, caso algum dado venha vazio ou no formato inválido, o servidor deverá retornar o status code 400 (BAD REQUEST) e não continuará com a execução da função. **Dica:** procure pelo método `res.sendStatus()`
  - [x] **POST** `/sign-up` precisa validar se os valores de `username` e `avatar` foram enviados e caso contrário, deverá responder com a mensagem “Todos os campos são obrigatórios!”
  - [x] **POST** `/tweets` precisa validar se os valores de `username` e `tweet` foram enviados e caso contrário, deverá responder com a mensagem “Todos os campos são obrigatórios!”
- Status codes de requisições POST
  - [x] Todas as requisições POST deverão retornar o status code 201 (CREATED) além do seu retorno já descrito (mensagens, JSONs, etc). **Dica:** procure pelo método `res.status()` e tente utilizá-lo junto do método `res.send()`
- **GET** `/tweets/USERNAME`
  - [x] Retornar todos os tweets publicados do usuario recebido por parâmetro de rota
    ```jsx
    [
      {
        username: "bobesponja",
        avatar:
          "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "eu amo o hub",
      },
    ];
    ```
- **GET** `/tweets` com paginação
  - [ ] Esse endpoint deverá passar a receber a página identificada via query string (`?page=1`). Esse é um recurso diferente do que vimos até agora (route params e body)
  - [ ] Modifique o endpoint para retornar corretamente os tweets da “página” (`page`) atual, esse endpoint será chamado ao clicar no botão “**Carregar mais**” (isso já foi feito no front-end). A primeira página corresponde aos ultimos 10 tweets, a segunda do 11 ao 20, a terceira do 21 ao 30, etc
  - [ ] Lembre-se de validar se o valor de `page` (query string) foi enviado e tem valor **maior ou igual a** 1 e caso contrário, deverá responder com a mensagem “Informe uma página válida!” e com o status code 400 (BAD REQUEST)
- **POST** `/tweets` recebendo username por Header
  - [ ] Esse endpoint deverá parar de receber o valor de username do body e passar a recebê-lo por meio de um **header** `user`. Esse é um recurso diferente do que vimos até agora (route params e body)
