function ProgressCards({ user }) {
  const cards = [
    {
      title: "🔥 Streak",
      value: `${user?.streak ?? 0} Days`,
    },
    {
      title: "⭐ Level",
      value: user?.level ?? 1,
    },
    {
      title: "📈 XP",
      value: `${user?.xp ?? 0} XP`,
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6 mt-8">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
        >
          <h3 className="text-gray-500 font-medium">
            {card.title}
          </h3>

          <p className="text-3xl font-bold mt-3">
            {card.value}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ProgressCards;