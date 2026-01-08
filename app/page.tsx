import DownloadMenu from "./components/DownloadMenu";

const variableTypes = [
  {
    title: "Строка",
    description: "Короткие значения для реквизитов и заголовков."
  },
  {
    title: "Textarea",
    description: "Пояснения, условия, описания."
  },
  {
    title: "Форматированный текст",
    description: "Жирный текст, списки, аккуратная верстка прямо в документе."
  },
  {
    title: "Дата",
    description: "Контроль формата и автоматические шаблоны дат."
  },
  {
    title: "Число",
    description:
      "Числовые поля с автоматической расшифровкой суммы прописью."
  }
];

const steps = [
  {
    title: "Загрузите шаблон",
    description:
      "Добавьте Word или Excel и отметьте переменные прямо в файле."
  },
  {
    title: "Опишите правила",
    description:
      "Назначьте типы полей, форматы и валидацию — чтобы исключить ошибки."
  },
  {
    title: "Сгенерируйте документ",
    description: "Заполните форму и получите корректный файл за секунды."
  }
];

const perks = [
  {
    title: "Единая база шаблонов",
    description:
      "Все версии Word и Excel в одном месте: поиск, теги, история изменений."
  },
  {
    title: "Умные переменные",
    description:
      "Типы полей, формулы, зависимости и автозаполнение реквизитов."
  },
  {
    title: "Готово для команды",
    description:
      "Роли, контроль доступа и единый стандарт документов для всей компании."
  }
];

