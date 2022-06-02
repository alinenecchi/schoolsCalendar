import React from "react";
import Head from "next/head";
import Footer from "../../components/organisms/footer";
import css from "./index.module.scss";
import HeaderNav from "../../components/molecules/header-nav";

export default function PrivacyPolicy(props) {
  const { className = "", children, ...other } = props;

  return (
    <>
      <Head>
        <title>Política de privacidade</title>
        <meta property="og:title" content="Política de privacidade" />
        <meta property="twitter:title" content="Política de privacidade" />

        <meta name="description" content="Política de privacidade" />
        <meta property="og:description" content="Política de privacidade" />
        <meta
          property="twitter:description"
          content="Política de privacidade"
        />
      </Head>
      <div className={css["privacy-policy-container"]} {...other}>
        <HeaderNav />
        <div className={css["container"]}>
          <div>
            <h1>
              <strong>POLÍTICA DE PRIVACIDADE - Modelo</strong>
            </h1>
            <p>
              Conforme as normas previstas na Lei 13.709/18, que versa sobre a
              proteção de dados e as demais legislações pertinentes,
              apresentamos a Política de Privacidade e Segurança do
              schoolscalendar
            </p>
            <p>
              Este documento é vinculado e integra as Condições e Termos de Uso
              deste site, sendo passível de alteração a qualquer momento para
              adequação em regras estabelecidas pelas legislações que
              estabelecem o modo de tratamento dos dados. O acesso, visita e
              permanência neste site/blog é de livre escolha e acontece conforme
              a vontade/desejo do usuário, sendo sua visita e prosseguimento no
              site, escolha deste usuário. Ficando ciente por meio deste
              documento que a partir do momento em que mantém o acesso e a
              permanência em qualquer uma das nossas páginas está
              automaticamente demonstrando estar de acordo, de forma explicita
              com todas as regras e termos trazidos na Política de Privacidade e
              Segurança descrita abaixo. Sendo seu direito a qualquer momento
              entrar em contato conosco para maiores informações do que aqui foi
              descrito, bem como esclarecimento de dúvidas que possam vir a
              existir.
            </p>
            <p>
              Esta Política de Privacidade foi modifica em 25 de Abril de 2022,
              criada pelo{" "}
              <a href="https://diegocastro.adv.br/">Advogado Diego Castro</a>, e
              utilizada com autorização neste site.
            </p>
            <h2>Informações Gerais:</h2>
            <p>
              Nosso site se compromete a cumprir e respeitar os princípios
              previstos no art. 6º da Lei Geral de Proteção de dados, estando
              eles abaixo elencados e esclarecidos conforme ao tratamento de
              dados realizado por este site/blog:
            </p>
            <p>
              <strong>I – Princípio da Finalidade: </strong>
              Este site/blog respeita o que prevê o princípio da finalidade
              trazido na legislação supracitada, realizando o tratamento com
              finalidade legítima e específica, informando por meio desta
              Política de Privacidade e Segurança de forma explicita, aos
              titulares dos dados que serão tratados o motivo do tratamento.
              Nenhum tratamento será realizado de forma incompatível com as
              finalidades que serão informadas neste documento.
            </p>
            <p>
              <strong>II – Principio da Necessidade: </strong>
              Coletamos e tratamos apenas os dados necessários para a realização
              das finalidades explicitas do nosso site, com o compromisso de
              coletar e tratar o mínimo de informações do usuário do nosso site.
              Utilizamos apenas as informações/dados pertinentes, proporcionais
              com a a atividade desempenhada por nós, sem exceder nenhum limite
              na relação existente entre o usuário e o nosso site/blog, sendo
              todo e qualquer dado coletado e tratado conforme as finalidades
              estabelecidas em nossas páginas.
            </p>
            <p>
              <strong>III – Principio da Adequação: </strong>
              Todo tratamento realizado em nossas páginas é compatível com as
              finalidades informadas para o usuário/cliente, respectivo titular
              dos dados, não sendo realizado nenhum tipo de ação ou mecanismo
              que seja não condizente e desrespeite o contexto de tratamento
              necessário.
            </p>
            <p>
              <strong> IV – Não discriminação: </strong>
              Os dados que coletamos, armazenamos e que realizamos qualquer tipo
              de tratamento não são utilizados para nenhum fim discriminatório,
              vexatório, ilícito ou abusivo.
            </p>
            <p>
              <strong>V – Principio da Qualidade dos dados: </strong>
              Garantimos aos titulares dos dados clareza e relevância no momento
              da coleta e do tratamento dos dados, além da possibilidade de
              atualização, conforme se fizer necessário para que seja cumprida a
              finalidade do tratamento, conforme a atividade que for realizada
              pelo usuário/cliente em nosso site.
            </p>
            <p>
              <strong>VI – Principio do Livre Acesso: </strong>
              Esclarecemos por meio desta Política de Privacidade e Segurança
              que garantimos a todos os titulares de dados que realizamos o
              tratamento, a consulta de maneira gratuita e fácil, a qualquer
              momento em que desejarem, por meio de um canal específico, sobre o
              tratamento realizado com os seus dados, assim como qualquer
              informação referente aos dados coletados, podendo inclusive
              acontecer atualização dos dados pessoais do titular, sem que a
              necessidade de qualquer requisição por parte do nosso site.
            </p>
            <p>
              <strong>VII – Principio da Prevenção: </strong>
              Adotamos e zelamos pela prevenção de todo e qualquer ato que possa
              gerar dano aos dados coletados dos usuários/cliente, com medidas
              implantadas em busca de prevenir qualquer situação incomoda,
              ilegal, ou que gere qualquer espécie de prejuízo/dano aos dados
              pessoais que realizamos tratamos.{" "}
            </p>
            <p>
              <strong>VIII – Principio da Transparência: </strong>
              Trabalhamos com clareza, precisão, exatidão e veracidade em todas
              as informações trazidas sobre o tratamento de dados, sendo o seu
              acesso fácil e disponível ao usuário/cliente nesta Política de
              Privacidade, bem como nos Termos de Uso no nosso site/blog. As
              informações respectivas aos agentes de tratamento seguem o mesmo
              critério de transparência acima elencados. Todas as informações
              trazidas sobre o tratamento e os agentes de tratamento respeitam
              os segredos comerciais e industriais.
            </p>
            <p>
              <strong>IX – Principio da Segurança: </strong>
              Informamos que utilizamos todas as medidas cabíveis e possíveis na
              seara técnica e administrativa, visando a maior proteção dos dados
              pessoais, desde o momento em que temos acesso a eles. As técnicas
              utilizadas buscam proteger os dados pessoais de todo e qualquer
              acesso não autorizado, bem como de situações que possam causar
              danos ao titular dos dados, ainda que acidentais ou ilícitas. As
              técnicas que utilizamos buscam trazer segurança e proteção ao
              titular dos dados que realizamos o tratamento, visto que são
              tomadas em busca de prevenir e proteger as informações coletadas
              de qualquer situação ilícita de perda, destruição,
              compartilhamento, comunicação ou difusão não autorizada.
            </p>
            <p>
              <strong>
                X – Principio da responsabilização e prestação de contas:{" "}
              </strong>
              O agente irá demonstrar e comprovar que cumpre e respeita todas as
              normas cabíveis a Proteção de Dados Pessoais, adotando medidas
              adequadas para isso de maneira eficaz. O nosso site realiza todas
              as etapas referentes ao tratamento de dados pessoais dos
              usuários/clientes que o acessam, sem desrespeitar qualquer norma
              ou princípio presente na Lei 13.709/2018, tendo de forma clara e
              objetiva o fundamento da finalidade para o tratamento de cada
              informação pessoal coletada.
            </p>
            <h2>Sobre o Nosso site/blog</h2>
            <p>
              Nosso site/blog possuí textos, vídeos, imagens, áudios, e-books,
              bem como os demais conteúdos que você poderá visualizar ao acessar
              nossas abas, todos sem nenhum teor discriminatório, ilícito ou
              difamatório. Traçamos planos e metas a serem seguidos para
              apresentar um conteúdo de valor, com informações relevantes
              referente ao tema aqui abordado. Assumimos o compromisso por meio
              deste documento de proporcionar o melhor resultado no momento da
              navegação do nosso usuário/cliente, nos comprometendo a agir e
              trabalhar com total segurança e respeitando a privacidade dos
              dados pessoais tratados.{" "}
            </p>
            <p>
              Tenha atenção a todas as informações disponibilizadas nesta
              página, pois é por meio dela que trazemos de forma clara e direta
              como acontecem todas as etapas de tratamento das informações
              pessoais coletadas, inclusive deixando claro o compartilhamento e
              divulgação (em alguns casos) que realizamos com parceiros. (caso
              tenham parceiros internacionais mencione – não apenas no âmbito
              nacional, como internacional, que mesmo fora do nosso País,
              respeitam todas as legislações que versam sobre o tratamento de
              dados). A qualquer momento está Política de Privacidade e
              Segurança poderá ser modificada, conforme atualizações normativas
              ou alterações em nossa Política Interna, razão pela qual
              convidamos ao (a) nosso (a) usuário (a)/ cliente a consultar este
              documento periodicamente para que tenham ciência imediata de
              qualquer alteração que venha a acontecer.{" "}
            </p>
            <h2>
              Informações sobre o controlador e Responsável pelo Tratamento de
              dados
            </h2>
            <p>
              Conforme previsão do art. 5º da Lei Geral de Proteção de dados
              trazemos aqui informações sobre o controlador definido pela
              legislação “in verbis”: Art. 5º, VI – controlador: pessoa natural
              ou jurídica, de direito público ou privado, a quem competem as
              decisões referentes ao tratamento de dados pessoais; (coloque o
              nome do site aqui) tem como CONTROLADOR e responsável por definir
              e tomar qualquer decisão referente ao tratamento de dados
              realizado por nós e por nossa equipe o Sr. (coloque o nome do
              CONTROLADOR aqui ou a EMPRESA responsável trazendo informações de
              contato). O CONTROLADOR é um profissional/empresa de nossa inteira
              confiança, que está ciente de todas as normas trazidas na
              legislação que realiza a proteção de dados, além de ter total
              ciência e conhecimento das normas estabelecidas na nossa Política
              Interna. Já o tratamento de dados coletados em nosso site é
              realizado pelo Sr. (coloque o nome da pessoa responsável pelo
              tratamento de dados aqui, caso se trate de uma empresa coloque o
              nome da empresa, trazendo suas informações como localização e
              contato)
            </p>
            <h2>
              Informações sobre o Conteúdo do site/blog e Classificação
              Indicativa:
            </h2>
            <p>
              O conteúdo trazido é direcionado para pessoas que tenham
              interesse, curiosidade ou busquem informações a respeito do
              conteúdo do nosso site. Todo conteúdo abordado em nossas páginas é
              produzido por nossa equipe ou por parceiros, respeitando as
              legislações nacionais, bem como, os valores éticos e humanos, além
              dos princípios morais, zelando pela transparência e veracidade em
              todas as informações trazidas. O nosso site, bem como o seu
              conteúdo e os parceiros são indicados para pessoas com idade a
              partir de 18 anos. Caso você não tenha 18 anos de idade completos
              tenha ciência de que é necessário permissão do seu responsável
              para você ter acesso aos conteúdos trazidos em nossas páginas,
              sendo de total responsabilidade DO RESPONSÁVEL pelo menor de idade
              o acesso ao nosso material, bem como os conteúdos trazidos por
              nossos parceiros.{" "}
            </p>
            <h2>Sobre o tratamento de dados:</h2>
            <p>
              Nosso site trabalha com determinadas operações e funcionalidades
              das quais se fazem necessárias o tratamento de dados pessoais,
              desde a etapa da sua coleta até a sua eliminação, ou
              armazenamento, como será discorrido abaixo:
            </p>
            <h2>Da coleta de dados:</h2>
            <p>
              Realizamos a coleta de dados dos usuários/visitantes/clientes do
              nosso site não apenas para realização dos serviços que prestamos,
              como também por segurança, já que qualquer ato irregular ou
              ilícito praticado por ele poderá ser passível de consequências
              especificas para o responsável. A utilização de determinadas
              funções do nosso site depende expressamente da coleta de dados dos
              usuários como: nome, telefone de contato, e-mail, bem como os
              demais dados cabíveis para a finalidade que se apresenta no site.
              A Coleta de Dados pode acontecer por todas as áreas do nosso
              site/blog, uma vez que ela acontece por meio do preenchimento de
              formulários, FAQ, envio de dúvidas, Chat ou cadastro.
              Cientificamos ainda, que ao preencher formulário/FAQ/Cadastro ou
              qualquer tipo de área referente ao retorno de contato ou duvidas
              em nosso site, assim como o ACEITE dos COOKIES que utilizamos, O
              USUÁRIO /CLIENTE demonstra A CONCORDÂNCIA de forma objetiva, clara
              e expressa da coleta e tratamento de seus dados que será realizada
              pelo site/equipe do site/ parceiros do site respeitando todas as
              normas de proteção aos dados pessoais. É indispensável ainda,
              informarmos que trabalhamos com ferramenta de análise de dados
              (analytics ou similar) para monitorar os resultados de acessos,
              comentários, entre outras informações sobre o desempenho do nosso
              site/blog.{" "}
            </p>
            <h2>Outros dados</h2>
            <p>
              Nosso site também realiza a coleta e o tratamento de dados
              referentes ao dispositivo e vinculados ao registro de acesso.{" "}
            </p>
            <ul>
              <li>
                <p>
                  <strong>Dados do dispositivo: </strong>
                  Coletamos dados vinculados ao dispositivo que acessa ao nosso
                  site, principalmente por motivo de segurança – dados como:
                  modelo do hardware, sistema operacional, identificadores de
                  dispositivo (localização e etc.).{" "}
                </p>
              </li>
              <li>
                <p>
                  <strong>Registros de Acesso: </strong>Coletamos e tratamos
                  ações vinculadas ao uso de dados, desde a sua inclusão, até a
                  exclusão de dados, IP do usuário/cliente, data (dia/mês/ano),
                  hora do acesso realizado.{" "}
                </p>
              </li>
              <li>
                <p>
                  <strong>Dados de navegação: </strong>
                  Realizamos a coleta e o tratamento de dados relativos à
                  navegação, assim podemos desempenhar uma melhor experiencia
                  para o usuário/cliente – navegador onde o usuário realizou o
                  acesso e páginas acessadas.{" "}
                </p>
              </li>
            </ul>

            <h2>Forma de coleta de dados</h2>
            <p>
              A coleta de dados dos nossos usuários/cliente acontece respeitando
              todos os princípios e normas trazidos na Lei Geral de Proteção de
              Dados, com a condição expressa de consentimento livre e espontâneo
              do usuário para isso, visto que não realizamos nenhum tratamento
              sem permissão do usuário/cliente ou seu responsável. Não
              utilizamos nenhum meio coercivo, autoritário, opressor, repressivo
              ou abusivo em busca de receber o consentimento do usuário para o
              tratamento de seus dados. A tabela abaixo informa como acontece a
              coleta dos dados:
            </p>

            <table>
              <tbody>
                <tr>
                  <td>
                    <p>
                      <strong>Dado</strong>
                    </p>
                  </td>
                  <td>
                    <p>
                      <strong>Como acontece a coleta</strong>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Dados pessoais do usuário</p>
                  </td>
                  <td>
                    <p>
                      Coletados por meio de formulários, FAQS, Fale Conosco, e
                      etc. (Coloque aqui o modo como acontece a coleta dos dados
                      do usuário){" "}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Dados do dispositivo</p>
                  </td>
                  <td>
                    <p>
                      Coletados/Transmitidos/Transferidos pelo acesso ao serviço
                      que acontece por meio da internet
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Registro de acesso</p>
                  </td>
                  <td>
                    <p>
                      Coletado/Transmitidos/Transferidos pelo acesso ao serviço
                      que acontece por meio da internet
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Dados de navegação</p>
                  </td>
                  <td>
                    <p>
                      Coletados por meio de cookies durante a navegação no site.
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
            <p>
              A coleta de dados pessoais pode acontecer em diversos locais,
              páginas e abas do nosso site, por meio de preenchimento de
              formulários, FAQS, chat e cadastros necessários para o envio de
              materiais, realização de compras ou envio de informações.{" "}
            </p>
            <p>
              O registro de acesso, os dados do dispositivo são coletados para a
              segurança do usuário/cliente bem como do proprietário do site e
              toda a sua equipe por meio do acesso ao serviço que
              disponibilizamos, que acontece no momento do acesso a nossa
              página. Como buscamos conhecer melhor o nosso público trabalhamos
              com alguns mecanismos e plataformas que realizam a coleta de dados
              de nossos usuários/cliente automaticamente diretamente pelo
              sistema, sendo respeitadas todas as regras da LGPD, assim como a
              privacidade do usuário, proporcionando todos os meios técnicos e
              administrativos de segurança.
            </p>
            <p>
              Dados de navegação são coletados pelos nossos cookies a partir do
              momento em que se inicia a navegação no nosso site/blog.{" "}
            </p>
            <h2>Finalidade do tratamento dos dados pessoais</h2>
            <p>
              Todos os dados que realizamos tratamentos são utilizados
              respeitando os princípios da Lei Geral de Proteção de Dados,
              principalmente o da finalidade, adequação e necessidade, sendo
              mantidos apenas em nosso sistema até o momento em que a sua
              finalidade continuar a existir.{" "}
            </p>
            <table>
              <tbody>
                <tr>
                  <td>
                    <p>
                      <strong>Dado/Informações</strong>
                    </p>
                  </td>
                  <td>
                    <p>
                      <strong>Finalidade</strong>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Dados do usuário/cliente</p>
                  </td>
                  <td>
                    <p>
                      Identificar o usuário/cliente para a finalidade de
                      cadastro/envio de materiais/respostas de dúvidas/envio de
                      novidades e etc. (nesta parte defina a finalidade do
                      tratamento de dados dos usuários)
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Dados do dispositivo</p>
                  </td>
                  <td>
                    <p>
                      Trazer um melhor acesso ao usuário, pois através dos dados
                      coletados podemos adequar melhor o site/blog ao
                      dispositivo/navegador do usuário/cliente (nesta parte
                      defina a finalidade do tratamento dos dados do
                      dispositivo)
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Registro de acesso</p>
                  </td>
                  <td>
                    <p>
                      Por meio destes dados proporcionamos maior segurança aos
                      proprietários do site e aos usuários, pois assim podemos
                      identificar qualquer ato que aconteça dentro do nosso
                      site/blog (nesta parte defina a finalidade dos dados
                      coletados do acesso ao site)
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Informações de Navegação</p>
                  </td>
                  <td>
                    <p>
                      Através dessas informações conhecemos melhor o nosso
                      usuário, podendo passar-lhe conteúdo que ele tem
                      interesse, bem como indicar serviço dos nossos parceiros
                      que ele demonstre preferência, que serão encontradas por
                      meio das páginas que ele mais acessou. (nesta parte
                      discorra qual a finalidade do tratamento realizado com as
                      informações de navegação).
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
            <p>
              Os dados dos usuários são coletados e tratados unicamente com a
              finalidade para qual eles são fornecidos, sendo explicito em cada
              parte do nosso site/blog para o que servirá o dado fornecido seja
              por meio de cadastro, FAQ, envio de formulários, envios de
              novidades e etc. Os dados do dispositivo são tratados para que
              possamos proporcionar a melhor experiência no seu acesso ao site,
              uma vez que é por meio dele que podemos adequar a visualização do
              site/blog ao dispositivo/navegador utilizado. Os registros de
              acesso são itens imprescindíveis no momento da realização de
              coleta e tratamento realizado pelo nosso site/blog, pois é por
              meio dele que podemos proporcionar maior segurança para os
              usuários e para a nossa equipe, uma vez que por meio desses dados
              pode identificar informações como endereço de IP, data, hora,
              atividade realizada e etc., em qualquer área do nosso site/blog,
              podendo objetivar qualquer ato ilícito que possa vir a acontecer.
              As informações de navegação são a melhor forma de trazer conteúdo
              nosso e dos nossos parceiros para você, pois é através das
              informações de navegação que dividimos para cada usuário notícias,
              publicidades entre outros materiais de sua preferência. Essa
              preferência é objetivada pelos dados encontrados em páginas mais
              acessadas pelo usuário/cliente.
            </p>
            <h2>Tratamento realizado nos dados</h2>
            <p>
              O tratamento de dados realizados no nosso site/blog respeita todas
              as normas previstas na legislação de proteção de dados, tendo base
              legal para ser realizado, acontecendo apenas com consentimento do
              usuário. Todos os dados tratados são disponíveis para alteração e
              atualização a qualquer momento, inclusive durante todo o seu
              armazenamento. Todos os dados coletados serão armazenados durante
              … (coloque o período de armazenamento dos dados) podendo ser
              alterado conforme a necessidade do serviço prestado, ou por motivo
              de qualquer disposição que possa vir a existir. Veja a descrição
              do modo de tratamento realizado na tabela abaixo:
            </p>
            <table>
              <tbody>
                <tr>
                  <td>
                    <p>
                      <strong>Dado/Informação</strong>
                    </p>
                  </td>
                  <td>
                    <p>
                      <strong>Tratamento realizado</strong>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Dados Pessoais</p>
                  </td>
                  <td>
                    <p>
                      Coleta, armazenamento, compartilhamento, comunicação…
                      (neste tópico você discorre o tratamento realizado com os
                      dados pessoais coletados)
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Dados do dispositivo</p>
                  </td>
                  <td>
                    <p>
                      Coleta, armazenamento, processamento, compartilhamento,
                      comunicação de informações de dispositivos que visitam
                      nosso site/blog (coloque aqui o modo como é realizado o
                      tratamento dos dados do dispositivo)
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Dados de Navegação</p>
                  </td>
                  <td>
                    <p>
                      Coleta, armazenamento, processamento, compartilhamento,
                      comunicação de informações vinculadas as preferências e
                      comportamento do usuário/visitante que acessa ao nosso
                      site/blog (discorra a respeito de como é realizado o
                      tratamento dos dados de navegação)
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Informações de Navegação</p>
                  </td>
                  <td>
                    <p>
                      Através dessas informações conhecemos melhor o nosso
                      usuário, podendo passar-lhe conteúdo que ele tem
                      interesse, bem como indicar serviço dos nossos parceiros
                      que ele demonstre preferência, que serão encontradas por
                      meio das páginas que ele mais acessou. (nesta parte
                      discorra qual a finalidade do tratamento realizado com as
                      informações de navegação).
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
            <h2>Dados não coletados</h2>
            <p>
              Respeitando os princípios contidos no início desta Política de
              Privacidade e Segurança não realizamos a coleta de nenhum dado que
              não seja necessário para os serviços que prestamos, ou que tenha
              finalidade diversa das informadas. Não coletamos dados sensíveis,
              exceto em casos onde houver determinação legal para isso, sendo
              informado o usuário de forma expressa da necessidade de tratamento
              caso venha a existir, bem como o tratamento que será realizado com
              ele.{" "}
            </p>
            <h2>Compartilhamento/divulgação/publicação dos dados coletados</h2>
            <p>
              Respeitamos todos os limites previstos na Lei Geral de Proteção de
              dados referentes ao compartilhamento/divulgação ou publicação de
              dados coletados por nós, agindo de boa-fé e moralmente sem nenhuma
              intenção de causar dano ao nosso usuário/cliente. Os dados serão
              compartilhados apenas com parceiros, se necessário, sendo ciente o
              usuário de que concede o compartilhamento dos seus dados ao
              aceitar preencher formulários em nosso site/blog em troca de
              materiais gratuitos. Os dados coletados e compartilhados conforme
              informação mencionada acima podem gerar retorno monetário ao
              proprietário e a equipe do site/blog, visto que ao preencher
              formulários em troca de materiais torna-se direito deste site/blog
              compartilhar as informações fornecidas em busca de gerar renda
              para manter este projeto. Em casos previstos em leis, boletim, ou
              caso recebamos algum tipo de determinação de autoridade pública ou
              por meio de alguma determinação regulatória é realizado o
              compartilhamento de dados, a publicação ou divulgação. O titular
              tem direito de permitir o compartilhamento e o acesso de seus
              dados a um terceiro, desde que informe de maneira expressa a
              permissão que deu ao titular. Em situações onde somos informados
              que há investigação criminal ao ser requisitada cooperação do
              nosso site, deixamos cientes os nossos usuários/clientes que
              cooperamos do modo como nos for requisitado.{" "}
            </p>
            <h2>Sobre os nossos parceiros</h2>
            <p>
              Todos os parceiros que trabalham conosco respeitam as normas
              previstas na Lei Geral de Proteção de Dados, bem como as demais
              legislações que tratam sobre esse assunto. Informamos que o nosso
              site contém links e hiperlinks de nossos parceiros, ao clicar em
              algum desses links ou hiperlinks você é direcionado a um site
              externo, que não possui nenhum vínculo com o nosso site, tendo
              Política de Privacidade e Segurança, Política Interna e Termos de
              Uso diferente dos nossos. Não temos nenhum poder ou informações
              para discorrer do modo como acontece o tratamento de dados pelos
              nossos parceiros, por isso busque conhecer a Política de
              Privacidade, Termos de Uso, bem como os demais documentos que
              versam sobre o tratamento de dados deles.{" "}
            </p>
            <h2>Sobre a nossa Equipe</h2>
            <p>
              Nossa equipe tem ciência de todos os mecanismos técnicos e
              administrativos que devem ser utilizados no tratamento de dados,
              pois informamos em nossa Política Interna, conhecida por todos os
              nossos colaboradores o modo como deve acontecer todas as etapas do
              tratamento de dados, respeitando a privacidade e todas as normas
              trazidas na Lei 13.709/18. OBS: Toda equipe que trabalha conosco
              tem conhecimento de todas as práticas e técnicas que devem ser
              utilizadas no tratamento dos dados que coletamos, pois todos
              tiveram e continuam a ter acesso a nossa Política Interna e
              Política de Governança, bem como possuem treinamentos específicos
              para isso, sendo que qualquer ato (realizado por alguém que
              participe da nossa equipe) considerado ilícito ou danoso ao
              titular de dados gerara responsabilização direta e será motivo
              cabível para demissão com justa causa.
            </p>
            <h2>Segurança no Tratamento de Dados</h2>
            <p>
              O nosso site tem o compromisso de realizar toda e qualquer medida
              técnica, administrativa e institucional referente a proteção de
              dados pessoais. As técnicas de segurança utilizadas protegem os
              dados do usuário/cliente de acessos por terceiros não autorizados,
              bem como de qualquer ocasião que possa trazer algum tipo de
              modificação, destruição, difusão, compartilhamento, divulgação,
              comunicação dos dados sem autorização e desrespeitando a Lei Geral
              de Proteção de Dados. Todas as medidas de proteção e segurança são
              tomadas especificadamente para o dado coletado, respeitando o
              contexto e a finalidade que essa informação possui. O nosso site
              aplica criptografia e/ou firewall proporcionando assim a
              transmissão de maneira segura, privativa e confidencial. As
              transmissões que acontecem entre o transmissor e o
              usuário/clientes acontecem de maneira totalmente cifrada, em busca
              de proteger os dados coletados. Nós se compromete a avisar ao
              titular dos dados de qualquer violação ou acesso suspeito que
              possa causar algum risco de dano aos direitos e liberdades
              pessoais do titular. Disponibilizamos o canal de comunicação no
              final deste texto para que o nosso usuário/cliente possa informar
              qualquer situação que identifique falha, vulnerabilidade na
              segurança ou defeito na realização do tratamento dos dados
              coletados.{" "}
            </p>
            <h2>Cookies e Newlestter</h2>
            <p>
              Os cookies são arquivos que possuem tamanhos pequenos e são
              enviados pelo nosso site ao seu computador, para que assim
              possamos armazenar informações de navegação e os dados do
              usuário/cliente necessários para o serviço que desempenhamos. Os
              cookies são o meio pelo qual realizamos o registro de dados e
              preferenciais dos nossos usuários/clientes de modo rápido para que
              possamos proporcionar uma experiência adequada ao ser realizado o
              acesso a nossa página, trazendo inclusive serviços relacionados as
              pesquisas que você faz em nosso site/blog. Informamos ainda, que
              nem todos os cookies trazidos neste site/blog realiza a coleta e o
              armazenamento de dados pessoais, visto que alguns dos cookies
              trazidos são utilizados para o desempenho de algum dos serviços
              que prestamos. A “newlestter” é o meio pelo qual notificamos e
              informamos os nossos usuários/clientes de qualquer atualização que
              realizamos. Os dados informados para a “newlestter” são utilizados
              apenas com essa finalidade, sem qualquer destinação contrária ou
              que desrespeite a legislação de Proteção de Dados. Você não é
              obrigado a aceitar os “cookies” ou a “newlestter”, é de sua livre
              escolha optar ou não pelo registro de “cookies”, caso não deseje
              que ele aconteça, utilize a opção em seu navegador/ aparelho de
              desativação do registro de cookies. Informamos que a desativação
              dos cookies pode lhe trazer uma experiência incompleta ou com
              falhas na sua visita ao nosso site/blog, além de não trazer o
              desempenho correto das ferramentas e funções que disponibilizamos
              em nossas páginas. A desativação dos cookies pode ocasionar ainda
              prejuízos na prestação do nosso serviço fim, bem como, em alguns
              casos não poderemos lhe proporcionar uma experiência mais adequada
              as suas preferências pois não teremos acesso a elas.{" "}
            </p>
            <h2>Tratamento de dados para outras finalidades</h2>
            <p>
              Respeitando o que prevê a Lei Geral de Proteção de Dados
              informamos aos nossos usuários/cliente que podemos realizar o
              tratamento de seus dados para finalidades diversas posteriormente,
              sem que isso cause qualquer dano ou desrespeito ao titular dos
              dados, informando abaixo a finalidade de uso posterior das
              informações coletadas. As informações que coletamos sobre o
              titular, dispositivo, navegação, localização e etc., podem
              continuar a ser utilizadas para que desenvolvamos a prestação de
              serviços mais aprimorados e de uma melhor experiência para o
              usuário/cliente em nossa página. Caso o titular dos dados requeira
              a exclusão de seus dados pode entrar em contato conosco pelo
              e-mail informado nesta Política de Privacidade. Após o
              requerimento do titular na exclusão de seus dados acontecer,
              anonimizaremos os dados, sendo que esses continuarão em nossos
              arquivos de modo anonimizado, podendo ser utilizados futuramente
              com a finalidade de pesquisa, geração de estatísticas, divulgação
              de informações especificas, e ainda, em publicações.{" "}
            </p>
            <h2>Consentimento do usuário</h2>
            <p>
              O usuário/cliente ao acessar o nosso site/blog demonstra está de
              acordo com todas as informações contidas em nossa Política de
              Privacidade e Termos de Uso, bem como concede de livre e
              espontânea vontade que seus dados sejam tratados pela nossa equipe
              respeitando os princípios da finalidade, necessidade e adequação.
              É livre o consentimento do usuário/cliente, uma vez que não
              utilizamos de nenhum meio de coação, obrigatoriedade, indução,
              constrangimento, ameaça ou imposição para que o usuário/cliente
              conceda e permita que seja realizado o tratamento de seus dados.{" "}
            </p>
            <h2>Eliminação de dados</h2>
            <p>
              Caso o usuário/cliente não permita o armazenamento de seus dados,
              pode entrar em contato conosco por meio dos canais de contato
              abaixo: E-mail: (informe o e-mail para ser requerida a eliminação
              dos dados) Telefone: (informe o telefone para o titular dos dados
              entre em contato e requeira a eliminação de seus dados) Após o
              requerimento de eliminação de dados, temos o prazo de … (coloque a
              quantidade de dias necessárias para que o dado seja eliminado ou
              anonimizado) dias para que os dados sejam eliminados ou
              anonimizados.
            </p>
            <h2>Canais de Contato e encarregado</h2>
            <p>
              Disponibilizamos canais de contato para o nosso usuário/cliente em
              busca de termos um relacionamento claro e cordial, nos
              disponibilizando para esclarecer qualquer dúvida sobre o nosso
              site, bem como sobre o modo como realizamos o tratamento de seus
              dados. Buscamos por meio desse profissional ter uma comunicação
              melhor e mais direta com os nossos usuários/clientes.
              Disponibilizamos abaixo Canais de Atendimento para você poder
              entrar em contato com o nosso responsável pelo controle de dados:
              (inserir nome do responsável) E-mail: (coloque o e-mail para
              contato aqui) Telefone: (coloque o número de telefone aqui) Está
              Política de Privacidade e Segurança passa a ter validade a partir
              de 25 de abril de 2022 com validade indeterminada.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
