import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conference Committee | ICPS 2026",
  description:
    "Conference Committee for ICPS 2026, hosted at IIT Jammu, India.",
};

type Member = { name: string; affiliation: string };
type CommitteeGroup = { title: string; members: Member[] };

// NOTE: names/affiliations copied as-is from ICPS 2025 for reference —
// replace with the actual ICPS 2026 / IIT Jammu committee before publishing.
const committees: CommitteeGroup[] = [
  {
    title: "Patron",
    members: [{ name: "Prof. B. S. Murty", affiliation: "Director, IIT Hyderabad" }],
  },
  {
    title: "Core Steering Committee Chairs",
    members: [
      { name: "Prof. S. N. Singh", affiliation: "IIT Kanpur" },
      { name: "Prof. S. A. Khaparde", affiliation: "Retd. IIT Bombay" },
      { name: "Prof. I. M. Tamrakar", affiliation: "Retd. IoE Nepal" },
    ],
  },
  {
    title: "General Chairs",
    members: [
      { name: "Prof. Ravikumar Bhimasingu", affiliation: "IIT Hyderabad" },
      { name: "Shri. M. K. Ramesh", affiliation: "CGM, SRLDC, Grid-India" },
    ],
  },
  {
    title: "General Co-Chair",
    members: [
      {
        name: "Prof. Asheesh Kumar Singh",
        affiliation: "MNNIT Allahabad (IEEE UP Section)",
      },
    ],
  },
  {
    title: "Steering Committee Members",
    members: [
      { name: "Prof. A.K. Pradhan", affiliation: "IIT Kharagpur, India" },
      { name: "Prof. Abhijit R. Abhyankar", affiliation: "IIT Delhi, India" },
      {
        name: "Dr. Arun K. Mishra",
        affiliation: "Vice Chair ISGAN & Director NSGM-PMU, India",
      },
      { name: "Prof. Celia Shahnaz", affiliation: "BUET, Bangladesh" },
      { name: "Prof. Dipti Srinivasan", affiliation: "NUS, Singapore" },
      { name: "Prof. Joydeep Mitra", affiliation: "MSU, USA" },
      { name: "Dr. K.V.S. Baba", affiliation: "CMD, POSOCO, India" },
      { name: "Prof. Karki", affiliation: "IoE, Nepal" },
      { name: "Prof. Prabodh Bajpai", affiliation: "IIT Kanpur, India" },
      { name: "Prof. Anjan Bose", affiliation: "WSU, USA" },
      { name: "Prof. R. Sarathi", affiliation: "IIT Madras, India" },
      {
        name: "Dr. Reji Pillai",
        affiliation: "President, ISGF & Chairman, GSEF, India",
      },
      { name: "Prof. Rohit Bhakar", affiliation: "MNIT Jaipur" },
      { name: "Prof. S. A. Soman", affiliation: "IIT Bombay, India" },
      { name: "Prof. S. C. Srivastava", affiliation: "IIT Kanpur, India" },
      { name: "Dr. S.K. Soonee", affiliation: "Advisor, POSOCO, India" },
      { name: "Dr. Subir Sen", affiliation: "COO, PGCIL, India" },
      { name: "Prof. Tapan Saha", affiliation: "Uni of Queensland, Australia" },
      { name: "Dr. V. S. Nand Kumar", affiliation: "DG, CPRI, India" },
      {
        name: "Prof. Weerakorn Ongsakul",
        affiliation: "AIT Bangkok, Thailand",
      },
    ],
  },
  {
    title: "International Advisory Committee",
    members: [
      { name: "Prof. Alberto Borghetti", affiliation: "University of Bologna, Italy" },
      { name: "Prof. Anil Pahwa", affiliation: "Kansas State University, USA" },
      {
        name: "Prof. Anurag Srivastava",
        affiliation: "Washington State University (WSU), USA",
      },
      { name: "Prof. Arindam Ghosh", affiliation: "Curtin University, Australia" },
      { name: "Prof. J. Ekanayake", affiliation: "University of Peradeniya, Sri Lanka" },
      { name: "Prof. Jignesh Solanki", affiliation: "West Virginia University, USA" },
      {
        name: "Prof. Josep Pou",
        affiliation: "Nanyang Technological University (NTU), Singapore",
      },
      {
        name: "Prof. Lalit Goel",
        affiliation: "Nanyang Technological University (NTU), Singapore",
      },
      { name: "Prof. Mohan Kolhe", affiliation: "University of Agder, Norway" },
      { name: "Prof. Saifur Rahman", affiliation: "Virginia Tech, USA" },
      { name: "Prof. T. S. Sidhu", affiliation: "University of Ontario, Canada" },
      { name: "Prof. Tapan Saha", affiliation: "University of Queensland, Australia" },
      {
        name: "Prof. Venkataramana Ajjarapu",
        affiliation: "Iowa State University (ISU), USA",
      },
      { name: "Prof. Vladimir Terzija", affiliation: "University of Manchester, UK" },
    ],
  },
  {
    title: "National Advisory Committee",
    members: [
      { name: "Prof. Anil Kulkarni", affiliation: "IIT Bombay, India" },
      { name: "Prof. Bhim Singh", affiliation: "IIT Delhi, India" },
      { name: "Prof. Bidyadhar Subudhi", affiliation: "IIT Goa, India" },
      { name: "Prof. B. G. Fernandes", affiliation: "IIT Bombay, India" },
      { name: "Prof. C. Nagmani", affiliation: "NIT Trichy, India" },
      { name: "Prof. D. Thukaram", affiliation: "IISc Bangalore, India" },
      { name: "Prof. H. M. Suryawanshi", affiliation: "VNIT, Nagpur" },
      { name: "Prof. Joy Thomas M", affiliation: "IISc Bangalore, India" },
      { name: "Prof. R. K. Pandey", affiliation: "IIT BHU, India" },
      { name: "Prof. Saikat Chakrabarti", affiliation: "IIT Kanpur, India" },
      { name: "Prof. S. V. Kulkarni", affiliation: "IIT Bombay, India" },
      { name: "Prof. Shanti Swarup", affiliation: "IIT Madras, India" },
      { name: "Prof. Trapti Jain", affiliation: "IIT Indore, India" },
      { name: "Prof. Vinod John", affiliation: "IISc Bangalore, India" },
      { name: "Prof. Vivek Agarwal", affiliation: "IIT Bombay, India" },
    ],
  },
  {
    title: "Organizing Chairs",
    members: [
      { name: "Prof. Vaskar Sarkar", affiliation: "IIT Hyderabad" },
      { name: "Prof. Sivakumar Keerthipati", affiliation: "IIT Hyderabad" },
    ],
  },
  {
    title: "Technical Program Chairs",
    members: [
      { name: "Prof. Vaskar Sarkar", affiliation: "IIT Hyderabad" },
      { name: "Dr. V. Seshadri Sravan Kumar", affiliation: "IIT Hyderabad" },
      { name: "Dr. Jose Titus", affiliation: "IIT Hyderabad" },
    ],
  },
  {
    title: "Technical Program Committee",
    members: [
      { name: "Dr. Chandan Kumar", affiliation: "IIT Guwahati" },
      { name: "Dr. Sarasij Das", affiliation: "IISc Bangalore" },
      { name: "Dr. G. Siva Kumar", affiliation: "NIT Warangal" },
      { name: "Dr. Gurunath Gurrala", affiliation: "IISc Bangalore" },
      { name: "Dr. V. S. K. Murty", affiliation: "LUCES Innovation Consulting" },
      { name: "Dr. Ranjana Sodhi", affiliation: "IIT Ropar" },
      { name: "Dr. Basant Kumar Gautam", affiliation: "Tribhuvan University" },
      { name: "Dr. Abheejeet Mohapatra", affiliation: "IIT Kanpur" },
      { name: "Prof. Prabodh Bajpai", affiliation: "IIT Kanpur" },
      { name: "Prof. Soumya R. Mohanty", affiliation: "IIT BHU" },
      { name: "Prof. Ashu Verma", affiliation: "IIT Delhi" },
      { name: "Dr. Avanish Tripathi", affiliation: "IIT Delhi" },
      { name: "Prof. Rohit Bhakar", affiliation: "MNIT Jaipur" },
      { name: "Dr. Prathap Reddy B.", affiliation: "IIT Indore" },
      { name: "Prof. Naran M. Pindoriya", affiliation: "IIT Gandhinagar" },
      { name: "Dr. Chandrasekhar Perumalla", affiliation: "IIT Bhubaneswar" },
      { name: "Prof. A. K. Panchal", affiliation: "SVNIT Surat" },
      { name: "Prof. M. P. Selvan", affiliation: "NIT Trichy" },
      { name: "Prof. Ashwani Kumar Sharma", affiliation: "NIT Kurukshetra" },
      { name: "Prof. K. N. Shubhanga", affiliation: "NIT Surathkal" },
      { name: "Dr. Niraj Kumar Choudhary", affiliation: "MNNIT Allahabad" },
      { name: "Prof. Rajesh Gupta", affiliation: "MNNIT Allahabad" },
      { name: "Prof. Y. V. Pavan Kumar", affiliation: "VIT-AP" },
    ],
  },
  {
    title: "Finance and Sponsorship Chairs",
    members: [
      { name: "Dr. Rupesh Wandhare", affiliation: "IIT Hyderabad" },
      { name: "Dr. Pradeep Kumar Y.", affiliation: "IIT Hyderabad" },
    ],
  },
  {
    title: "Publication Chairs",
    members: [{ name: "Dr. Rupesh Wandhare", affiliation: "IIT Hyderabad" }],
  },
  {
    title: "Logistic Chair",
    members: [{ name: "Dr. Pradeep Kumar Y.", affiliation: "IIT Hyderabad" }],
  },
  {
    title: "Website Management and IT Support Chair",
    members: [
      { name: "Dr. V. Seshadri Sravan Kumar", affiliation: "IIT Hyderabad" },
    ],
  },
  {
    title: "Accommodation Committee",
    members: [
      { name: "Mr. S. Velmurugan", affiliation: "" },
      { name: "Mr. Manikanta P.L.G", affiliation: "" },
      { name: "Mr. Dhananjay K", affiliation: "" },
    ],
  },
];