export default function Home() {
  return (
    <main className="bg-slate-950 text-white">
      <div className="relative">
        <div className="absolute inset-0">
          <div className="absolute -top-32 right-0 h-72 w-72 rounded-full bg-brand-500/30 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-sky-500/20 blur-3xl" />
        </div>
        <header className="relative mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/20">
              <span className="text-xl font-semibold text-brand-200">DQ</span>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-brand-200">DoxiQ</p>
              <p className="text-xs text-slate-300">Template Document Generator</p>
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-sm text-slate-200 md:flex">
            <a className="hover:text-white" href="#features">
              Возможности
            </a>
            <a className="hover:text-white" href="#types">
              Типы полей
            </a>
            <a className="hover:text-white" href="#workflow">
              Процесс
            </a>
          </nav>
          <DownloadMenu buttonClassName="border border-white/20 px-4 py-2 text-sm text-white transition hover:border-white/60" />
        </header>

        <section className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-20 pt-8 lg:flex-row lg:items-center">
          <div className="max-w-xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs text-brand-100">
              <span className="h-2 w-2 rounded-full bg-brand-400" />
              Премиальный софт • Windows • Безопасно внутри компании
            </div>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              Документы без ручной рутины и ошибок. Word и Excel — по правилам.
            </h1>
            <p className="text-base text-slate-200 md:text-lg">
              Соберите шаблоны Word и Excel в одном приложении, задайте правила заполнения и
              выпускайте договоры, счета и акты за минуты — без копирования и правок.
            </p>
            <p className="text-sm text-slate-300">
              DoxiQ — автоматическое создание документов из шаблонов Word и Excel для команд
              и бизнеса.
            </p>
            <div className="flex flex-wrap gap-4">
              <DownloadMenu buttonClassName="bg-brand-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-glow transition hover:bg-brand-400" />
              <button className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/70">
                Посмотреть интерфейс
              </button>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                { label: "До –70% времени на документы", value: "–70%" },
                { label: "–90% ошибок за счет валидации", value: "–90%" },
                { label: "Единый стандарт для отделов", value: "100%" }
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                >
                  <p className="text-xl font-semibold text-white">{item.value}</p>
                  <p className="text-xs text-slate-300">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <div className="relative rounded-[32px] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6 shadow-soft">
              <div className="absolute right-6 top-6 rounded-full bg-brand-500/20 px-3 py-1 text-xs text-brand-100">
                DoxiQ Workspace
              </div>
              <div className="space-y-6">
                <div className="rounded-2xl bg-slate-900/70 p-4">
                  <p className="text-xs text-slate-400">
                    Контроль шаблонов без хаоса копий
                  </p>
                  <div className="mt-4 grid gap-4 md:grid-cols-2">
                    {[
                      {
                        name: "Счет на оплату",
                        type: "Excel Spreadsheet",
                        accent: "bg-emerald-400/20 text-emerald-200"
                      },
                      {
                        name: "Договор оказания",
                        type: "Word Document",
                        accent: "bg-sky-400/20 text-sky-200"
                      }
                    ].map((card) => (
                      <div
                        key={card.name}
                        className="rounded-2xl border border-white/10 bg-slate-950/70 p-4"
                      >
                        <div
                          className={`inline-flex rounded-full px-3 py-1 text-xs ${card.accent}`}
                        >
                          {card.type}
                        </div>
                        <h3 className="mt-3 text-lg font-semibold text-white">{card.name}</h3>
                        <p className="text-xs text-slate-400">
                          12 полей · единый стандарт
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs text-slate-400">Форма с валидацией данных</p>
                  <div className="mt-4 space-y-3">
                    {["Название компании", "ИНН", "Сумма прописью", "Дата"].map((field) => (
                      <div
                        key={field}
                        className="flex items-center justify-between rounded-xl border border-white/10 bg-slate-950/60 px-3 py-2"
                      >
                        <span className="text-sm text-slate-200">{field}</span>
                        <span className="text-xs text-slate-400">Заполнено</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section id="features" className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.2em] text-brand-200">Возможности</p>
            <h2 className="text-3xl font-semibold md:text-4xl">
              Полный контроль над документами — от шаблона до финального файла
            </h2>
            <p className="text-slate-300">
              Описывайте переменные прямо в Word/Excel, а DoxiQ сам соберет корректную
              форму и проверит данные до генерации.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {perks.map((perk) => (
                <div
                  key={perk.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <h3 className="text-lg font-semibold text-white">{perk.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{perk.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-brand-500/10 via-slate-900/60 to-slate-900/20 p-8">
            <h3 className="text-xl font-semibold">Контроль качества данных</h3>
            <p className="mt-3 text-sm text-slate-300">
              Мы предотвращаем ошибки до генерации документа.
            </p>
            <div className="mt-6 space-y-4 text-sm text-slate-200">
              {[
                "Проверки ИНН и реквизитов",
                "Обязательные поля и маски ввода",
                "Автоподстановка данных из CRM (опционально)",
                "История генераций и экспорт в PDF"
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3"
                >
                  <span className="h-2 w-2 rounded-full bg-brand-400" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="types" className="mx-auto w-full max-w-6xl px-6 pb-16">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-brand-200">Типы полей</p>
              <h2 className="text-3xl font-semibold">Гибкая форма под любой документ</h2>
              <p className="mt-3 text-sm text-slate-300">
                От простых реквизитов до сложных договоров и счетов.
              </p>
            </div>
            <button className="rounded-full border border-white/20 px-5 py-2 text-sm text-white">
              Каталог полей
            </button>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {variableTypes.map((type) => (
              <div
                key={type.title}
                className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-sm"
              >
                <p className="text-base font-semibold text-white">{type.title}</p>
                <p className="mt-2 text-slate-300">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="workflow" className="mx-auto w-full max-w-6xl px-6 pb-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-slate-950/60 to-slate-950/20 p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-brand-200">Процесс</p>
            <h2 className="mt-4 text-3xl font-semibold">
              Всего 3 шага до готового документа
            </h2>
            <p className="mt-3 text-slate-300">
              Без копирования, без ручных правок, без ошибок.
            </p>
            <div className="mt-6 space-y-4">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-2xl border border-white/10 bg-slate-950/60 p-4"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-500/20 text-sm text-brand-100">
                      0{index + 1}
                    </span>
                    <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-slate-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold text-white">Что получает бизнес</h3>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                {
                  title: "Экономия времени",
                  value: "до нескольких часов",
                  description: "на каждом пакете документов"
                },
                {
                  title: "Снижение ошибок",
                  value: "до –90%",
                  description: "за счет валидации"
                },
                {
                  title: "Единый стандарт",
                  value: "100%",
                  description: "соответствие утвержденным шаблонам"
                },
                {
                  title: "Быстрый старт",
                  value: "1 день",
                  description: "на первую интеграцию"
                }
              ].map((metric) => (
                <div
                  key={metric.title}
                  className="rounded-2xl border border-white/10 bg-slate-950/60 p-4"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    {metric.title}
                  </p>
                  <p className="mt-3 text-2xl font-semibold text-white">{metric.value}</p>
                  <p className="mt-1 text-sm text-slate-300">{metric.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl border border-white/10 bg-brand-500/10 p-5">
              <p className="text-sm text-brand-100">
                Числовые поля автоматически преобразуют суммы прописью — без ручной проверки
                и человеческого фактора.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-12">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-950/80 to-brand-500/10 p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs text-brand-100">
                <span className="h-2 w-2 rounded-full bg-brand-400" />
                AI features — coming soon
              </div>
              <h2 className="mt-4 text-3xl font-semibold">AI-интеграция — скоро</h2>
              <p className="mt-3 text-slate-300">
                Мы работаем над AI-модулем, который ускорит подготовку шаблонов в разы.
              </p>
            </div>
            <div className="grid gap-3 text-sm text-slate-200">
              {[
                "Автоматическое распознавание переменных в шаблонах",
                "Предложение структуры формы",
                "Проверка документов на логические ошибки",
                "Ускоренная подготовка шаблонов"
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3"
                >
                  <span className="h-2 w-2 rounded-full bg-brand-400" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-24">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center shadow-soft">
          <p className="text-sm uppercase tracking-[0.2em] text-brand-200">Готовы начать?</p>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
            Автоматизируйте документы уже в этом месяце
          </h2>
          <p className="mt-4 text-slate-300">
            Поможем перенести ваши шаблоны и настроить формы для бухгалтерии, юристов и
            операционных команд.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <DownloadMenu buttonClassName="bg-brand-500 px-8 py-3 text-sm font-semibold text-slate-950 shadow-glow transition hover:bg-brand-400" />
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-4 px-6 text-sm text-slate-400 md:flex-row md:items-center">
          <p>Премиальный софт для Windows • Безопасно • Без передачи данных в облако</p>
          <div className="flex gap-6">
            <span>zidiks228@gmail.com</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
