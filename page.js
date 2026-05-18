export default function Home() {
  const tools = [
    {
      name: "Canva AI",
      desc: "Design, posztok, logók AI-val",
      link: "https://www.canva.com/ai-image-generator/",
      icon: "🎨"
    },
    {
      name: "Runway ML",
      desc: "AI videó generálás",
      link: "https://runwayml.com/",
      icon: "🎬"
    },
    {
      name: "ChatGPT",
      desc: "Szöveg, ötletek, pénzkeresés",
      link: "https://chat.openai.com/",
      icon: "💬"
    },
    {
      name: "Suno AI",
      desc: "AI zene készítés",
      link: "https://suno.ai/",
      icon: "🎵"
    },
    {
      name: "Leonardo AI",
      desc: "Profi AI képgenerálás",
      link: "https://leonardo.ai/",
      icon: "🧠"
    },
    {
      name: "Notion AI",
      desc: "Produktivitás + automatizálás",
      link: "https://www.notion.so/product/ai",
      icon: "📊"
    }
  ];

  return (
    <main style={styles.body}>
      
      <header style={styles.header}>
        <h1 style={{ fontSize: "42px" }}>🚀 AI Tools Hub</h1>
        <p>Legjobb AI eszközök + pénzkereső lehetőségek</p>
      </header>

      <section style={styles.grid}>
        {tools.map((t, i) => (
          <a key={i} href={t.link} target="_blank" style={styles.card}>
            <div style={{ fontSize: "30px" }}>{t.icon}</div>
            <h2>{t.name}</h2>
            <p>{t.desc}</p>
            <button style={styles.button}>🚀 Kipróbálom</button>
          </a>
        ))}
      </section>

      <section style={styles.info}>
        <h2>💰 Hogyan kereshetsz ezzel pénzt?</h2>
        <p>
          1. Tedd be affiliate linkeket ezekhez az eszközökhöz<br/>
          2. Készíts TikTok videókat “Top AI tools” témában<br/>
          3. Írj SEO cikkeket (Google forgalom)<br/>
          4. Növeld a kattintásokat → pénz
        </p>
      </section>

      <footer style={styles.footer}>
        © AI Tools Hub - Built for monetization
      </footer>

    </main>
  );
}

const styles = {
  body: {
    fontFamily: "Arial",
    background: "#0b1220",
    color: "white",
    minHeight: "100vh",
    padding: "30px"
  },
  header: {
    textAlign: "center",
    marginBottom: "40px"
  },
  grid: {
    display: "grid",
    gap: "20px",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))"
  },
  card: {
    background: "#1e293b",
    padding: "20px",
    borderRadius: "12px",
    textDecoration: "none",
    color: "white",
    display: "block"
  },
  button: {
    marginTop: "10px",
    padding: "10px",
    background: "#22c55e",
    border: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    cursor: "pointer"
  },
  info: {
    marginTop: "50px",
    background: "#111a2e",
    padding: "20px",
    borderRadius: "12px"
  },
  footer: {
    marginTop: "40px",
    textAlign: "center",
    color: "#64748b"
  }
};
