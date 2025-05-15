🖥️ Frontend (React)
O frontend foi desenvolvido com foco em boas práticas de componentização e reatividade:

🔁 Componentização: Componentes reutilizáveis para manter a aplicação organizada e escalável.

🎨 Styled Components: Estilização feita diretamente no JavaScript, eliminando a necessidade de arquivos CSS externos.

⚙️ State e Props: Gerenciamento de dados entre os componentes de forma eficiente.

🔍 Manipulação de filtros e arrays: Desenvolvimento de componentes reutilizáveis e inteligentes.

📐 Reatividade com base na largura da tela: Componente criado para detectar a largura da tela e aplicar mudanças visuais de forma responsiva.

🔙 Backend (Node.js + Express)
A API foi construída com Express, focando em métodos REST e validações essenciais:

GET, GET por ID, POST, DELETE e PATCH: Endpoints completos para manipulação de dados.

Validações inteligentes:

Verificação de ID obrigatório e válido.

Impedimento de duplicações, como ao tentar adicionar o mesmo livro aos favoritos.

Ao criar um novo livro é verificado se o mesmo tem os campos obrigatórios preenchidos.

🔔 Comunicação com o frontend: Os erros retornados pelo backend são tratados e exibidos no frontend com alert().
