import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const course = {
  id: 1,
  title: "Полный курс по ИИ: 10 направлений",
  description: "Комплексное обучение работе с искусственным интеллектом — от основ до продвинутых техник. 10 различных направлений в одном курсе за символическую цену",
  duration: "3 месяца",
  level: "Все уровни",
  price: "1 000 ₽",
  oldPrice: "25 000 ₽",
  image: "/img/8873a108-b4d7-41c5-96d7-1dddf8580bf9.jpg",
  modules: [
    "ChatGPT и текстовые ИИ",
    "Midjourney и генерация изображений", 
    "Обработка видео с ИИ",
    "Голосовые ассистенты",
    "Автоматизация бизнес-процессов",
    "ИИ в маркетинге и продажах",
    "Анализ данных с помощью ИИ",
    "Создание чат-ботов",
    "ИИ для контента и копирайтинга",
    "Будущие тренды и возможности"
  ]
};

const pricingPlans = [
  {
    name: "Базовый доступ",
    price: "1 000 ₽",
    period: "курс",
    description: "Полный курс со всеми материалами",
    features: [
      "Все 10 модулей курса",
      "Практические задания",
      "Видеоуроки в HD качестве",
      "Поддержка в чате",
      "Сертификат о прохождении"
    ],
    popular: true
  },
  {
    name: "Премиум",
    price: "2 500 ₽",
    period: "курс + бонусы",
    description: "Курс + дополнительные материалы",
    features: [
      "Все из базового тарифа",
      "Личные консультации с экспертом",
      "Дополнительные кейсы",
      "Готовые шаблоны и промпты",
      "Доступ к закрытому сообществу",
      "Пожизненные обновления"
    ],
    popular: false
  },
  {
    name: "Корпоративный",
    price: "По запросу",
    period: "команда",
    description: "Обучение для команд от 5 человек",
    features: [
      "Индивидуальная программа",
      "Корпоративные проекты",
      "Онбординг сотрудников",
      "Техническая поддержка 24/7",
      "Скидка от 30%"
    ],
    popular: false
  }
];

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Icon name="Brain" size={20} className="text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">AI Courses</h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#hero" className="text-gray-600 hover:text-primary-600 transition-colors">Главная</a>
              <a href="#courses" className="text-gray-600 hover:text-primary-600 transition-colors">Курсы</a>
              <a href="#pricing" className="text-gray-600 hover:text-primary-600 transition-colors">Цены</a>
            </div>
            <Button className="bg-gradient-primary hover:opacity-90 text-white border-0">
              Начать обучение
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <Badge variant="outline" className="mb-6 border-primary-200 text-primary-600">
              🚀 Новая эра обучения
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Мадина, я тебя люблю! Освойте{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                искусственный интеллект
              </span>{" "}
              с нуля
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Практические курсы от экспертов индустрии. Изучайте машинное обучение, 
              нейронные сети и применяйте ИИ в реальных проектах
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-white border-0 text-lg px-8">
                <Icon name="Play" size={20} className="mr-2" />
                Начать обучение
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300 text-lg px-8">
                <Icon name="BookOpen" size={20} className="mr-2" />
                Посмотреть программу
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-slide-up">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Zap" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Практический подход</h3>
              <p className="text-gray-600">Реальные проекты и кейсы из индустрии для максимального погружения</p>
            </div>
            <div className="text-center animate-slide-up" style={{animationDelay: '0.1s'}}>
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Экспертные менторы</h3>
              <p className="text-gray-600">Личная поддержка от практикующих специалистов в области ИИ</p>
            </div>
            <div className="text-center animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Карьерный рост</h3>
              <p className="text-gray-600">Помощь в трудоустройстве и развитии карьеры в сфере ИИ</p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary-200 text-primary-600">
              📚 Наши курсы
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Мега-курс по ИИ</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              10 различных направлений искусственного интеллекта в одном курсе всего за 1000 рублей
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="group hover:shadow-2xl transition-all duration-300 animate-scale-in border-0 shadow-xl overflow-hidden">
              <div className="relative">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-red-500 text-white text-sm px-3 py-1">
                    🔥 Супер предложение
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/90 text-gray-700">
                    {course.level}
                  </Badge>
                </div>
              </div>
              
              <div className="p-8">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <Badge variant="outline" className="text-primary-600 border-primary-200">
                      <Icon name="Clock" size={14} className="mr-1" />
                      {course.duration}
                    </Badge>
                    <div className="flex items-center gap-2">
                      <span className="text-3xl font-bold text-red-600">{course.price}</span>
                      <span className="text-lg text-gray-500 line-through">{course.oldPrice}</span>
                      <Badge className="bg-green-500 text-white">-96%</Badge>
                    </div>
                  </div>
                  
                  <CardTitle className="text-3xl group-hover:text-primary-600 transition-colors mb-4">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed text-lg">
                    {course.description}
                  </CardDescription>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {course.modules.map((module, idx) => (
                    <div key={idx} className="flex items-center text-gray-700 bg-gray-50 p-3 rounded-lg">
                      <Icon name="CheckCircle" size={16} className="text-green-500 mr-3 flex-shrink-0" />
                      <span className="font-medium">{module}</span>
                    </div>
                  ))}
                </div>
                
                <div className="text-center">
                  <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-white border-0 text-xl px-12 py-4">
                    <Icon name="Rocket" size={24} className="mr-2" />
                    Купить курс за 1 000 ₽
                  </Button>
                  <p className="text-sm text-gray-500 mt-3">
                    ⏰ Акция действует ограниченное время
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary-200 text-primary-600">
              💰 Тарифы
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Доступные тарифы</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Выберите подходящий вариант для изучения ИИ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={plan.name} 
                className={`relative group hover:shadow-xl transition-all duration-300 animate-scale-in ${
                  plan.popular ? 'ring-2 ring-primary-500 scale-105' : ''
                }`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-primary text-white px-4 py-1">
                      Популярный
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    {plan.period !== "команда" && (
                      <span className="text-gray-600 ml-2">/ {plan.period}</span>
                    )}
                  </div>
                  <CardDescription className="mt-2">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <Icon name="Check" size={16} className="text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-gradient-primary hover:opacity-90 text-white border-0' 
                        : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {plan.name === "Корпоративный" ? "Связаться с нами" : "Выбрать тариф"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-4xl font-bold text-white mb-6">
              Готовы начать карьеру в ИИ?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Присоединяйтесь к тысячам студентов, которые уже изменили свою жизнь с помощью наших курсов
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100 text-lg px-8">
                <Icon name="Rocket" size={20} className="mr-2" />
                Начать обучение сейчас
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600 text-lg px-8">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Задать вопрос
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Icon name="Brain" size={20} className="text-white" />
                </div>
                <h3 className="text-xl font-bold">AI Courses</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Образовательная платформа нового поколения для изучения искусственного интеллекта
              </p>
              <div className="flex space-x-4">
                <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white p-2">
                  <Icon name="Twitter" size={20} />
                </Button>
                <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white p-2">
                  <Icon name="Linkedin" size={20} />
                </Button>
                <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white p-2">
                  <Icon name="Github" size={20} />
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Курсы</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Машинное обучение</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Нейронные сети</a></li>
                <li><a href="#" className="hover:text-white transition-colors">ИИ для бизнеса</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Центр помощи</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Связаться с нами</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  hello@aicourses.ru
                </li>
                <li className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (495) 123-45-67
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
            <p>&copy; 2024 AI Courses. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}