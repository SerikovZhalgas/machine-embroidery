import { Play, MessageSquare, Users } from "lucide-react";

const FormatSection = () => {
  const formats = [
    {
      icon: <Play className="w-7 h-7" />,
      title: "Видео-уроки",
      bgColor: "bg-primary",
    },
    {
      icon: <MessageSquare className="w-7 h-7" />,
      title: "Обратная связь от куратора",
      bgColor: "bg-terracotta-light",
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: "Закрытый чат сообщества",
      bgColor: "bg-gold",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-center text-foreground mb-16">
          Формат обучения:
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {formats.map((format, index) => (
            <div
              key={format.title}
              className="flex flex-col items-center gap-4 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`w-16 h-16 rounded-2xl ${format.bgColor} flex items-center justify-center text-primary-foreground shadow-soft`}
              >
                {format.icon}
              </div>
              <span className="text-foreground font-medium text-center">
                {format.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FormatSection;
