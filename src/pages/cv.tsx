import CvItem from '../components/CvItem'
import styles from './cv.module.css'

export default function CV() {
  return (
    <div className={styles.container}>
      <section>
        <h1>Introduction</h1>
        <article>
          <p>
            I am an extremely passionate <b>Physicist</b> turned <b>Data Scientist</b> with a very broad skillset. I rapidly learn new skills and strive to gain a deep understanding of everything I work with. I never settle for mediocre results, always going the extra mile to achieve an outcome I can be proud of.
          </p>
          <p>
            As a <b>Theoretical Physicist</b>, I have plenty of experience with complicated mathematics. Besides constructing mathematical models, I am capable of putting them to the test in high performance simulations. I enjoy converting the results to an interesting story and <b>presenting</b> them to people without a technical background.
          </p>
          <p>
            As a <b>Data Scientist</b>, I am comfortable taking on problems from almost any field, without relying too much on domain-specific knowledge. However, I am nothing if not curious and I will learn about a new field as I am working on it. I am therefore very <b>versatile</b> and do not hestitate to tackle any challenge. This makes me a valuable asset to any company that deals with data.
          </p>
          <p>
            Working as a Backend Developer helped me hone my skills as a programmer. I am proficient with multiple programming languages, most notably <b>Python</b>, <b>C++</b> and <b>PHP</b>. I enjoy writing safe, optimised, well-tested code that runs without errors in production.
          </p>
          <p>
            Besides my technical skills, I also enjoy contributing to the rest of the company. I think it's important to cooperate with other departments such as marketing and operations. This allows me to properly prioritise my projects and maximise my impact on the business.
          </p>
          <p>
            I hope this curriculum vitae is the start of a wonderful and memorable experience for both of us.
          </p>
        </article>
      </section>
      <section>
        <h1>Work Experience</h1>
        <CvItem company='Dyme' function='Data Scientist' city='Amsterdam' dates='May 2019 - 2022'>
            <ul>
              <li>Supporting a FinTech startup as it grew tenfold in valuation and tripled in personnel.</li>
              <li>As the only Data Scientist I coordinated with all departments of the company.</li>
              <li>Developed, implemented and maintained crucial models for the business, giving customers valuable insights into their finances.</li>
              <li>Optimised support processes by creating a model for categorising support tickets and integrating it into Zendesk.</li>
              <li>Provided Operations and Marketing with valuable dashboards for day-to-day business.</li>
              <li>Implemented new features, fixed bugs and integrated external API's in the backend as  part of the development team.</li>
              <li>Added observability to monitor API and microservice health.</li>
            </ul>
        </CvItem>
        <CvItem company='University of Amsterdam' function='Freelance developer' city='Amsterdam' dates='Nov 2022 - Dec 2022'>
          <ul>
            <li>Optimised a quantum mechanical simulation for a PhD student and implemented it using C++ and OpenCL.</li>
            <li>Achieved a factor 7000 improvement on program runtime over the original Python implementation.</li>
            <li>Results to be published in 2023 as co-author.</li>
          </ul>
        </CvItem>
        <CvItem company='University of Amsterdam' function='Student Assistent' city='Amsterdam' dates='Oct 2018 - Jun 2019'>
          <ul>
            <li>Developed a system for running and analysing many-body simulations on a remote cluster using CUDA.</li>
          </ul>
        </CvItem>
      </section>
    </div>
  )
}