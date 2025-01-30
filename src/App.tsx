import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Shield,
  Users,
  TrendingUp,
  Lock,
  LineChart as ChartLineUp,
  Rocket,
  Award,
  DollarSign,
  Bot,
  CheckCircle,
  AlertCircle,
  X
} from 'lucide-react';

function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleTelegramClick = () => {
    window.open('https://t.me/fintechxy', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowModal(false)} />
          <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl p-6 max-w-md w-full">
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="text-center">
              <AlertCircle className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Plataforma em Desenvolvimento</h3>
              <p className="text-gray-300 mb-4">
                A FinTechX está em fase final de desenvolvimento. Cadastre-se para ser notificado quando a plataforma for lançada!
              </p>
              <button 
                onClick={() => setShowModal(false)}
                className="w-full px-6 py-3 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-lg font-semibold hover:opacity-90 transition-all"
              >
                Entendi
              </button>
            </div>
          </div>
        </div>
      )}

      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 bg-[url('https://images.wallpaperscraft.ru/image/single/dron_kamera_tehnologii_171576_3840x2400.jpg')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
              Bem Vindo a FintechX -Invista de Forma Inteligente e Ganhe R$30 ao se Cadastrar!
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              A melhor plataforma de investimentos para você multiplicar seus ganhos com total segurança e inovação!
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
              <button 
                onClick={() => setShowModal(true)}
                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-lg font-bold text-lg hover:opacity-90 transition-all flex items-center justify-center gap-2"
              >
                Cadastre-se Agora e Receba R$30 de Bônus <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={handleTelegramClick}
                className="px-8 py-4 bg-white/10 backdrop-blur rounded-lg font-bold text-lg hover:bg-white/20 transition-all"
              >
                Acesse nossa Comunidade no Telegram
              </button>
            </div>
            <div className="bg-white/5 backdrop-blur rounded-xl p-6 max-w-2xl mx-auto">
              <AlertCircle className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Plataforma em Manutenção</h3>
              <p className="text-gray-300 mb-4">Estamos finalizando os últimos ajustes para trazer a melhor experiência para você!</p>
              <div className="grid grid-cols-4 gap-4 mb-6">
                {Object.entries(timeLeft).map(([unit, value]) => (
                  <div key={unit} className="bg-white/10 rounded-lg p-3">
                    <div className="text-2xl font-bold">{value}</div>
                    <div className="text-sm text-gray-400">{unit}</div>
                  </div>
                ))}
              </div>
              <button className="px-6 py-3 bg-blue-600 rounded-lg font-semibold hover:bg-blue-700 transition-all">
                Receber Notificação Quando Lançar
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-800/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Por Que Escolher Nossa Plataforma de Investimentos?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="w-12 h-12 text-emerald-400" />,
                title: "R$30 de Bônus Imediato",
                description: "Cadastro gratuito com saldo inicial para investir"
              },
              {
                icon: <Users className="w-12 h-12 text-blue-400" />,
                title: "Ganhos com Indicações",
                description: "Convide amigos e ganhe % do primeiro depósito deles"
              },
              {
                icon: <Bot className="w-12 h-12 text-purple-400" />,
                title: "Produtos Inteligentes",
                description: "Estratégias automatizadas para multiplicar seu capital"
              },
              {
                icon: <Shield className="w-12 h-12 text-red-400" />,
                title: "Segurança e Confiabilidade",
                description: "Tecnologia de criptografia avançada"
              },
              {
                icon: <TrendingUp className="w-12 h-12 text-yellow-400" />,
                title: "Retornos Otimizados",
                description: "Modelos exclusivos que maximizam ganhos"
              },
              {
                icon: <Lock className="w-12 h-12 text-green-400" />,
                title: "Proteção Total",
                description: "Seus investimentos sempre protegidos"
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white/5 backdrop-blur rounded-xl p-6 hover:bg-white/10 transition-all">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Como Funciona?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                title: "Cadastre-se",
                description: "Receba R$30 de bônus instantâneo"
              },
              {
                step: 2,
                title: "Escolha um Produto",
                description: "Selecione a melhor estratégia para você"
              },
              {
                step: 3,
                title: "Convide Amigos",
                description: "Ganhe % dos depósitos realizados"
              },
              {
                step: 4,
                title: "Acompanhe Ganhos",
                description: "Retire seus lucros quando quiser"
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white/5 backdrop-blur rounded-xl p-6 hover:bg-white/10 transition-all">
                  <div className="text-5xl font-bold text-emerald-400 mb-4">0{step.step}</div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-gray-600" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-800/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Produtos Inteligentes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Drone Alpha 🚁",
                risk: "Baixo",
                return: "R$20",
                features: ["O primeiro modelo de entrada, ideal para iniciantes."]
              },
              {
                title: "Drone Specter 👁️",
                risk: "Médio",
                return: "R$50",
                features: ["Equipado com sensores de alta precisão, proporciona ganhos sólidos."]
              },
              {
                title: "Drone Omega Prime 🔥",
                risk: "Alto",
                return: "R$900",
                features: ["O drone supremo, máximo em eficiência e retorno financeiro."]
              }
            ].map((product, index) => (
              <div key={index} className="bg-gradient-to-b from-white/10 to-white/5 backdrop-blur rounded-xl p-6 hover:from-white/15 hover:to-white/10 transition-all">
                <h3 className="text-xl font-semibold mb-4">{product.title}</h3>
                <div className="mb-4">
                  <div className="text-sm text-gray-400">Risco:</div>
                  <div className="font-semibold">{product.risk}</div>
                </div>
                <div className="mb-6">
                  <div className="text-sm text-gray-400">Retorno Esperado:</div>
                  <div className="text-2xl font-bold text-emerald-400">{product.return}</div>
                </div>
                <ul className="space-y-2">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Segurança e Transparência</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Lock className="w-12 h-12 text-emerald-400" />,
                title: "Criptografia Avançada",
                description: "Seus dados e investimentos protegidos com a mais alta tecnologia"
              },
              {
                icon: <Shield className="w-12 h-12 text-blue-400" />,
                title: "Compliance Total",
                description: "Operamos de acordo com todas as regulamentações financeiras"
              },
              {
                icon: <Users className="w-12 h-12 text-purple-400" />,
                title: "Parcerias Estratégicas",
                description: "Aliança com as principais instituições do mercado"
              }
            ].map((security, index) => (
              <div key={index} className="bg-white/5 backdrop-blur rounded-xl p-6 hover:bg-white/10 transition-all">
                <div className="mb-4">{security.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{security.title}</h3>
                <p className="text-gray-400">{security.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-r from-emerald-900/50 to-blue-900/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Comece Sua Jornada de Investimentos Hoje
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Junte-se a milhares de investidores que já confiam em nossa plataforma
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button 
              onClick={() => setShowModal(true)}
              className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-lg font-bold text-lg hover:opacity-90 transition-all flex items-center justify-center gap-2"
            >
              Cadastre-se Agora <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={handleTelegramClick}
              className="px-8 py-4 bg-white/10 backdrop-blur rounded-lg font-bold text-lg hover:bg-white/20 transition-all"
            >
              Entrar na Comunidade
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900">
        <div className="container mx-auto max-w-6xl text-center text-gray-400">
          <p>© 2024 FinTechX. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
