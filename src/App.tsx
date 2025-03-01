import { useState } from "react";

type Job = {
  id: number;
  company: string;
  logo: string;
  position: string;
  languages: string[];
  postedAt: string;
  contract: string;
  location: string;
  new: boolean;
  featured: boolean
  
};

const jobs: Job[] = [
  {
    id: 1,
    company: "Photosnap",
    logo: "/images/photosnap.svg",
    position: "Senior Frontend Developer",
    languages: ["Frontend","HTML","senior", "CSS", "JavaScript"],
    postedAt: "1d ago",
    contract: "Full Time",
    location: "USA Only",
    new: true,
    featured: true,
  },
  {
    id: 2,
    company: "Manage",
    logo: "/images/manage.svg",
    position: "Fullstack Developer",
    languages: ["Fullstack", "Midweight","Python", "React"],
    postedAt: "1d ago",
    contract: "Part Time",
    location: "Remote",
    new: true,
    featured: true,
  },
  {
    id: 3,
    company: "Account",
    logo: "/images/account.svg",
    position: "Junior Frontend Developer",
    languages: ["Frontend", "Junior", "React", "Sass", "Javascript"],
    postedAt: "2d ago",
    contract: "Part Time",
    location: "USA Only",
    new: true,
    featured: false,
  },
  {
    id: 4,
    company: "MyHome",
    logo: "/images/myhome.svg",
    position: "Junior Frontend Developer",
    languages: ["CSS", "JavaScript", "FrontEnd", "Junior"],
    postedAt: "5d ago",
    contract: "Contract",
    location: "USA Only",
    new: false,
    featured: false,
  },
  {
    id: 5,
    company: "Loop Studios",
    logo: "/images/loop-studios.svg",
    position: "Software Engineer",
    languages: ["JavaScript", "Ruby", "Fullstack", "Midweight", "Sass"],
    postedAt: "1w ago",
    contract: "Full Time",
    location: "Worldwide",
    new: false,
    featured: false,
  },
  {
    id: 6,
    company: "FaceIt",
    logo: "/images/faceit.svg",
    position: "Junior Backend Developer",
    languages: ["Ruby", "Backend", "Junior", "Ror"],
    postedAt: "2w ago",
    contract: "Full Time",
    location: "UK Only",
    new: false,
    featured: false,
  },
  {
    id: 7,
    company: "Shortly",
    logo: "/images/shortly.svg",
    position: "Junior Developer",
    languages: ["HTML", "JavaScript", "Frontend", "Junior", "Sasas"],
    postedAt: "2w ago",
    contract: "Full Time",
    location: "Worldwide",
    new: false,
    featured: false,
  },
  {
    id: 8,
    company: "Insure",
    logo: "/images/insure.svg",
    position: "Junior Frontend Developer",
    languages: ["JavaScript", "Vue", "Frontend", "junior", "Sass"],
    postedAt: "2w ago",
    contract: "Full Time",
    location: "USA Only",
    new: false,
    featured: false,
  },
  {
    id: 9,
    company: "Eyecam Co.",
    logo: "/images/eyecam-co.svg",
    position: "Full Stack Engineer",
    languages: ["JavaScript", "Python", "Fullstack", "Midweight", "Django"],
    postedAt: "2w ago",
    contract: "Full Time",
    location: "Worldwide",
    new: false,
    featured: false,
  },
  {
    id: 10,
    company: "The Air Filter Company",
    logo: "/images/the-air-filter-company.svg",
    position: "Front-end Dev",
    languages: ["JavaScript", "Frontend", "Junior", "React"],
    postedAt: "1mo ago",
    contract: "Part Time",
    location: "Worldwide",
    new: false,
    featured: false,
  }
];

export default function JobFilter() {
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);

  const toggleLanguage = (language: string) => {
    setSelectedLanguages((prev) =>
      prev.includes(language)
        ? prev.filter((lang) => lang !== language)
        : [...prev, language]
    );
  };

  const filteredJobs =
    selectedLanguages.length > 0
      ? jobs.filter((job) =>
          selectedLanguages.every((lang) => job.languages.includes(lang))
        )
      : jobs;

  return (
    <div className="bg-cyan-50 min-h-screen">
      <div className="bg-[#5CA5A5] w-full h-30 flex items-center justify-center">
        <img src="/Images/Mask.png" alt="" />
        <h1 className="text-white text-[60px] font-serif">Job Listings</h1>
      </div>

      <div className="p-6">
      
        <div className="mb-4 flex flex-wrap gap-2">
          {selectedLanguages.map((lang) => (
            <span
              key={lang}
              className="w-auto bg-[#5CA5A5] text-white px-3 py-1 rounded-full cursor-pointer"
              onClick={() => toggleLanguage(lang)}
            >
              {lang} ✖
            </span>
          ))}
        </div>

   
        <ul className="space-y-4">
          {filteredJobs.map((job) => (
            <li
              key={job.id}
              className="bg-white p-6 rounded-lg shadow flex flex-col md:flex-row justify-between items-center"
            >
              <div className="flex items-center gap-4">
                <img src={job.logo} className="w-12 h-12" />
                <div>
                  <div className="flex gap-2 items-center">
                    <h2 className="text-[18px] font-bold text-[#5CA5A5] font-[League Spartan]">
                      {job.company}
                    </h2>

                    {job.new && (
                      <span className="bg-[#5CA5A5] text-white px-2 py-1 rounded-full text-sm font-bold">
                        NEW!
                      </span>
                    )}
                    {job.featured && (
                      <span className="bg-black text-white px-2 py-1 rounded-full text-sm font-bold">
                        FEATURED
                      </span>
                    )}
                  </div>

                  <p className="font-league-spartan text-[22px] font-bold text-[#2B3939] leading-[24px]">
                    {job.position}
                  </p>
                  <div className="flex gap-[15px]">
                    <h2 className="text-[#7C8F8F] font-[League Spartan] font-[18px]">
                      {job.postedAt}
                    </h2>
                    <h2 className="text-[#7C8F8F] font-[League Spartan] font-[18px]">
                      {job.contract}
                    </h2>
                    <p className="text-[#7C8F8F] font-[League Spartan] font-[18px]">
                      {job.location}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
                {job.languages.map((lang) => (
                  <span
                    key={lang}
                    className={`cursor-pointer px-3 py-1 rounded-full ${
                      selectedLanguages.includes(lang)
                        ? "bg-white text-[#5CA5A5] border-2 border-[#5CA5A5]"
                        : "bg-gray-200 text-gray-700"
                    }`}
                    onClick={() => toggleLanguage(lang)}
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}