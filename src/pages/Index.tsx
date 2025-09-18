import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  // Данные курса
  const courseData = {
    title: "Полный курс по Искусственному Интеллекту",
    subtitle: "Освойте ИИ за 3 месяца и получите востребованную профессию",
    description: "Комплексное обучение работе с ИИ — от основ до продвинутых техник. Изучите ChatGPT, Midjourney, автоматизацию и создание собственных ИИ-решений",
    price: "2 990 ₽",
    oldPrice: "24 990 ₽",
    discount: "88%",
    modules: [
      {
        title: "ChatGPT и текстовые ИИ",
        description: "Мастерство промптинга, создание контента, автоматизация задач",
        icon: "MessageSquare"
      },
      {
        title: "Midjourney и генерация изображений",
        description: "Создание визуального контента, продвинутые техники генерации",
        icon: "Image"
      },
      {
        title: "Обработка видео с ИИ",
        description: "Монтаж, создание видео, анимация с помощью нейросетей",
        icon: "Video"
      },
      {
        title: "Голосовые ассистенты",
        description: "Создание голосовых помощников, клонирование голоса",
        icon: "Mic"
      },
      {
        title: "Автоматизация бизнес-процессов",
        description: "Внедрение ИИ в рабочие процессы, повышение эффективности",
        icon: "Zap"
      },
      {
        title: "ИИ в маркетинге",
        description: "Создание рекламы, анализ аудитории, персонализация",
        icon: "Target"
      },
      {
        title: "Анализ данных с ИИ",
        description: "Обработка больших данных, прогнозирование, инсайты",
        icon: "BarChart3"
      },
      {
        title: "Создание чат-ботов",
        description: "Разработка умных помощников для бизнеса",
        icon: "Bot"
      }
    ]
  };

  // Отзывы
  const testimonials = [
    {
      name: "Анна Петрова",
      role: "Маркетолог",
      avatar: "/img/avatar1.jpg",
      text: "Курс полностью изменил мой подход к работе. Теперь я автоматизировала 80% рутинных задач с помощью ИИ. Окупился за первый месяц!",
      rating: 5
    },
    {
      name: "Михаил Смирнов",
      role: "Предприниматель", 
      avatar: "/img/avatar2.jpg",
      text: "Благодаря курсу запустил ИИ-сервис, который приносит 300к+ в месяц. Знания действительно применимы на практике.",
      rating: 5
    },
    {
      name: "Елена Козлова",
      role: "Дизайнер",
      avatar: "/img/avatar3.jpg", 
      text: "Освоила Midjourney и другие ИИ-инструменты. Увеличила скорость работы в 5 раз, клиенты в восторге от результатов!",
      rating: 5
    }
  ];

  // Тарифные планы
  const pricingPlans = [
    {
      name: "Базовый",
      price: "2 990 ₽",
      oldPrice: "9 990 ₽",
      description: "Полный доступ к курсу",
      features: [
        "Все 8 модулей курса",
        "Практические задания",
        "Сертификат о прохождении", 
        "Доступ на 12 месяцев",
        "Поддержка в чате"
      ],
      popular: false
    },
    {
      name: "Премиум",
      price: "4 990 ₽", 
      oldPrice: "19 990 ₽",
      description: "Курс + личное сопровождение",
      features: [
        "Все из базового тарифа",
        "Личные консультации с экспертом",
        "Готовые шаблоны и промпты",
        "Разбор ваших проектов",
        "Помощь с трудоустройством",
        "Доступ к закрытому сообществу"
      ],
      popular: true
    },
    {
      name: "VIP",
      price: "9 990 ₽",
      oldPrice: "39 990 ₽", 
      description: "Максимальный результат",
      features: [
        "Все из премиум тарифа",
        "Индивидуальная программа обучения",
        "Еженедельные созвоны 1-на-1",
        "Создание вашего ИИ-продукта",
        "Пожизненный доступ",
        "Гарантия результата или возврат денег"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Brain" size={32} className="text-blue-600" />
            <span className="text-xl font-bold text-gray-900">AI Academy</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#course" className="text-gray-600 hover:text-blue-600 transition-colors">О курсе</a>
            <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">Цены</a>
            <a href="#reviews" className="text-gray-600 hover:text-blue-600 transition-colors">Отзывы</a>
            <Button className="bg-blue-600 hover:bg-blue-700">Записаться</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="/img/61f6d81a-486c-43c5-9521-3caec05a0297.jpg" 
            alt="AI Technology Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge className="mb-6 bg-red-500 text-white text-sm px-4 py-2">
            🔥 Акция до 31 декабря
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Освойте{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Искусственный Интеллект
            </span>{" "}
            за 3 месяца
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Практический курс для тех, кто хочет освоить ИИ-инструменты и увеличить свой доход. 
            Изучите ChatGPT, Midjourney, автоматизацию и создание ИИ-решений
          </p>

          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600">{courseData.price}</div>
              <div className="text-lg text-gray-500 line-through">{courseData.oldPrice}</div>
            </div>
            <Badge className="bg-green-500 text-white text-lg px-3 py-1">
              -{courseData.discount}
            </Badge>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4">
              <Icon name="Play" size={20} className="mr-2" />
              Купить курс сейчас
            </Button>
            <Button size="lg" variant="outline" className="border-gray-300 text-lg px-8 py-4">
              <Icon name="Eye" size={20} className="mr-2" />
              Посмотреть программу
            </Button>
          </div>

          <div className="flex items-center justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center">
              <Icon name="Users" size={16} className="mr-1" />
              5000+ студентов
            </div>
            <div className="flex items-center">
              <Icon name="Star" size={16} className="mr-1" />
              4.9/5 рейтинг
            </div>
            <div className="flex items-center">
              <Icon name="Award" size={16} className="mr-1" />
              Сертификат
            </div>
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section id="course" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Программа курса</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              8 практических модулей, которые дадут вам полное понимание ИИ-инструментов
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courseData.modules.map((module, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={module.icon} size={24} className="text-blue-600" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                    {module.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {module.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Почему выбирают наш курс</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Rocket" size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Быстрый результат</h3>
              <p className="text-gray-600">Первые навыки за неделю, применение в работе за месяц</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="DollarSign" size={32} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Увеличение дохода</h3>
              <p className="text-gray-600">Студенты увеличивают доход в среднем на 150%</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={32} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Поддержка</h3>
              <p className="text-gray-600">Активное комьюнити и помощь экспертов 24/7</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Отзывы студентов</h2>
            <p className="text-xl text-gray-600">Что говорят те, кто уже прошел курс</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                      <Icon name="User" size={24} className="text-gray-600" />
                    </div>
                    <div>
                      <div className="font-bold">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Выберите тариф</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Разные варианты обучения под ваши цели и бюджет
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative border-0 shadow-xl ${plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white px-4 py-1">
                      Популярный
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="mb-4">
                    <div className="text-3xl font-bold text-blue-600">{plan.price}</div>
                    <div className="text-lg text-gray-500 line-through">{plan.oldPrice}</div>
                  </div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <Icon name="Check" size={16} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-600 hover:bg-gray-700'}`}>
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Остались вопросы?</h2>
            <p className="text-xl mb-8 opacity-90">
              Напишите нам, и мы поможем выбрать подходящий тариф
            </p>
            
            <Card className="bg-white">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <Input placeholder="Ваше имя" className="border-gray-300" />
                  <Input placeholder="Email" type="email" className="border-gray-300" />
                </div>
                <Textarea 
                  placeholder="Ваш вопрос" 
                  className="mb-4 border-gray-300" 
                  rows={4}
                />
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Icon name="Send" size={16} className="mr-2" />
                  Отправить сообщение
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Brain" size={32} className="text-blue-400" />
                <span className="text-xl font-bold">AI Academy</span>
              </div>
              <p className="text-gray-400">
                Лучшие курсы по искусственному интеллекту для начинающих и профессионалов
              </p>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Курсы</h3>
              <ul className="space-y-2 text-gray-400">
                <li>ChatGPT</li>
                <li>Midjourney</li>
                <li>Автоматизация</li>
                <li>Аналитика</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Поддержка</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Помощь</li>
                <li>FAQ</li>
                <li>Контакты</li>
                <li>Сообщество</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Контакты</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  info@ai-academy.ru
                </div>
                <div className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (999) 123-45-67
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
            <p>&copy; 2024 AI Academy. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;