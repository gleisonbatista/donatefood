Sistema desenvolvido com backend em node js e frontend com html,css e javascript, utilizei banco de dados mysql e padrão de projeto MVC como solicitado no desafio, utilizei módulos modulos do node:
express,
body-parser,
sequelize,
mysql2,
handlebars,
passport,
connect-flash,
express-session,
nodemon e
path.
O sistema tem as aplicações com as funções de CRUD de Usuario, Produto e Entrega, onde na aplicação de usuário vai armazenar os dados de acesso do usuário que é dividido em dois tipos empresa e entregador, na apliacação Produtos onde são registrados os dados dos produtos a serem doados bem como o local de coleta e o status se já está disponivel ou entregue.
Tive um problema em relação a aplicação de entrega que não ficou pronta mais a ideia desta aplicação é registrar a entrega realizada pelo entregador e atualuzar o status do produto de disponivel para entregue. E por fim o controle de acesso controla por onde o usuário terá o acesso inicial do sistema.
