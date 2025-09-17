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
    <div style={{minHeight: "100vh", background: "linear-gradient(to bottom right, #ffe4e6, #fff)", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px", position: "relative", overflow: "hidden"}}>
      {/* Лепестки */}
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          style={{
            position: "absolute",
            backgroundColor: "#f9a8d4",
            borderRadius: "50%",
            opacity: 0.7,
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

      <div style={{maxWidth: "500px", width: "100%", background: "rgba(255,255,255,0.85)", borderRadius: "20px", padding: "20px", boxShadow: "0 10px 20px rgba(0,0,0,0.1)", textAlign: "center", position: "relative", zIndex: 10}}>
        <Heart size={48} color="#ec4899" style={{margin: "0 auto"}} />
        <h1 style={{fontSize: "2rem", fontWeight: "bold", margin: "10px 0"}}>Ален & Назик</h1>
        <p>Дорогие друзья и близкие!<br/>С огромной радостью приглашаем вас разделить с нами самый важный день нашей жизни – день нашей свадьбы.</p>
        
        <div style={{marginTop: "20px"}}>
          <p><b>📍 Место проведения:</b> Ресторан Ак Чатыр, ул. Сейил 1</p>
          <p>💍 Регистрация брака: <b>16:00</b></p>
          <p>🎉 Начало праздника: <b>17:00</b></p>
        </div>

        <p style={{marginTop: "15px"}}>Этот день станет началом новой главы нашей истории, и мы будем счастливы, если вы будете рядом!</p>

        <div style={{marginTop: "20px", background: "#ffe4e6", padding: "10px", borderRadius: "10px"}}>
          <p><b>👔 Дресс-код:</b> Классический стиль</p>
        </div>

        <div style={{marginTop: "20px", background: "#f3f4f6", padding: "10px", borderRadius: "10px"}}>
          <p><b><Phone size={16} /> Контакты:</b></p>
          <p>📞 0703 171 220</p>
          <p>💬 WhatsApp: 0555 461 300</p>
        </div>

        <p style={{marginTop: "15px", fontStyle: "italic"}}>С любовью, Ален и Назик ❤️</p>

        <button onClick={() => window.open("https://2gis.kg/bishkek/geo/70000001081657090/74.581269,42.769794", "_blank")} style={{marginTop: "20px", padding: "10px 20px", borderRadius: "9999px", border: "none", background: "#22c55e", color: "white", cursor: "pointer"}}>
          <MapPin size={16} style={{display: "inline", marginRight: "5px"}}/> Посмотреть на карте
        </button>
      </div>
    </div>
  );
}
