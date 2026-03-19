import './App.css'

const traits = ['探索', '创造', '进化', '表达']

const projects = [
  {
    title: 'Project 01',
    tag: '作品展示',
    desc: '用来展示你最想被看见的代表作，讲清楚做了什么、解决了什么问题，以及你从中获得了什么成长。',
  },
  {
    title: 'Project 02',
    tag: '学习记录',
    desc: '适合放课程项目、比赛经历、独立练习或实验作品，让别人快速看到你的持续投入与学习轨迹。',
  },
  {
    title: 'Project 03',
    tag: '个人风格',
    desc: '保留给最有个人气质的一项内容，让整个主页不只是简历，更像一张真正属于你的名片。',
  },
]

const signals = [
  { label: '身份', value: 'Student Builder' },
  { label: '方向', value: 'Web / Design / Growth' },
  { label: '状态', value: 'Always evolving' },
]

const contacts = [
  { label: 'Email', value: 'your@email.com', href: 'mailto:your@email.com' },
  { label: 'GitHub', value: 'github.com/yourname', href: 'https://github.com/yourname' },
]

export default function App() {
  const year = new Date().getFullYear()

  return (
    <div className="app-shell">
      <div className="space space-one" />
      <div className="space space-two" />
      <div className="space space-three" />

      <header className="topbar">
        <a className="brand" href="#hero">
          Ev0Lve
        </a>
        <nav className="nav">
          <a href="#about">关于</a>
          <a href="#traits">关键词</a>
          <a href="#projects">项目</a>
          <a href="#contact">联系</a>
        </nav>
      </header>

      <main className="layout">
        <section className="hero" id="hero">
          <div className="hero-copy">
            <p className="eyebrow">Student Cosmic Signal</p>
            <h1>
              Keep evolving,
              <br />
              and leave a visible trace.
            </h1>
            <p className="hero-text">
              这是一个宇宙感的个人主页模板，用来介绍你是谁、正在关注什么，以及你希望别人如何记住你。
              它不只是展示信息，也在表达你的气质。
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

          <aside className="hero-card">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="avatar">E</div>
            <h2>Ev0Lve</h2>
            <p className="hero-card-subtitle">Keep Evolving</p>
            <p className="hero-card-text">
              在未知里继续前进，在学习中缓慢进化。每一次尝试，都会变成下一次跃迁的起点。
            </p>
          </aside>
        </section>

        <section className="panel about" id="about">
          <div className="panel-copy">
            <p className="section-tag">About Me</p>
            <h2>像一场持续校准方向的航行</h2>
            <p>
              我现在仍在寻找最适合自己的成长路径。无论是学业、兴趣、技术还是创作，我都希望把每一次尝试
              沉淀成自己的方法和风格，让主页像一张不断更新的成长地图。
            </p>
          </div>

          <div className="signal-grid">
            {signals.map((item) => (
              <div className="signal-card" key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="traits-section" id="traits">
          <div className="section-heading">
            <p className="section-tag">Traits</p>
            <h2>我的关键词</h2>
          </div>
          <div className="traits-grid">
            {traits.map((trait) => (
              <div className="trait-chip" key={trait}>
                {trait}
              </div>
            ))}
          </div>
        </section>

        <section className="projects-section" id="projects">
          <div className="section-heading">
            <p className="section-tag">Projects</p>
            <h2>星图里的作品</h2>
            <p className="section-copy">
              这里放最能代表你的内容。即使现在还不多，也可以先用清晰的结构展示你的方向感。
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <span className="project-tag">{project.tag}</span>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div>
            <p className="section-tag">Contact</p>
            <h2>让我们在星海里相遇</h2>
            <p className="section-copy">
              你可以把邮箱、GitHub、社交主页或一句欢迎合作的话放在这里，作为整页的落点。
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
      </main>

      <footer className="footer">© {year} Ev0Lve. Built with React + Vite.</footer>
    </div>
  )
}
