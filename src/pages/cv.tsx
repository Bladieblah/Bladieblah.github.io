import CvItem from '../components/CvItem'
import CvSkill from '../components/CvSkill'
import styles from './styles/cv.module.css'
import Footer from '../components/Footer'

export default function CV() {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src='/me.jpg' alt='idk'/>
      </div>
      <section>
        <h1 style={{marginTop: '0px'}}>Introduction</h1>
        <article>
          <p>
            I am a passionate <b>Physicist</b> turned <b>Data Scientist</b> with a very broad skillset. I rapidly learn new skills and strive to gain a deeper understanding of everything I work with. I never settle for mediocre results, always going the extra mile to achieve an outcome we can be proud of.
          </p>
          <p>
            As a <b>Theoretical Physicist</b>, I have plenty of experience with complicated mathematics. Besides constructing mathematical models, I am capable of putting them to the test in high performance numerical simulations. I enjoy converting the results to an interesting story and <b>presenting</b> them to people without a technical background.
          </p>
          <p>
            Working as a <b>Data Scientist</b>, I am comfortable taking on problems from almost any field, without relying too much on domain-specific knowledge. However, I am nothing if not curious and I will learn about a new field as I am working on it. I am therefore very <b>versatile</b> and do not hestitate to take on any challenge. This makes me a valuable asset to any company that deals with data.
          </p>
          <p>
            Working as a Backend Developer helped me hone my skills as a programmer. I am proficient with serveral programming languages, most notably <b>Python</b>, <b>C++</b> and <b>PHP</b>. Writing safe, optimised, well-tested code that runs without errors in production is something that I enjoy doing.
          </p>
          <p>
            Besides my technical skills, I also enjoy contributing to the rest of the company. I think it{`'`}s important to cooperate with other departments such as marketing and operations. Directly experiencing my impact on the rest of the company is one of the most rewarding aspects of working as a Data Scientist.
          </p>
          <p>
            If you like my curriculum vitae, please reach out and it will hopefully lead to a fruitful partnership.
          </p>
        </article>
      </section>
      <section>
        <h1>Work Experience</h1>
        <CvItem company='Dyme' function='Data Scientist' city='Amsterdam' dates='May 2019 - 2023'>
            <ul>
              <li>Supporting a FinTech startup as it grew tenfold in valuation and tripled in personnel</li>
              <li>As the only Data Scientist I coordinated with all departments of the company</li>
              <li>Developed, implemented and maintained crucial models for the business, giving customers valuable insights into their finances</li>
              <li>Optimised support processes by creating a model for categorising support tickets and integrating it into Zendesk</li>
              <li>Provided Operations and Marketing with valuable dashboards for day-to-day business</li>
              <li>Implemented new features, fixed bugs and integrated external API{`'`}s in the backend as  part of the development team</li>
              <li>Architected and engineered new observability tooling to monitor API and microservice health</li>
            </ul>
        </CvItem>
        <div className={styles.footer}><Footer/></div>
        <CvItem company='University of Amsterdam' function='Freelance developer' city='Amsterdam' dates='Nov 2022 - Dec 2022'>
          <ul>
            <li>Optimised a quantum mechanical simulation for a PhD student and implemented it using C++ and OpenCL</li>
            <li>Achieved a factor 7000 improvement on program runtime over the original Python implementation</li>
            <li>Results to be published in 2023 as co-author</li>
          </ul>
        </CvItem>
        <CvItem company='University of Amsterdam' function='Student Assistent' city='Amsterdam' dates='Oct 2018 - Jun 2019'>
          <ul>
            <li>Developed a system for running and analysing many-body simulations on a remote cluster using CUDA</li>
          </ul>
        </CvItem>
        <CvItem company='Praxis' function='Part-time job' city='Amersfoort' dates='Oct 2015 - May 2019'>
        </CvItem>
      </section>
      <section>
        <h1>Education</h1>
        <CvItem company='University of Amsterdam' function='MSc Theoretical Physics' city='Amsterdam' dates='Sep 2018 - Aug 2020'>
          <ul>
            <li>Theoretical Physics, with multiple courses in Computational Physics, GPA 8.2</li>
            <li>Thesis &ldquo;An objective collapse theory using spontaneous symmetry breaking&rdquo;, Graded 8.5</li>
          </ul>
        </CvItem>
        <CvItem company='University of Amsterdam' function='BSc Physics &amp; Astronomy' city='Amsterdam' dates='Sep 2015 - Aug 2018'>
          <ul>
            <li>Obtained 246 EC in 3 years, graduated with Honours and Cum Laude distinctions, GPA 8.5</li>
            <li>Extracurricular courses from Computer Science and the Humanities Faculty</li>
            <li>Thesis &ldquo;An objective collapse theory using spontaneous symmetry breaking&rdquo;, Graded 8.5</li>
          </ul>
        </CvItem>
      </section>
      <section>
        <h1>Skills</h1>
        <CvSkill name='Programming languages'>
          Python, C/C++, PHP, OpenGL, OpenCL, SQL, Kubernetes, Latex, Regex
        </CvSkill>
        <CvSkill name='Working in teams'>
          Agile team with 2-week sprints, daily stand-ups, refinement, planning, demo, retrospective, Notion for tasks managing
        </CvSkill>
        <CvSkill name='Academic Skills'>
          Research, presenting, academic writing, exploring and reading academic literature
        </CvSkill>
        <CvSkill name='Languages'>
          Dutch (Native), English (Fluent)
        </CvSkill>
      </section>
      <section>
        <h1>Interests</h1>
        <CvSkill name='Aikido'>
          13 years of experience, black belt. Currently training for 2nd Dan degree.
        </CvSkill>
        <CvSkill name='Guitar'>
          9 years experience, occasionally post covers to youtube channel. Regularly rehearse with my band.
        </CvSkill>
      </section>
    </div>
  )
}