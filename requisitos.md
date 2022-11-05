- Armazenamento de dados
  - [ ] Para persistir os dados (usuários e tweets), utilize variáveis globais em memória
  - [ ] O formato de um **usuário** deve ser:
    ```jsx
    {
    	username: 'bobesponja',
    	avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info"
    }
    ```
  - [ ] O formato de um **tweet** deve ser:
    ```jsx
    {
    	username: "bobesponja",
      tweet: "eu amo o hub"
    }
    ```
- **POST** `/sign-up`
  - [ ] Deve receber (pelo body da request), um parâmetro **username** e um **avatar**, contendo o nome do username do usuário e a sua foto de avatar:
    ```jsx
    {
        username: "bobesponja",
    		avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info"
    }
    ```
  - [ ] Salvar esse usuário num array de usuários do servidor
  - [ ] Por fim, retornar a mensagem `“OK”`
- **POST** `/tweets`
  - [ ] Deve receber (pelo body da request), os parâmetros `username` e `tweet`:
    ```jsx
    {
    	username: "bobesponja",
      tweet: "eu amo o hub"
    }
    ```
  - [ ] Salvar esse tweet num array de tweets do servidor
  - [ ] Por fim, retornar a mensagem `“OK”`
- **GET** `/tweets`
