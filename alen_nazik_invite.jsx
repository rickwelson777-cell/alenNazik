import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Heart, MapPin, Phone } from "lucide-react";
import { useEffect, useState } from "react";

export default function WeddingInvite() {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    const generatedPetals = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      size: 20 + Math.random() * 15,
      duration: 6 + Math.random() * 4,
    }));
    setPetals(generatedPetals);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-50 to-white flex items-center justify-center p-6 relative overflow-hidden">
      {/* Декоративный фон */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-pink-200 rounded-full opacity-30 blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-300 rounded-full opacity-30 blur-3xl animate-pulse" />
      </div>

      {/* Лепестки */}
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute bg-pink-200 rounded-full opacity-70"
          style={{
            left: `${petal.left}%`,
            width: petal.size,
            height: petal.size,
          }}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: "100vh", opacity: [0.8, 0.6, 0] }}
          transition={{
            duration: petal.duration,
            repeat: Infinity,
            delay: petal.delay,
            ease: "linear",
          }}
        />
      ))}

      <Card className="max-w-md w-full text-center shadow-xl rounded-2xl p-6 bg-white/80 backdrop-blur-md relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <Heart className="mx-auto w-12 h-12 text-pink-500 animate-pulse" />
          <h1 className="text-3xl font-bold text-gray-800">Ален & Назик</h1>
          <p className="text-gray-700 leading-relaxed">
            Дорогие друзья и близкие!<br />
            С огромной радостью и любовью приглашаем вас разделить с нами самый важный день нашей жизни – день нашей свадьбы.
          </p>

          <CardContent className="space-y-4">
            <div>
              <p className="text-lg font-semibold">📍 Место проведения</p>
              <p className="text-gray-700">Ресторан <strong>Ак Чатыр</strong>, ул. Сейил 1</p>
              <p className="text-gray-700">💍 Регистрация брака: <strong>16:00</strong></p>
              <p className="text-gray-700">🎉 Начало праздника: <strong>17:00</strong></p>
            </div>

            <p className="text-gray-700 leading-relaxed">
              Этот день станет началом новой главы нашей истории, и мы будем счастливы, если вы будете рядом, чтобы разделить радость, смех и танцы вместе с нами!
            </p>

            <div className="bg-pink-100 rounded-xl p-3 shadow-inner">
              <p className="text-gray-800 font-semibold">👔 Дресс-код:</p>
              <p className="text-gray-700">Классический стиль</p>
            </div>

            <div className="bg-gray-100 rounded-xl p-3 shadow-inner space-y-1">
              <p className="text-gray-800 font-semibold flex items-center justify-center gap-1">
                <Phone className="w-4 h-4" /> Контакты для уточнения:
              </p>
              <p className="text-gray-700">📞 0703 171 220</p>
              <p className="text-gray-700">💬 WhatsApp: 0555 461 300</p>
            </div>

            <p className="text-gray-700 italic">С любовью, Ален и Назик ❤️</p>
          </CardContent>

          <Button
            className="mt-4 bg-green-500 hover:bg-green-600 text-white rounded-full px-6 py-2 shadow flex items-center gap-2 mx-auto"
            onClick={() => window.open("https://2gis.kg/bishkek/geo/70000001081657090/74.581269,42.769794", "_blank")}
          >
            <MapPin className="w-4 h-4" /> Посмотреть на карте
          </Button>
        </motion.div>
      </Card>
    </div>
  );
}
