import React from "react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";

export const TelaDashboard = () => {
  // Activity feed data
  const activityItems = [
    {
      icon: "https://c.animaapp.com/mao2em1ih8dNjx/img/check-document.png",
      text: 'Resultado-chave concluído: "Alcançar 95% de satisfação dos clientes no trimestre" foi marcado como concluído por Ana Beatriz – 11 de abril, 09:42',
    },
    {
      icon: "https://c.animaapp.com/mao2em1ih8dNjx/img/star-1.png",
      text: 'Novo OKR criado: "Expandir presença digital da marca" adicionado ao portfólio de metas estratégicas – 10 de abril, 17:30',
    },
    {
      icon: "https://c.animaapp.com/mao2em1ih8dNjx/img/add-1.png",
      text: 'Meta editada: "Aumentar engajamento nas redes sociais" teve sua descrição atualizada por Carlos Souza – 10 de abril, 15:12',
    },
    {
      icon: "https://c.animaapp.com/mao2em1ih8dNjx/img/landlord.png",
      text: 'Proprietário adicionado: Ana Lima foi atribuída à meta "Melhorar performance do time de vendas" – 10 de abril, 13:08',
    },
    {
      icon: "https://c.animaapp.com/mao2em1ih8dNjx/img/positive-dynamic.png",
      text: 'Progresso atualizado: "Reduzir tempo médio de atendimento de 8h para 4h" passou de 50% para 75% de conclusão – 9 de abril, 18:40',
    },
    {
      icon: "https://c.animaapp.com/mao2em1ih8dNjx/img/approval.png",
      text: 'Permissões alteradas: A meta "Desenvolver MVP do novo app" passou de Privado para Compartilhado com a equipe – 9 de abril, 14:05',
    },
    {
      icon: "https://c.animaapp.com/mao2em1ih8dNjx/img/filing-cabinet.png",
      text: 'OKR arquivado: "Lançar nova funcionalidade beta em março" foi movido para arquivados – 8 de abril, 10:33',
    },
    {
      icon: "https://c.animaapp.com/mao2em1ih8dNjx/img/calendar.png",
      text: 'Data ajustada: O prazo da meta "Reduzir churn em 20%" foi prorrogado para 30 de abril – 7 de abril, 16:20',
    },
  ];

  // Quarter data for chart
  const quarters = ["Q1", "Q2", "Q3", "Q4"];

  return (
    <div className="bg-[#f0f2f4] flex flex-row justify-center w-full">
      <div className="bg-[#f0f2f4] overflow-hidden w-[1280px] h-[832px]">
        <div className="relative w-full h-full -top-3.5">
          {/* Header */}
          <header className="w-full h-[68px] top-0 left-0 bg-transparent">
            <div className="relative w-full h-[68px] bg-[url(https://c.animaapp.com/mao2em1ih8dNjx/img/rectangle-5.svg)] bg-[100%_100%]">
              <Badge className="absolute top-[35px] left-[1197px] font-bold text-[#465eff] text-xs">
                ADM
              </Badge>

              <div className="absolute w-9 h-[27px] top-5 left-3.5" />

              <img
                className="absolute w-[29px] h-[29px] top-[27px] left-[1124px]"
                alt="Bot"
                src="https://c.animaapp.com/mao2em1ih8dNjx/img/bot.png"
              />

              <img
                className="absolute w-[17px] h-[17px] top-[33px] left-[1231px]"
                alt="Forward"
                src="https://c.animaapp.com/mao2em1ih8dNjx/img/forward.png"
              />
            </div>
          </header>

          {/* Sidebar */}
          <div className="absolute w-[50px] h-[832px] top-3.5 left-0 bg-[#465eff] overflow-hidden">
            <div className="absolute w-[51px] h-[54px] top-0 left-0 bg-[#fcfb30]">
              <img
                className="absolute w-3.5 h-3.5 top-5 left-4"
                alt="Menu"
                src="https://c.animaapp.com/mao2em1ih8dNjx/img/menu.svg"
              />
            </div>

            <div className="absolute w-7 h-[682px] top-[122px] left-[11px]">
              <img
                className="absolute w-[23px] h-[23px] top-[659px] left-0.5"
                alt="Fire exit"
                src="https://c.animaapp.com/mao2em1ih8dNjx/img/fire-exit.png"
              />

              <img
                className="absolute w-4 h-4 top-[552px] left-1.5"
                alt="Envelope"
                src="https://c.animaapp.com/mao2em1ih8dNjx/img/envelope.png"
              />

              <img
                className="absolute w-[18px] h-[18px] top-[516px] left-[5px]"
                alt="Help"
                src="https://c.animaapp.com/mao2em1ih8dNjx/img/help.png"
              />

              <img
                className="absolute w-[22px] h-[22px] top-[476px] left-[3px]"
                alt="Settings"
                src="https://c.animaapp.com/mao2em1ih8dNjx/img/settings.png"
              />

              <img
                className="absolute w-[21px] h-5 top-0 left-[3px]"
                alt="Dashboard layout"
                src="https://c.animaapp.com/mao2em1ih8dNjx/img/dashboard-layout.png"
              />

              <img
                className="absolute w-7 h-7 top-9 left-0"
                alt="Goal"
                src="https://c.animaapp.com/mao2em1ih8dNjx/img/goal.png"
              />

              <img
                className="absolute w-[19px] h-[19px] top-[79px] left-[5px]"
                alt="Test results"
                src="https://c.animaapp.com/mao2em1ih8dNjx/img/test-results.png"
              />

              <img
                className="absolute w-[18px] h-[18px] top-[119px] left-[5px]"
                alt="Christmas star"
                src="https://c.animaapp.com/mao2em1ih8dNjx/img/christmas-star.png"
              />
            </div>
          </div>

          <img
            className="absolute w-9 h-[27px] top-6 left-[38px] object-cover"
            alt="Bb"
            src="https://c.animaapp.com/mao2em1ih8dNjx/img/bb.png"
          />

          {/* Filter Button */}
          <Button
            variant="default"
            className="absolute h-[31px] top-[93px] left-[258px] bg-[url(https://c.animaapp.com/mao2em1ih8dNjx/img/rectangle-2.svg)] bg-[100%_100%] rounded-none p-0"
          >
            <span className="absolute top-[7px] left-[7px] font-['Montserrat',Helvetica] font-bold text-[#f0f2f4] text-[13px]">
              Filtro
            </span>
            <img
              className="absolute w-3.5 h-3.5 top-[9px] left-11"
              alt="Forward"
              src="https://c.animaapp.com/mao2em1ih8dNjx/img/forward-1.png"
            />
          </Button>

          {/* Main Title */}
          <h1 className="absolute top-[99px] left-[86px] font-['Montserrat',Helvetica] font-bold text-[#465eff] text-[15px] whitespace-nowrap">
            Dashboard Principal
          </h1>

          {/* OKR Visualization Panel */}
          <section className="absolute w-[1172px] h-[330px] top-[165px] left-[51px]">
            <Card className="absolute w-[640px] h-[137px] top-0 left-[35px] bg-white rounded-lg border border-solid border-[#909ba6]">
              <CardContent className="p-0">
                <p className="absolute w-[717px] top-[47px] left-0 font-['Montserrat',Helvetica] font-bold text-black text-xs text-center">
                  Os dashboards são suas ferramentas centrais para acompanhar
                  OKRs, metas e muito mais. <br />
                  Clique aqui para personalizar e visualizar os indicadores mais
                  importantes para você.
                </p>
                <img
                  className="absolute w-[23px] h-[23px] top-2.5 left-[642px]"
                  alt="Add"
                  src="https://c.animaapp.com/mao2em1ih8dNjx/img/add-1.png"
                />
              </CardContent>
            </Card>

            {/* Activity Feed Card */}
            <Card className="absolute w-[461px] h-[330px] top-0 left-[710px] bg-white rounded-lg border border-solid border-[#909ba6]">
              <CardContent className="p-0">
                <div className="absolute w-[408px] top-[21px] left-[758px] font-['Montserrat',Helvetica] font-bold text-black text-[10px]">
                  {activityItems.map((item, index) => (
                    <React.Fragment key={index}>
                      <div className="flex items-start mb-2">
                        <img
                          className="w-5 h-5 mr-2"
                          alt={`Activity icon ${index}`}
                          src={item.icon}
                        />
                        <p>{item.text}</p>
                      </div>
                      {index < activityItems.length - 1 && (
                        <Separator className="my-2" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
                <img
                  className="absolute w-[23px] h-[23px] top-[59px] left-[728px]"
                  alt="Add"
                  src="https://c.animaapp.com/mao2em1ih8dNjx/img/add-1.png"
                />
              </CardContent>
            </Card>
          </section>

          {/* Status Cards */}
          <Card className="absolute w-[301px] h-[137px] top-[341px] left-[87px] bg-white rounded-lg border border-solid border-[#909ba6]">
            <CardContent className="p-0">
              <h3 className="absolute top-3 left-[17px] font-['Montserrat',Helvetica] font-bold text-[#465eff] text-[15px] whitespace-nowrap">
                Em progresso
              </h3>
              <p className="absolute top-[91px] left-[61px] font-['Montserrat',Helvetica] font-bold text-[#465eff] text-[15px] whitespace-nowrap">
                Metas em andamento
              </p>
              <p className="top-[42px] left-[134px] text-black text-[40px] absolute font-['Montserrat',Helvetica] font-bold">
                2
              </p>
            </CardContent>
          </Card>

          <Card className="absolute w-[301px] h-[137px] top-[341px] left-[423px] bg-[#465eff] rounded-lg border border-solid border-[#909ba6]">
            <CardContent className="p-0">
              <h3 className="absolute top-3 left-[17px] font-['Montserrat',Helvetica] font-bold text-white text-[15px] whitespace-nowrap">
                Concluídas
              </h3>
              <p className="absolute top-[91px] left-[81px] font-['Montserrat',Helvetica] font-bold text-white text-[15px] whitespace-nowrap">
                Metas concluídas
              </p>
              <p className="top-[42px] left-[142px] text-white text-[40px] absolute font-['Montserrat',Helvetica] font-bold">
                1
              </p>
            </CardContent>
          </Card>

          {/* Section Titles */}
          <h2 className="absolute top-[135px] left-[86px] font-['Montserrat',Helvetica] font-bold text-[#465eff] text-[15px] whitespace-nowrap">
            Painéis de visualização geral de OKR
          </h2>

          <h2 className="absolute top-[135px] left-[761px] font-['Montserrat',Helvetica] font-bold text-[#465eff] text-[15px] whitespace-nowrap">
            Últimas atividades
          </h2>

          <h2 className="absolute top-[311px] left-[87px] font-['Montserrat',Helvetica] font-bold text-[#465eff] text-[15px] whitespace-nowrap">
            Status de Metas
          </h2>

          <img
            className="absolute w-[21px] h-[31px] top-[305px] left-[217px]"
            alt="Star"
            src="https://c.animaapp.com/mao2em1ih8dNjx/img/star.png"
          />

          <h2 className="absolute top-[503px] left-[91px] font-['Montserrat',Helvetica] font-bold text-[#465eff] text-[15px] whitespace-nowrap">
            Carga de OKR de Esforço vs Resultado por Trimestre
          </h2>

          {/* Chart Card */}
          <Card className="absolute w-[637px] h-[265px] top-[533px] left-[91px] bg-white rounded-lg border border-solid border-[#909ba6]">
            <CardContent className="p-0">
              <div className="absolute w-11 top-2.5 left-[549px] font-['Montserrat',Helvetica] font-bold text-[#3a3a3a] text-[8px] whitespace-nowrap">
                Resultado
              </div>

              <div className="absolute w-11 top-[23px] left-[550px] font-['Montserrat',Helvetica] font-bold text-[#3a3a3a] text-[8px] whitespace-nowrap">
                Esforço
              </div>

              <div className="absolute w-4 h-[9px] top-[11px] left-[528px] bg-[#465eff]" />
              <div className="absolute w-4 h-[9px] top-6 left-[528px] bg-[#df5e60]" />

              <div className="absolute w-[550px] h-[143px] top-[67px] left-[45px]">
                <div className="absolute w-[550px] h-[143px] top-0 left-0">
                  <Separator className="w-[550px] top-[142px] left-0 absolute" />
                  <Separator className="w-[550px] top-[88px] left-0 absolute" />
                  <Separator className="w-[550px] top-8 left-0 absolute" />

                  <div className="absolute w-[34px] h-[120px] top-[23px] left-[70px] bg-[#465eff]" />
                  <div className="absolute w-[34px] h-[93px] top-[50px] left-[26px] bg-[#df5e60]" />
                  <div className="absolute w-[34px] h-[110px] top-[33px] left-[200px] bg-[#465eff]" />
                  <div className="absolute w-[34px] h-[79px] top-16 left-[155px] bg-[#df5e60]" />
                  <div className="absolute w-[35px] h-[129px] top-[13px] left-[330px] bg-[#465eff]" />
                  <div className="absolute w-[34px] h-[55px] top-[87px] left-[285px] bg-[#df5e60]" />
                  <div className="absolute w-[35px] h-[129px] top-[13px] left-[330px] bg-[#465eff]" />
                  <div className="absolute w-[34px] h-[55px] top-[87px] left-[285px] bg-[#df5e60]" />
                  <div className="absolute w-[34px] h-[129px] top-[13px] left-[474px] bg-[#465eff]" />
                  <div className="absolute w-[34px] h-[142px] top-0 left-[474px] bg-[#465eff]" />

                  <div className="absolute top-[55px] left-[34px] font-['Montserrat',Helvetica] font-bold text-white text-[8px]">
                    54%
                  </div>
                  <div className="top-6 left-[78px] absolute font-['Montserrat',Helvetica] font-bold text-white text-[8px]">
                    65%
                  </div>
                  <div className="top-[65px] left-[163px] absolute font-['Montserrat',Helvetica] font-bold text-white text-[8px]">
                    51%
                  </div>
                  <div className="top-[34px] left-[209px] absolute font-['Montserrat',Helvetica] font-bold text-white text-[8px]">
                    60%
                  </div>
                  <div className="top-4 left-[339px] absolute font-['Montserrat',Helvetica] font-bold text-white text-[8px]">
                    70%
                  </div>
                  <div className="top-0.5 left-[483px] absolute font-['Montserrat',Helvetica] font-bold text-white text-[8px]">
                    82%
                  </div>
                  <div className="top-[88px] left-[293px] absolute font-['Montserrat',Helvetica] font-bold text-white text-[8px]">
                    43%
                  </div>
                </div>

                <div className="absolute w-[34px] h-[41px] top-[101px] left-[429px] bg-[#df5e60]">
                  <div className="top-0.5 left-2 absolute font-['Montserrat',Helvetica] font-bold text-white text-[8px]">
                    27%
                  </div>
                </div>
              </div>

              <Separator className="w-[550px] top-[50px] left-11 absolute" />

              <div className="absolute w-2 top-[42px] left-[31px] font-['Montserrat',Helvetica] font-bold text-black text-[8px]">
                6
              </div>
              <div className="w-2 top-[92px] left-[31px] text-black text-[8px] absolute font-['Montserrat',Helvetica] font-bold">
                4
              </div>
              <div className="w-2 top-[147px] left-[31px] text-black text-[8px] absolute font-['Montserrat',Helvetica] font-bold">
                2
              </div>
              <div className="w-2 top-[200px] left-8 text-black text-[8px] absolute font-['Montserrat',Helvetica] font-bold">
                0
              </div>

              {quarters.map((quarter, index) => (
                <div
                  key={index}
                  className={`absolute w-4 top-[220px] left-[${106 + index * 130}px] font-['Montserrat',Helvetica] font-bold text-black text-[8px]`}
                >
                  {quarter}
                </div>
              ))}

              <div className="absolute w-[66px] top-[242px] left-[527px] font-['Montserrat',Helvetica] font-bold text-black text-[8px]">
                Q1 : Trimestre
              </div>
            </CardContent>
          </Card>

          {/* Reports Card */}
          <Card className="absolute w-[462px] h-[265px] top-[533px] left-[760px] bg-white rounded-lg border border-solid border-[#909ba6]">
            <CardContent className="p-0">
              <div className="absolute w-[109px] h-5 top-[238px] left-[326px]">
                <Button variant="link" className="p-0">
                  <span className="absolute w-[101px] top-0.5 left-0 font-['Montserrat',Helvetica] font-bold text-[#465eff] text-[11px]">
                    Baixar relátorio
                  </span>
                  <img
                    className="absolute w-4 h-4 top-0 left-[93px]"
                    alt="Download"
                    src="https://c.animaapp.com/mao2em1ih8dNjx/img/download.png"
                  />
                </Button>
              </div>

              <h3 className="absolute w-[282px] top-3.5 left-[105px] font-['Montserrat',Helvetica] font-bold text-black text-[15px] whitespace-nowrap">
                Relátorio de Desenpenho de OKRs
              </h3>

              <div className="absolute w-[404px] top-[49px] left-[27px] font-['Montserrat',Helvetica] text-black text-[10px]">
                <span className="font-bold">
                  Relatório de Status de OKRs, KPIs e Metas
                  <br />
                  <br />
                  Status de OKRs:
                </span>

                <span className="font-normal">
                  {" "}
                  O total de OKRs cadastrados é (75%), 15 estão em andamento
                  (15%) e 10 atrasados (10%). A meta está confusa dentro da
                  faixa muito ampla; seria bom evitar falta de foco para
                  avançar.
                  <br />
                </span>

                <span className="font-bold">
                  <br />
                  KPIs de Desempenho:
                </span>

                <span className="font-normal">
                  {" "}
                  A satisfação dos stakeholders está baixa, situada em 85%, o
                  que é melhorável. O Lead Time poderia ser melhorado, com um
                  índice de 70%. Análise de impacto geral necessária.
                  <br />
                </span>

                <span className="font-bold">
                  <br />
                  Metas Atrasadas:{" "}
                </span>

                <span className="font-normal">
                  Além disso, o número de OKRs baixos está preocupante; atenção
                  contínua é necessária. Devemos prolongar o esforço nas metas
                  para garantir que permaneçam monitoradas e otimizadas.
                </span>
              </div>

              <Button
                variant="link"
                className="absolute w-[177px] h-[19px] top-60 left-4 p-0"
              >
                <span className="absolute w-[177px] top-0 left-0 rotate-[-0.18deg] font-['Montserrat',Helvetica] font-bold text-[#465eff] text-[10px]">
                  Gerar apresentação de OKR
                </span>
                <img
                  className="absolute w-3 h-3 top-0.5 left-[149px]"
                  alt="Presentation"
                  src="https://c.animaapp.com/mao2em1ih8dNjx/img/presentation.png"
                />
              </Button>
            </CardContent>
          </Card>

          <h2 className="absolute w-[110px] top-[503px] left-[760px] font-['Montserrat',Helvetica] font-bold text-[#465eff] text-[15px] whitespace-nowrap">
            Relatórios
          </h2>
        </div>
      </div>
    </div>
  );
};