export default function CommitteePage() {
  return (
    <main className="bg-[#FBF7F0] text-[#0A1330]">
      {/* Hero */}
      <header className="relative bg-[#003f87] text-white overflow-hidden">
        <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
        <div className="relative max-w-5xl mx-auto px-4 pt-16 pb-14 text-center">
          <p className="text-xl font-semibold tracking-[0.25em] uppercase text-orange-300 mb-3">
            ICPS 2026
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Conference Committee
          </h1>
        </div>
      </header>

      {/* Committee groups */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {committees.map((group) => (
            <div
              key={group.title}
              className="rounded-lg border border-[#003f87]/10 bg-white overflow-hidden shadow-sm"
            >
              <div className="bg-[#003f87] text-white px-5 py-3">
                <h2 className="font-semibold text-[15px]">{group.title}</h2>
              </div>
              <ul className="divide-y divide-[#003f87]/5">
                {group.members.map((m, i) => (
                  <li key={i} className="px-5 py-3">
                    <p className="text-[14px] font-semibold text-[#0A1330]">
                      {m.name}
                    </p>
                    {m.affiliation && (
                      <p className="text-[13px] text-[#0A1330]/60">
                        {m.affiliation}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#003f87] text-white/70 text-sm">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center">
          © {new Date().getFullYear()} ICPS 2026. All rights reserved. | ICPS
          2026 is organized by the Department of Electrical Engineering, IIT
          Jammu.
        </div>
      </footer>
    </main>
  );
}