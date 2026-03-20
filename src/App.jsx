import './App.css'

const orbitDots = [0, 72, 144, 216, 288]

const skills = ['探索', '创造', '进化', '表达']

const projects = [
  {
    title: '星云档案 01',
    desc: '像宇宙深处被点亮的裂隙，星光、尘埃与能量在同一片视野中缓慢燃烧。',
    tag: '星云图像',
    image:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'><defs><linearGradient id='g1' x1='0' y1='0' x2='1' y2='1'><stop offset='0%' stop-color='%230b1020'/><stop offset='45%' stop-color='%2321458a'/><stop offset='100%' stop-color='%23a855f7'/></linearGradient></defs><rect width='800' height='600' fill='url(%23g1)'/><circle cx='220' cy='200' r='120' fill='%2338bdf8' fill-opacity='0.28'/><circle cx='430' cy='260' r='170' fill='%23c084fc' fill-opacity='0.24'/><circle cx='560' cy='180' r='90' fill='%23ffffff' fill-opacity='0.14'/><g fill='white' fill-opacity='0.8'><circle cx='130' cy='110' r='3'/><circle cx='260' cy='90' r='2'/><circle cx='640' cy='130' r='2'/><circle cx='700' cy='260' r='3'/><circle cx='320' cy='410' r='2'/><circle cx='590' cy='420' r='2.5'/></g></svg>",
  },
  {
    title: '深空回响 02',
    desc: '更浓烈的粉蓝色光雾向四周扩散，像来自遥远星域的一次静默回响。',
    tag: '深空图像',
    image:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'><defs><linearGradient id='g2' x1='0' y1='0' x2='1' y2='1'><stop offset='0%' stop-color='%23050a16'/><stop offset='40%' stop-color='%231d4ed8'/><stop offset='100%' stop-color='%23ec4899'/></linearGradient></defs><rect width='800' height='600' fill='url(%23g2)'/><circle cx='280' cy='240' r='160' fill='%2338bdf8' fill-opacity='0.30'/><circle cx='470' cy='270' r='210' fill='%23f472b6' fill-opacity='0.24'/><circle cx='610' cy='160' r='70' fill='%23ffffff' fill-opacity='0.12'/><g fill='white' fill-opacity='0.85'><circle cx='150' cy='140' r='2.5'/><circle cx='240' cy='100' r='2'/><circle cx='520' cy='110' r='2'/><circle cx='680' cy='210' r='3'/><circle cx='360' cy='440' r='2.5'/><circle cx='620' cy='400' r='2'/></g></svg>",
  },
  {
    title: '宇宙边界 03',
    desc: '金色尘埃像山脉一样横亘在星海之中，仿佛是通往未知宇宙边界的入口。',
    tag: '银河图像',
    image:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'><defs><linearGradient id='g3' x1='0' y1='0' x2='1' y2='1'><stop offset='0%' stop-color='%23040b16'/><stop offset='55%' stop-color='%231e3a8a'/><stop offset='100%' stop-color='%23f59e0b'/></linearGradient></defs><rect width='800' height='600' fill='url(%23g3)'/><path d='M0 430 C120 360 220 470 320 420 C420 370 520 500 800 390 L800 600 L0 600 Z' fill='%23f59e0b' fill-opacity='0.26'/><circle cx='250' cy='210' r='110' fill='%23fde68a' fill-opacity='0.18'/><circle cx='500' cy='220' r='160' fill='%2338bdf8' fill-opacity='0.16'/><g fill='white' fill-opacity='0.8'><circle cx='120' cy='120' r='2.5'/><circle cx='210' cy='80' r='2'/><circle cx='420' cy='120' r='2'/><circle cx='650' cy='170' r='3'/><circle cx='540' cy='360' r='2.5'/><circle cx='700' cy='320' r='2'/></g></svg>",
  },
]

const contacts = [
  { label: 'Email', value: '3227037881@qq.com', href: 'mailto:3227037881@qq.com' },
  { label: 'GitHub', value: 'github.com/Ev0Lve1', href: 'https://github.com/Ev0Lve1' },
]

const avatarSrc =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 240 240'><defs><linearGradient id='a' x1='0' y1='0' x2='1' y2='1'><stop offset='0%' stop-color='%230b1020'/><stop offset='55%' stop-color='%231d4ed8'/><stop offset='100%' stop-color='%23a855f7'/></linearGradient></defs><rect width='240' height='240' rx='120' fill='url(%23a)'/><circle cx='120' cy='120' r='88' fill='%23000000' fill-opacity='0.28'/><circle cx='120' cy='98' r='30' fill='%23cbd5e1' fill-opacity='0.9'/><rect x='70' y='128' width='100' height='44' rx='22' fill='%23cbd5e1' fill-opacity='0.88'/><rect x='84' y='84' width='26' height='10' rx='5' fill='%2300e5ff'/><rect x='130' y='84' width='26' height='10' rx='5' fill='%23ff4fd8'/></svg>"

