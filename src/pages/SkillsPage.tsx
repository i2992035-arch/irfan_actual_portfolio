import PageHeading from '../components/PageHeading';

interface SkillItem {
  name: string;
  level: string;
  icon: string;
  invertOnDark?: boolean;
}

interface SkillCategory {
  number: string;
  title: string;
  description: string;
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    number: '01',
    title: 'Frontend & Web',
    description: 'Building responsive, interactive, and performant web experiences from the ground up.',
    skills: [
      { name: 'HTML5',         level: 'Core',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3',          level: 'Core',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'JavaScript',    level: 'Advanced',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'React',         level: 'Advanced',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Next.js',       level: 'Advanced',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', invertOnDark: true },
      { name: 'React Native',  level: 'Proficient',icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Expo',          level: 'Proficient',icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg', invertOnDark: true },
      { name: 'Electron.js',   level: 'Proficient',icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg' },
    ],
  },
  {
    number: '02',
    title: 'Backend & Databases',
    description: 'Designing server-side logic, APIs, and working with relational and NoSQL databases.',
    skills: [
      { name: 'Node.js',    level: 'Advanced',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Express.js', level: 'Advanced',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', invertOnDark: true },
      { name: 'MongoDB',    level: 'Proficient',icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'MySQL',      level: 'Proficient',icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'Python',     level: 'Learning',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    ],
  },
  {
    number: '03',
    title: 'Tools & Design',
    description: 'Version control, design tools, and creative software I use daily to build and collaborate.',
    skills: [
      { name: 'Git',    level: 'Core',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub', level: 'Core',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', invertOnDark: true },
      { name: 'Figma',  level: 'Proficient',icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
      { name: 'Canva',  level: 'Proficient',icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg' },
    ],
  },
];

export default function SkillsPage() {
  return (
    <article className="interior-page skills-section" id="skills" aria-labelledby="skills-title">
      <PageHeading
        index="02"
        eyebrow="CAPABILITIES"
        title="Skills"
        description="The tools, technologies, and creative disciplines I use to build bold digital experiences."
      />

      <section className="page-content-section skill-focus-list" aria-label="Skill categories">
        {skillCategories.map((category) => (
          <article className="skill-focus-row" key={category.number}>
            <span className="focus-index">{category.number}</span>
            <div className="skill-focus-content">
              <h2>{category.title}</h2>
              <p className="body-copy">{category.description}</p>
              <div className="skill-tags-grid">
                {category.skills.map((skill) => (
                  <div
                    className={`skill-chip${skill.level === 'Learning' ? ' skill-chip--learning' : ''}`}
                    key={skill.name}
                    title={skill.level === 'Learning' ? `${skill.name} — Still Learning` : skill.name}
                  >
                    <img
                      className={`skill-chip-logo${skill.invertOnDark ? ' skill-chip-logo--invert' : ''}`}
                      src={skill.icon}
                      alt={`${skill.name} logo`}
                      width={16}
                      height={16}
                      loading="lazy"
                    />
                    <span className="skill-chip-name">{skill.name}</span>
                    <span className="skill-chip-level">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>
            <span className="entry-note">{String(category.skills.length).padStart(2, '0')} SKILLS</span>
          </article>
        ))}
      </section>
    </article>
  );
}
