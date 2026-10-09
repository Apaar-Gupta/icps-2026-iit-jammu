// Real committee data extracted from
// "ICPS_IEEE_Conference_Committee_Positions_Final.docx"
// Edit this file directly to update names/affiliations.

export type CommitteeGroup = {
  position: string;
  responsibility?: string;
  members: string[];
};

export const committeeGroups: CommitteeGroup[] = [
  {
    position: "Patron",
    responsibility: "Conference leadership / institutional patronage",
    members: ["Prof. Manoj Singh Gaur, Director, IIT Jammu"],
  },
  {
    position: "Core Steering Committee Chairs",
    responsibility: "Strategic direction and continuity",
    members: [
      "Prof. S. N. Singh, IIT Kanpur",
      "Prof. S. A. Khaparde, Retd. IIT Bombay",
      "Prof. I. M. Tamrakar, Retd. IoE Nepal",
    ],
  },
  {
    position: "General Chair(s)",
    responsibility: "Overall conference leadership",
    members: [
      "Dr. Anup Shukla, Department of Electrical Engineering, IIT Jammu",
    ],
  },
  {
    position: "General Co-Chair",
    members: [
      "Prof. Asheesh Kumar Singh, MNNIT Allahabad (IEEE UP Section)",
    ],
  },
  {
    position: "Steering Committee Members",
    members: [
      "Prof. A.K. Pradhan, IIT Kharagpur, India",
      "Prof. Abhijit R. Abhyankar, IIT Delhi, India",
      "Dr. Arun K. Mishra, Vice Chair ISGAN & Director NSGM-PMU, India",
      "Prof. Celia Shahnaz, BUET, Bangladesh",
      "Prof. Dipti Srinivasan, NUS, Singapore",
      "Prof. Joydeep Mitra, MSU, USA",
      "Dr. K.V.S. Baba, CMD, POSOCO, India",
      "Prof. Karki, IoE, Nepal",
      "Prof. Prabodh Bajpai, IIT Kanpur, India",
      "Prof. Anjan Bose, WSU, USA",
      "Prof. R. Sarathi, IIT Madras, India",
      "Dr. Reji Pillai, President, ISGF & Chairman, GSEF, India",
      "Prof. Rohit Bhakar, MNIT Jaipur",
      "Prof. S. A. Soman, IIT Bombay, India",
      "Prof. S. C. Srivastava, IIT Kanpur, India",
      "Dr. S.K. Soonee, Advisor, POSOCO, India",
      "Dr. Subir Sen, COO, PGCIL, India",
      "Prof. Tapan Saha, Uni of Queensland, Australia",
      "Dr. V. S. Nand Kumar, DG, CPRI, India",
      "Prof. Weerakorn Ongsakul, AIT Bangkok, Thailand",
    ],
  },
  {
    position: "International Advisory Committee",
    members: [
      "Prof. Alberto Borghetti, University of Bologna, Italy",
      "Prof. Anil Pahwa, Kansas State University, USA",
      "Prof. Anurag Srivastava, Washington State University (WSU), USA",
      "Prof. Arindam Ghosh, Curtin University, Australia",
      "Prof. J. Ekanayake, University of Peradeniya, Sri Lanka",
      "Prof. Jignesh Solanki, West Virginia University, USA",
      "Prof. Josep Pou, Nanyang Technological University (NTU), Singapore",
      "Prof. Lalit Goel, Nanyang Technological University (NTU), Singapore",
      "Prof. Mohan Kolhe, University of Agder, Norway",
      "Prof. Saifur Rahman, Virginia Tech, USA",
      "Prof. T. S. Sidhu, University of Ontario, Canada",
      "Prof. Tapan Saha, University of Queensland, Australia",
      "Prof. Venkataramana Ajjarapu, Iowa State University (ISU), USA",
      "Prof. Vladimir Terzija, University of Manchester, UK",
    ],
  },
  {
    position: "National Advisory Committee",
    members: [
      "Prof. Anil Kulkarni, IIT Bombay, India",
      "Prof. Bhim Singh, IIT Delhi, India",
      "Prof. Bidyadhar Subudhi, IIT Goa, India",
      "Prof. B. G. Fernandes, IIT Bombay, India",
      "Prof. C. Nagmani, NIT Trichy, India",
      "Prof. D. Thukaram, IISc Bangalore, India",
      "Prof. H. M. Suryawanshi, VNIT, Nagpur",
      "Prof. Joy Thomas M, IISc Bangalore, India",
      "Prof. R. K. Pandey, IIT BHU, India",
      "Prof. Saikat Chakrabarti, IIT Kanpur, India",
      "Prof. S. V. Kulkarni, IIT Bombay, India",
      "Prof. Shanti Swarup, IIT Madras, India",
      "Prof. Trapti Jain, IIT Indore, India",
      "Prof. Vinod John, IISc Bangalore, India",
      "Prof. Vivek Agarwal, IIT Bombay, India",
    ],
  },
  {
    position: "Organizing Chairs",
    members: [
      "Dr. Arun Kumar Verma, Department of Electrical Engineering, IIT Jammu",
      "Dr. Priyatosh Jena, Department of Electrical Engineering, IIT Jammu",
    ],
  },
  {
    position: "Technical Program Chairs",
    members: [
      "Dr. Padmini Singh, Department of Electrical Engineering, IIT Jammu",
      "Dr. Priyanka Mishra, Department of Electrical Engineering, IIT Jammu",
      "Dr. Ibhanchand Rath, Department of Electrical Engineering, IIT Jammu",
    ],
  },
  {
    position: "Technical Program Committee",
    members: [
      "Dr. Sarada Prasad Gochhayat, Department of Computer Science & Engineering, IIT Jammu",
      "Dr. Vinit Jakhetiya, Department of Computer Science & Engineering, IIT Jammu",
    ],
  },
  {
    position: "Finance and Sponsorship Chairs",
    members: [
      "Dr. Badri Narayan Subudhi, Department of Electrical Engineering, IIT Jammu",
      "Dr. Ambika Prasad Shah, Department of Electrical Engineering, IIT Jammu",
    ],
  },
  {
    position: "Publication Chairs",
    members: [
      "Dr. Arun Kumar Verma, Department of Electrical Engineering, IIT Jammu",
    ],
  },
  {
    position: "Logistic Chair",
    members: [
      "Dr. Ankur Bansal, Department of Electrical Engineering, IIT Jammu",
      "Dr. Chandan Yadav, Department of Electrical Engineering, IIT Jammu",
    ],
  },
  {
    position: "Website Management and IT Support Chair",
    members: [
      "Dr. Pratik Kumar, Department of Civil Engineering, IIT Jammu",
      "Dr. Anil Saini, Sr. Scientific Officer at IIT Jammu",
      "Dr. Priyatosh Jena, Department of Electrical Engineering, IIT Jammu",
    ],
  },
  {
    position: "Accommodation Committee",
    members: ["Dr. Arvind Kumar", "Dr. Ram Prakash Prajapat"],
  },
];