const stars = [
  { className: 'star-lg', style: { left: '4rem', top: '5rem' } },
  { className: 'star-sm', style: { left: '24%', top: '7rem' } },
  { className: 'star-lg star-cyan', style: { right: '6rem', top: '6rem' } },
  { className: 'star-sm', style: { left: '32%', top: '18rem' } },
  { className: 'star-lg star-pink', style: { left: '7rem', bottom: '9rem' } },
  { className: 'star-sm', style: { right: '22%', bottom: '7rem' } },
  { className: 'star-lg star-cyan', style: { right: '5rem', top: '50%' } },
]

export default function App() {
  const year = new Date().getFullYear()

  return (
    <div className="app-shell">
      <div className="cosmic-bg cosmic-bg-one" />
      <div className="cosmic-bg cosmic-bg-two" />
      <div className="cosmic-grid" />

      <div className="starfield" aria-hidden="true">
        {stars.map((star, index) => (
          <span key={index} className={`star ${star.className}`} style={star.style} />
        ))}
      </div>

      <main className="page">
        <header className="topbar">
          <a className="brand" href="#hero">
            Ev0Lve
          </a>

          <nav className="nav">
            <a href="#about">关于</a>
            <a href="#skills">关键词</a>
            <a href="#projects">项目</a>
            <a href="#contact">联系</a>
          </nav>
        </header>

        <section className="hero" id="hero">
          <div className="hero-copy">
            <p className="eyebrow">Student · Cosmic Signal</p>
            <h1>
              <span>Ev0Lve</span>
            </h1>
            <p className="hero-text">
              一个正在宇宙中不断探索、学习、成长的学生。这里像一张属于我的星图，记录兴趣、表达和未来方向。
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                查看项目
              </a>
              <a className="button button-secondary" href="#contact">
                联系我
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orb orb-glow" />
            <div className="orb orb-outer" />
            <div className="orb orb-dashed orb-dashed-cyan" />
            <div className="orb orb-dashed orb-dashed-pink" />
            <div className="orb orb-soft" />
            <div className="orb orb-core" />

            {orbitDots.map((angle) => (
              <span
                key={angle}
                className="orbit-dot"
                style={{
                  '--orbit-angle': `${angle}deg`,
                  '--twinkle-duration': `${2.2 + angle / 180}s`,
                }}
              />
            ))}

            <article className="profile-card">
              <div className="avatar-frame">
                <div className="avatar-glow" />
                <div className="avatar-ring avatar-ring-one" />
                <div className="avatar-ring avatar-ring-two" />
                <div className="avatar-ring avatar-ring-three" />
                <div className="avatar-shell">
                  <img src={avatarSrc} alt="Ev0Lve avatar" />
                </div>
              </div>

              <h2>Ev0Lve</h2>
              <p className="profile-tagline">Keep Evolving</p>
              <p className="profile-copy">
                在未知里前进，在学习中进化。让每一次尝试，都成为下一次跃迁的起点。
              </p>
            </article>
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="panel panel-wide">
            <p className="section-tag">About Me</p>
            <h3>像星际航行一样学习</h3>
            <p>
              我目前是一名学生，正在不断寻找自己真正热爱的方向。无论是学业、兴趣、技术还是创作，我都希望在每一次尝试里积累能量，慢慢形成属于自己的轨迹。
            </p>
          </div>

          <div className="panel panel-side">
            <p className="section-tag section-tag-pink">Identity</p>
            <div className="identity-list">
              <div className="identity-row">
                <span>名字</span>
                <strong>Ev0Lve</strong>
              </div>
              <div className="identity-row">
                <span>身份</span>
                <strong>学生</strong>
              </div>
              <div className="identity-row">
                <span>风格</span>
                <strong>宇宙感</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="skills-section" id="skills">
          <p className="section-tag section-tag-pink">Skills / Traits</p>
          <h3>我的关键词</h3>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-card" key={skill}>
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section className="projects-section" id="projects">
          <div className="section-heading">
            <div>
              <p className="section-tag">Projects</p>
              <h3>星图里的作品</h3>
            </div>
            <p className="section-copy">
              用来展示你的课程作品、比赛经历、独立练习，或者最能代表你的创作内容。
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-image-wrap">
                  <img src={project.image} alt={project.title} className="project-image" />
                  <div className="project-image-overlay" />
                  <span className="project-tag">{project.tag}</span>
                </div>

                <div className="project-body">
                  <h4>{project.title}</h4>
                  <p>{project.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div>
            <p className="section-tag">Contact</p>
            <h3>让我们在星海中相遇</h3>
            <p className="section-copy">
              这里保留了你当前站点里的联系方式，也可以继续替换成更多社交平台或合作入口。
            </p>
          </div>

          <div className="contact-list">
            {contacts.map((item) => (
              <a className="contact-pill" href={item.href} key={item.label} target="_blank" rel="noreferrer">
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </a>
            ))}
          </div>
        </section>

        <footer className="footer">© {year} Ev0Lve. Built with React + Vite.</footer>
      </main>
    </div>
  )
}
