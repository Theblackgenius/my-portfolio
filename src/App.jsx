import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './components/ui/card';
import { Button } from './components/ui/button';
import { ArrowUpRight, Mail, Phone, Download, Linkedin, BarChart3, Database, Sparkles, Github } from 'lucide-react';
import './index.css';

const SectionTitle = ({ title, subtitle }) => (
  <div className="max-w-4xl mx-auto text-center mb-10">
    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{title}</h2>
    {subtitle && <p className="text-muted-foreground mt-2 text-base md:text-lg">{subtitle}</p>}
  </div>
);

const ProjectCard = ({ title, stack, bullets, cta }) => (
  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
    <Card className="rounded-2xl shadow-sm hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{stack}</p>
          </div>
          {cta && (
            <a href={cta.href} target="_blank" rel="noreferrer">
              <Button size="sm" variant="secondary" className="gap-1">
                View <ArrowUpRight className="h-4 w-4" />
              </Button>
            </a>
          )}
        </div>
        <ul className="mt-4 space-y-2 text-sm leading-6">
          {bullets.map((b, i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/70" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 pt-16 pb-8">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs md:text-sm bg-white">
                <Sparkles className="h-4 w-4" />
                <span>Data Analyst • Business Intelligence</span>
              </div>
              <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">Daniel Olanrewaju</h1>
              <p className="mt-4 text-muted-foreground max-w-xl">
                I turn raw data into decisions. SQL, Excel, Power BI, Tableau. Dashboards, KPI models, and automation that cut reporting time and improve performance.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="mailto:olanrewajutd@gmail.com">
                  <Button className="gap-2"><Mail className="h-4 w-4" /> Mail</Button>
                </a>
                <a href="tel:+447448113345">
                  <Button variant="secondary" className="gap-2"><Phone className="h-4 w-4" />Mobile</Button>
                </a>
                <a href="https://www.linkedin.com/in/tobisucre" target="_blank" rel="noreferrer">
                  <Button variant="outline" className="gap-2"><Linkedin className="h-4 w-4" /> LinkedIn</Button>
                </a>
                <a href="https://github.com/Theblackgenius?tab=repositories" target="_blank" rel="noreferrer">
                  <Button variant="outline" className="gap-2"><Github className="h-4 w-4" /> Github</Button>
                </a>
                {/* <a href="#">
                  <Button variant="ghost" className="gap-2"><Download className="h-4 w-4" /> Resume</Button>
                </a> */}
              </div>
            </div>

            <div className="md:col-span-5">
              <Card className="rounded-2xl">
                <CardContent className="p-6 grid grid-cols-2 gap-4">
                  <div className="rounded-xl border p-4">
                    <BarChart3 className="h-6 w-6" />
                    <p className="mt-2 text-sm">Power BI</p>
                    <p className="text-xs text-muted-foreground">Dashboards and DAX</p>
                  </div>
                  <div className="rounded-xl border p-4">
                    <Database className="h-6 w-6" />
                    <p className="mt-2 text-sm">SQL</p>
                    <p className="text-xs text-muted-foreground">Data modelling and ETL</p>
                  </div>
                  <div className="rounded-xl border p-4">
                    <p className="font-medium">Excel</p>
                    <p className="text-xs text-muted-foreground">Power Query, PivotTables</p>
                  </div>
                  <div className="rounded-xl border p-4">
                    <p className="font-medium">Python</p>
                    <p className="text-xs text-muted-foreground">pandas, matplotlib</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-16" id="projects">
        <SectionTitle title="Projects" subtitle="Selected work with clear problems, methods, and measurable outcomes." />
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-6">
    
          <ProjectCard
            title="Google Ads Performance Analytics"
            stack="MySQL • Power BI • DAX"
            bullets={[
              "Modelled two thousand plus campaign rows and unified metrics for ROI and ROAS.",
              "Visualised performance by device, day, and region; flagged wasted spend.",
              "Informed budget shifts that improved paid performance.",
            ]}
            cta={{ href: "https://github.com/Theblackgenius/google-ads-campaign-analysis" }}
          />
    
          <ProjectCard
            title="Laptop Market Analysis"
            stack="SQL • Power BI • Excel"
            bullets={[
              "Analysed one thousand two hundred plus product records to map price versus performance drivers.",
              "Built a four page dashboard with dynamic filters for brand, GPU, and OS.",
              "Highlighted top value models across tiers and key price drivers.",
            ]}
            cta={{ href: "https://github.com/Theblackgenius/laptop-market-analysis-dashboard" }}
          />
    
          <ProjectCard
            title="Customer Segmentation"
            stack="Python • scikit-learn • pandas"
            bullets={[
              "Clustered five thousand plus customers to reveal high retention segments.",
              "Built clean feature set and visuals to support marketing decisions.",
              "Improved engagement with targeted strategies.",
            ]}
            cta={{ href: "#" }}
          />

          <ProjectCard
            title="Sales Performance Dashboard"
            stack="SQL • Tableau • Excel"
            bullets={[
              "Built a Tableau dashboard to visualise regional and product sales performance.",
              "Connected SQL data sources and automated refresh schedules for live updates.",
              "Revealed underperforming regions and products, driving a 10% improvement in quarterly profit."
            ]}
            cta={{ href: "#" }}
          />

        </div>
      </section>

      <section className="py-12 md:py-16 bg-muted/30" id="experience">
        <SectionTitle title="Experience" subtitle="Highlights that show momentum and impact." />
        <div className="max-w-4xl mx-auto px-4">
          <Card className="rounded-2xl">
            <CardContent className="p-6 space-y-3">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <h3 className="text-lg font-semibold">Squareme Africa • Data Analyst Intern</h3>
                <p className="text-sm text-muted-foreground">Jan 2025</p>
              </div>
              <ul className="text-sm space-y-2">
                <li>Automated reporting with SQL and Excel, saving thirty percent of manual time.</li>
                <li>Built KPI dashboards in Power BI to speed up decisions by twenty five percent.</li>
                <li>Analysed engagement trends that lifted activity by forty percent.</li>
                <li>Partnered with product and UX on accessibility and performance tracking.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-12 md:py-16" id="skills">
        <SectionTitle title="Skills" subtitle="The tools I use to get results." />
        <div className="max-w-5xl mx-auto px-4 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "SQL: PostgreSQL, MySQL, modelling, optimisation",
            "Power BI: DAX, Power Query, data modelling",
            "Excel: PivotTables, XLOOKUP, Power Query",
            "Tableau: interactive dashboards, calculated fields, storytelling",
            "Python: pandas, NumPy, matplotlib",
            "Analytics: KPI design, A/B logic, cohort views"
          ].map((s, i) => (
            <div key={i} className="rounded-2xl border p-4 text-sm bg-white">
              {s}
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 md:py-16 bg-muted/30" id="resume">
        <SectionTitle title="Contact" subtitle="Reach out for roles, collaborations, or a walkthrough of any project." />
        <div className="max-w-4xl mx-auto px-4 flex flex-wrap gap-3">
          <a href="mailto:olanrewajutd@gmail.com">
            <Button className="gap-2"><Mail className="h-4 w-4" /> Mail</Button>
          </a>
          <a href="tel:+447448113345">
            <Button variant="secondary" className="gap-2"><Phone className="h-4 w-4" />Mobile</Button>
          </a>
          <a href="https://www.linkedin.com/in/tobisucre" target="_blank" rel="noreferrer">
            <Button variant="outline" className="gap-2"><Linkedin className="h-4 w-4" /> LinkedIn</Button>
          </a>
          <a href="https://github.com/Theblackgenius?tab=repositories" target="_blank" rel="noreferrer">
            <Button variant="outline" className="gap-2"><Github className="h-4 w-4" /> Github</Button>
          </a>
          {/* <a href="#" download>
            <Button variant="ghost" className="gap-2"><Download className="h-4 w-4" /> Download CV</Button>
          </a> */}
        </div>
      </section>

      <footer className="py-10 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Daniel Olanrewaju. All rights reserved.
      </footer>
    </div>
  );
}
