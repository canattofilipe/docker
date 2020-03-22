Conceitos
=========

| **Processo:** Abstração que representa um programa em execução.
| **Container:** São processos isolados que compartilham  os recursos do computador host, como kernel, sistema de arquivos e a biblioteca padrao.
| Um container docker possui tudo que um programa precisa para funcionar: codigo, ferramentas, dependencias e configuração. Tem a função de isolar o programa do seu ambiente e garantir que ele funcione da mesma forma em diferentes ambientes, como por exemplo desenvolvimento e produção.
| **Docker:** Docker é uma ferramenta para gereciamento de containers. Conteinerzação não é um conceito novo, ele ja ja existia no ecossistema Linux, o Docker facilitou a criação e gerenciamento
de containers através de interfaces amigaveis como REST API, CLI e dockerfiles.

| **Porque não usar uma VM:** O ganho que sem tem ao usar docker ao invés de uma VM é a economia de recursos
computacionais, uma VM terá seu pŕoprio sistema operacional completo, com kernel, bibliotecas e softwares padrões (por exemplo o gedit, nano, interface gráfica ...).
Colocar tudo isso em memoria é pagar um custo alto. Quando se usa docker se isola ambientes de uma maneira mais eficiente colocando
dentro do container apenas oque faz sentido, imagine que seu container precisa conter um web-service que devolve informações de clientes, o container 
precisaria apenas de um distribuição linux Ubuntu, TomCat, o respectivo .jar e um banco de dados. Isso já seria o suficiente para isolar um ambiente e garantir que ele funcione em qualquer outro sistema operacional baseado em Linux.
