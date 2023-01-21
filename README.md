GET /providers: Essa rota é responsável por retornar todos os providers cadastrados no banco de dados. Ela não requer nenhum parâmetro de entrada e retorna uma lista de objetos, cada um representando um provider.

GET /providers/:id: Essa rota é responsável por retornar um provider específico, identificado pelo seu id. Ela requer um parâmetro de entrada, o id do provider, e retorna um objeto representando o provider. Caso o provider não seja encontrado, a rota retorna um status 404.

POST /providers: Essa rota é responsável por criar um novo provider. Ela requer um objeto com as informações do provider, enviado no corpo da requisição, e retorna o objeto criado, com o id gerado pelo banco de dados.

PUT /providers/:id: Essa rota é responsável por atualizar um provider específico, identificado pelo seu id. Ela requer um parâmetro de entrada, o id do provider, e um objeto com as informações atualizadas, enviado no corpo da requisição. A rota retorna o objeto atualizado. Caso o provider não seja encontrado, a rota retorna um status 404.

DELETE /providers/:id: Essa rota é responsável por deletar um provider específico, identificado pelo seu id. Ela requer um parâmetro de entrada, o id do provider, e retorna uma mensagem de confirmação. Caso o provider não seja encontrado, a rota retorna um status 404.


<h1>Documentação de Rotas</h1>
<h3>Criar Provider</h3>
URL : /providers

Método : POST

Autenticação : Não é necessário

Parâmetros :

providerName (string, obrigatório) - Nome do provider  
hour (date, opcional) - Hora de criação  
idNotes (string, opcional) - Id das notas 
idWorkDay (string, opcional) - Id do dia de trabalho  
quantity (string, opcional) - Quantidade  
isConfirmedByHeritage (boolean, opcional) - Confirmado pela herança. 
isConfirmedByCPD (boolean, opcional) - Confirmado pela CPD. 
isConfirmedByArbitrator (boolean, opcional) - Confirmado pelo árbitro. 
loadType (string, opcional) - Tipo de carga. 
volumeType (string, opcional) - Tipo de volume. 
isChecked (boolean, opcional) - Verificado. 
isReturned (boolean, opcional) - Devolvido. 
isSchedule (boolean, opcional) - Agendado. 
idDriver (string, opcional) - Id do motorista. 
Retorno :  

message (string) - Mensagem de sucesso. 
provider (object) - Provider criado. 
