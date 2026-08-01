// Data for the Technical Program page.
// NOTE: all names/titles/times copied as-is from ICPS 2025 for reference —
// update as needed for ICPS 2026 / IIT Jammu.

export type ScheduleRow = { time: string; session: string; details: string };
export type DaySchedule = {
  day: string;
  dateLabel: string;
  note: string;
  rows: ScheduleRow[];
};

export const daySchedules: DaySchedule[] = [
  {
    day: "Day 1",
    dateLabel: "07 December 2025 (Tutorials, Inaugural & Keynotes)",
    note: "The complete details related to Keynote talks and Tutorial sessions including speaker profiles and abstracts can be accessed here.",
    rows: [
      { time: "08:00 - 09:00", session: "Registration", details: "Registration & Breakfast" },
      {
        time: "09:00 - 10:30",
        session: "Tutorial Session 1 & 2",
        details:
          "Tutorial 1: Dr. Kaliappan Perumal (Additional Director, CPRI) · Tutorial 2: Dr. Gurunath Gurrala (IISc)",
      },
      { time: "10:30 - 10:45", session: "Break", details: "Tea Break" },
      {
        time: "10:45 - 12:15",
        session: "Tutorial Session 3 & 4",
        details:
          "Tutorial 3: Prof. Abhijit Abhyankar (IIT Delhi) · Tutorial 4: Dr. Gurunath Gurrala (IISc)",
      },
      { time: "12:15 - 13:15", session: "Lunch", details: "Lunch Break" },
      {
        time: "13:15 - 14:45",
        session: "Tutorial Session 5 & 6",
        details: "Tutorial 5: Dr. Mital Kanabar (Canada) · Tutorial 6: Dr. Sarasij Das (IISc)",
      },
      { time: "14:45 - 15:00", session: "Break", details: "Tea Break" },
      {
        time: "15:00 - 16:30",
        session: "Tutorial Session 7 & 8",
        details:
          "Tutorial 7: Dr. Balakrishna Pamulaparthy (GE Vernova) · Tutorial 8: Prof. Ramakrishnan Maheswari (IMEE, University of Southern Denmark)",
      },
      { time: "16:30 - 16:45", session: "Buffer", details: "Session Buffer" },
      {
        time: "16:45 - 17:45",
        session: "Inaugural",
        details:
          "Inaugural Function of the 11th International Conference on Power Systems (ICPS 2025)",
      },
      {
        time: "17:45 - 18:45",
        session: "Keynote 1",
        details: "Inaugural Keynote: Shri Samir Saxena, CMD, Grid Controller of India",
      },
      { time: "18:45 - 19:00", session: "Welcome Drinks", details: "Networking & Welcome Drinks" },
      { time: "19:00 - 20:00", session: "Awards Ceremony", details: "Hingorani Awards & GIPSA Awards Ceremony" },
      { time: "20:00 - 21:00", session: "Dinner", details: "Inaugural Conference Dinner" },
    ],
  },
  {
    day: "Day 2",
    dateLabel: "08 December 2025 (Keynotes, Oral and Poster Presentations and Special Session)",
    note: "The complete details related to Keynote talks including speaker profiles and abstracts can be accessed here.",
    rows: [
      { time: "08:00 - 09:00", session: "Registration", details: "Registration & Breakfast" },
      {
        time: "09:00 - 10:30",
        session: "Paper Sessions 1 to 6",
        details: "Parallel Paper Sessions 1 to 6: Oral Presentations on various topics across multiple tracks.",
      },
      { time: "10:30 - 10:45", session: "Break", details: "Tea Break" },
      {
        time: "10:45 - 11:45",
        session: "Keynote 2",
        details:
          "Keynote 2: Shri. Vinoth Kumar K., Principal R&D Engineer, Hitachi Energy Technology Services Private Limited",
      },
      { time: "11:45 - 12:00", session: "Buffer", details: "Session Buffer" },
      {
        time: "12:00 - 13:00",
        session: "Keynote 3",
        details:
          "Keynote 3: Prof. Mohammad Rihan, Director General of National Institute of Solar Energy (NISE), MNRE, Government of India.",
      },
      { time: "13:00 - 14:00", session: "Lunch", details: "Lunch Break" },
      {
        time: "14:00 - 15:00",
        session: "Keynote 4",
        details: "Keynote 4: Dr. Rahul Walawalkar, President, Netzero Energy Transition Association (NETRA)",
      },
      {
        time: "15:00 - 16:00",
        session: "Keynote 5",
        details:
          "Keynote 5: Dr. Soonee Sushil Kumar, Former and founder CEO POSOCO, now Grid-India; Retd,",
      },
      { time: "16:00 - 16:15", session: "Break", details: "Tea Break" },
      {
        time: "16:15 - 17:45",
        session: "Poster Session",
        details: "Poster Presentations: Interactive poster session covering diverse research topics.",
      },
      {
        time: "17:45 - 18:45",
        session: "Special Session",
        details:
          "Special Session: Bringing Together Perspective from India and neighbouring countries on the future of system operation and cross-border cooperation - Chairman: Shri S. K. Soonee",
      },
      { time: "18:45 - 19:00", session: "Buffer", details: "Session Buffer" },
      { time: "19:00 - 20:00", session: "Cultural Event", details: "Cultural Event (TBA)" },
      { time: "20:00 - 21:00", session: "Gala Dinner", details: "Gala Dinner" },
    ],
  },
  {
    day: "Day 3",
    dateLabel:
      "09 December 2025 (Keynotes, Oral Presentations, Women in Engineering and Industrial Panel Discussion sessions)",
    note: "The complete details related to Keynote talks including speaker profiles and abstracts can be accessed here.",
    rows: [
      { time: "08:00 - 09:00", session: "Registration", details: "Registration & Breakfast" },
      {
        time: "09:00 - 10:30",
        session: "Paper Sessions 7 to 12",
        details: "Parallel Paper Sessions 7 to 12: Oral Presentations on various topics across multiple tracks.",
      },
      { time: "10:30 - 10:45", session: "Break", details: "Tea Break" },
      {
        time: "10:45 - 11:45",
        session: "Keynote 6",
        details: "Keynote 6: Dr. Palak Parikh Kanabar (Canada), GE Grid Solutions, Canada",
      },
      { time: "11:45 - 12:00", session: "Buffer", details: "Session Buffer" },
      {
        time: "12:00 - 13:00",
        session: "Special Session (WIE)",
        details:
          "Special Session: Woman in Engineering (WIE). Chairman: Dr. Sridevi, Director General, Central Power Research Institute",
      },
      { time: "13:00 - 14:00", session: "Lunch", details: "Lunch Break" },
      {
        time: "14:00 - 15:00",
        session: "Keynote 7",
        details:
          "Keynote 7: Shri Dillip Kumar Guru, EVP (Energy and ESG), Sify Technologies Limited., Singapore (Data Centre)",
      },
      {
        time: "13:00 - 14:00",
        session: "Special Session (IPD)",
        details:
          "Special Session: Industrial Panel Discussion (IPD). Chairman: Dr. Ramakrishna Kappagantu, Chief Technology Advisor, Eficaa EnSmart Solutions Pvt. Ltd.",
      },
      { time: "16:00 - 16:15", session: "Break", details: "Tea Break" },
      {
        time: "16:15 - 17:45",
        session: "Paper Sessions 13 to 18",
        details: "Parallel Paper Sessions 13 to 18: Oral Presentations on various topics across multiple tracks.",
      },
      {
        time: "17:45 - 18:30",
        session: "Keynote 8",
        details: "Valedictory Keynote: Shri M. K. Ramesh, Chief General Manager (CGM), SRLDC, Grid India.",
      },
      {
        time: "18:30 - 19:00",
        session: "Valedictory Function",
        details: "Valedictory Function: Best Paper/s and Poster/s Awards",
      },
      { time: "19:00 - 19:30", session: "High Tea", details: "High Tea" },
    ],
  },
];

export type Paper = { id: string; title: string; authors: string };
export type PaperSession = { title: string; time: string; papers: Paper[] };

export const paperSessions: PaperSession[] = [
  {
    title: "Session I — Smart Grid and Power Systems",
    time: "08 Dec, 09:00-10:30",
    papers: [
      { id: "63", title: "An IoT-Enabled Framework for Real-Time Smart Metering with Dynamic Tariff Pricings", authors: "S Gayathri; M Monisha; Anant Kumar; K Shanti Swarup" },
      { id: "64", title: "Generative Artificial Intelligence Enabled Smart Metering Framework For Predictive Energy Sharing", authors: "M Monisha; S Gayathri; Anant Kumar; K Shanthi Swarup" },
      { id: "68", title: "Assessment of Unbalance in Tata Power Mumbai Network due to Single-Phase Railway Loads", authors: "Santosh V. Singh; Prashant V. Navalkar; Anil M. Kulkarni; Girish T. Jawale" },
      { id: "123", title: "Impact of Cyber Vulnerabilities on Automated BESS Mode Transitions in Smart Microgrid", authors: "Suhani Baru; Khwrwmdao Basumatary; Anup Shukla" },
      { id: "255", title: "Impact of ToD Charges and Power Factor on Total Energy Costs of BVRIT Campus Distribution Grid", authors: "VSB Chaitanya Duvvury; Josna Goud G; G Bhanu Ganesh; Pradeep Kumar Yemula" },
      { id: "288", title: "Data-Driven Fault Classification and Localization in Smart Grids for Accurate Self-Healing Using Multifaceted Machine Learning Techniques", authors: "Praneeth N; P Swati Patro; STP Srinivas" },
    ],
  },
  {
    title: "Session II — Security-Constrained Economic Dispatch",
    time: "08 Dec, 09:00-10:30",
    papers: [
      { id: "26", title: "SECED Pilot Study - For Emission-Constrained Economic Dispatch for India's ISGS thermal fleet", authors: "Debasis De; Sushil K Soonee; Deb Chattopadhyay" },
      { id: "54", title: "SCED in India: The Duals Behind Dispatch", authors: "Debasis De; Sushil K Soonee; R S Abhishek; Deb Chattopadhyay; Saumen Majumdar" },
      { id: "59", title: "Addressing Infeasibilities in SCED Optimization", authors: "Debasis De; Sushil K Soonee; Abhishek R S; Deb Chattopadhyay; Saumen Majumdar" },
      { id: "110", title: "Ramping in States Power System in India: Harnessing Flexibility through Integrated SCED", authors: "Debasis De; Abhishek R S; Sushil K Soonee; Deb Chattopadhyay" },
      { id: "118", title: "Optimizing Regional Power Trade in South Asia: A SECED Based Emission-Constrained Economic Dispatch Framework", authors: "Anita Prajapati; Richa Parmar; Khadiza Umme Tahera; Phuntsho Choden; Fareeha Kaleem; Aishath Yamna; Melundi Nishshanka; Anju Pathak; Sweta Rani; Fatima Taseer; Sayba Habib Jenifer; Deb Chattopadhyay; Debasis De; S. K. Soonee" },
      { id: "173", title: "Scheduling vs Despatch in the Indian Power Sector: The Statutory Role of Load Despatch Centre", authors: "S K Soonee; Dr. Deb Chattopadhay; Dr. Sushanta Chatterjee; Debasis De" },
    ],
  },
  {
    title: "Session III — Power Systems Protection, Stability, and Optimization",
    time: "08 Dec, 09:00-10:30",
    papers: [
      { id: "78", title: "Modular Open-loop Eigen-sensitivity Analysis for Computation-efficient Stability Assessment", authors: "Aditya Pandey; Lokesh Kumar Dewangan" },
      { id: "109", title: "Impact of Droop Control on Impedance Trajectories under Stable Power Swings in Grid-Forming Converter-Integrated Power Systems", authors: "Sreenath B; Balabhaskar S S; Manas Kumar Jena" },
      { id: "171", title: "Transient Response Analysis in IBR-Dominated Power Systems Based on Short Circuit Ratio", authors: "Koduri Gowtham; Kiran Teeparthi; Pavan Kumar Yadala" },
      { id: "225", title: "Loss of Synchronism during Grid Disturbances in India", authors: "Mithila Aithagani; Anil M. Kulkarni" },
      { id: "229", title: "Virtual Inertia vs Physical Inertia for Improving the Stability of a Heavily Renewable Driven Power System", authors: "Ravi Reddi; Deepak Kumar Soni; Vaskar Sarkar" },
      { id: "273", title: "Modal Controllability and Observability Estimation of Critical Power System Modes From MIMO Frequency Scans", authors: "Kaustav Dey; Anil M. Kulkarni" },
    ],
  },
  {
    title: "Session IV — Grid Resilience and Security",
    time: "08 Dec, 09:00-10:30",
    papers: [
      { id: "56", title: "A Novel Image-Based Watermarking Method for Detecting False Data Injection in Line Current Differential Relays", authors: "Swati Agarwal; Kondety Tony; Manish Pandit; Ranjana Sodhi" },
      { id: "83", title: "Hybrid IWSOA-ANN Approach for Load Stability During Cyber-Attack Blocking Controller Access", authors: "Arti Singhal; Ashu Verma; Rabindra Mohanty" },
      { id: "88", title: "Effective Graph Resistance based Vulnerability Assessment Framework for Cyber Resilient CPPS", authors: "Jigyasa Singhai; K Shanti Swarup" },
      { id: "217", title: "Reduced effective voltage control by shunt reactors in renewable rich grid - Experience of Western Region of India", authors: "Naresh Mhalas; Vishal Balram Puppala; Raj Shailendra Mudliar; Satyendra Singh Raghuwanshi; Mahesh M Mehendale; Aravind Ganji; Aman Gautam" },
      { id: "274", title: "Analyzing Risk in Power Substations through an Automated Vulnerability Assessment Tool", authors: "Shashank S; Nayan Aahladh; Sridevi P Rao; Gurunath Gurrala; Vaibhav Katewa; Vikas Bishnoi; Manoj Kumar" },
    ],
  },
  {
    title: "Session V — Renewable Energy Systems",
    time: "08 Dec, 09:00-10:30",
    papers: [
      { id: "75", title: "Hydrogen-Based Offshore Wind Farm Energy Storage: Simulation and Sensitivity Analysis", authors: "Sree Vyshanvi Mamilla; K Shanti Swarup" },
      { id: "85", title: "A Data-Driven Framework of PV Hosting Capacity Assessment for a Military Garrison", authors: "Ujjawal Srivastava; P Amritansh Naidu; Ankit Singhal" },
      { id: "135", title: "Wind Power Forecasting using Auto-Regressive QRF for Operational Reserve Management", authors: "Girraj Raigar; Naveen Kumar Thokala; Swathi Battula; Abheejeet Mohapatra" },
      { id: "167", title: "Comparative Assessment of Feedforward and Sequence-Based Neural Networks for Solar Radiation Prediction Model", authors: "Bongoni Naresh; Amit Kumar Yadav; Ch Vineeth" },
      { id: "177", title: "Hybrid Energy Storage-Based Power Management Strategy for Stand-alone DC Microgrid", authors: "Krishnakant; Chuskit Dolma; Pravin Kumar; Prabodh Bajpai" },
      { id: "222", title: "Sector Coupling between Green Hydrogen and Steel: Machine Learning-based Estimation of Levelized Cost of Steel", authors: "Pratham Goel; Naran Pindoriya" },
    ],
  },
  {
    title: "Session VI — Power System Planning and Operations",
    time: "08 Dec, 09:00-10:30",
    papers: [
      { id: "94", title: "Tariff Impact Analysis on Peer-to-Peer Energy Sharing in Residential Communities", authors: "Gopalji S. Kalojiya; Anupama S. Kowli" },
      { id: "117", title: "A Comprehensive Design Framework for AT-Fed Railway Traction Power Systems", authors: "Archita Vijayvargia; Abhijit Abhayankar" },
      { id: "120", title: "Fast Jacobian Evaluation for Islanded Microgrid Load Flow Using Compact Matrix Operations for Composite Load Models", authors: "Rasmita Muduli; Debapriya Das" },
      { id: "125", title: "Deep Analysis for Selective Control and CO2 Emission in Power Systems", authors: "Suresh Varwandkar" },
      { id: "130", title: "Insights and Analysis from Black Start Mock Drill Case Studies using Synchrophasor Technology", authors: "Praveen Tripathy; Subhash Kumar; Sachin Singh; Kishore Kalita; Saksham Rithe; Sharmistha Dutta" },
      { id: "202", title: "Impact Analysis of Zero-Sum False Data Injection Attacks on Peer-to-Peer Energy Trading", authors: "V.V.N Prasad Thota; Kiran Teeparthi; Sri Phani Krishna Karri" },
    ],
  },
  {
    title: "Session VII — Electric Vehicles and Drives",
    time: "09 Dec, 09:00-10:30",
    papers: [
      { id: "93", title: "Decentralized Smart EV Charging with Multi-Agent System Communication and Energy Coordination", authors: "Priyansh Dwivedi; Himanshu Tiwari; Pradhyumna Yadav; Murari Kumar; K Shanthi Swarup" },
      { id: "128", title: "Electric vehicle battery charger based on DC-001 charging standard", authors: "Vaishnavvignesh G Iyer; Cilaveni Satish Chandra; Ravindranath Adda; Sreenath J G; Praveen Tripathy" },
      { id: "223", title: "Light Load Efficiency improvement of Dual Active Bridge Converter for EV Fast Charging Application", authors: "Nagasai G; Ravikumar Bhimasingu" },
      { id: "261", title: "High-Efficiency SIDO-SEPIC with Improved Cross-Regulation for EV Charging Systems", authors: "Kamalesh MS; Prabha S Umapathy; Bharatiraja Chokkalingam; Sanal Kumar S; Prasanth Kumar R; Ritika S" },
      { id: "266", title: "Electrifying Mobility: Dynamic Charging for Next-Generation Electric Vehicles", authors: "Mahendar Reddy Peddolla; Sanjeeva Reddy B R" },
    ],
  },
  {
    title: "Session VIII — Power System Planning & Operations",
    time: "09 Dec, 09:00-10:30",
    papers: [
      { id: "126", title: "Co-optimized Flexibility Market Framework for DSO Enabled Market Operations", authors: "Manu Ranjan Sharan; Abhijit R. Abhyankar; Ankit Singhal" },
      { id: "142", title: "Cost Allocation Mechanism for Shared Battery Storage Systems: A Game-Theoretic Approach", authors: "Anchal Maurya; Harshit Dhiman; Agam Jain; Jeet Vijay Shah; Kartikey Singh Bhadauria; Deep Kiran" },
      { id: "191", title: "BIBC-Based Distribution Network Reconfiguration with Optimal Placement and Sizing of Renewable DGs under a 24-Hour Load Profile", authors: "Astamita Mishra; Manish Tripathy; Papia Ray" },
      { id: "228", title: "A Hybrid Clustering-PSO Framework for Reliable Islanded Microgrid Expansion Planning", authors: "Rasmita Muduli; Debapriya Das" },
      { id: "230", title: "Operational Strategies for Enhancing RE Integration into the Grid using Existing Transmission System", authors: "Minnakuri Venkateswara Rao; Priyam Jain; Vishal Puppala; Himanshu Verma; Gaurab Dash; Goodelli Madhukar; T Muthu Kumar" },
      { id: "262", title: "Primary Frequency Response by Renewable Energy Plants: Regulatory Framework and Compliance Analysis in India", authors: "Mohit Kumar Gupta; Aman Gautam; Rahul Shukla; Amarjeet Kumar; Suhas Dambhare; S Usha; Ibtesam Asif" },
    ],
  },
  {
    title: "Session IX — Smart Grid & Power Systems",
    time: "09 Dec, 09:00-10:30",
    papers: [
      { id: "106", title: "Digitizing Electrical Panels with MQTT and Multi-Network Raspberry Pi Gateways", authors: "Anmol Sardhalia; Sheraza Bashir; Ayush Yadav; Nikhat Singla; Dr.Anup Shukla" },
      { id: "131", title: "Impacts of fast voltage boosters with current limiters of droop controlled grid forming inverters during delayed voltage recovery events", authors: "Upendran Mukundarajan; K. Shanti Swarup" },
      { id: "195", title: "Performance Assessment of Inverter-Fed Autonomous Microgrid with Uniform and Non-Uniform Delay Utilizing Internal Model Controller", authors: "Sneha Goneguntla; Gnana SaiSree Boppudi; Naresh Kumar Vemula; Pratikanta Mishra; Kiran Kumar N; Pradeep Kumar Yemula" },
      { id: "200", title: "Improving Stability of GFL Inverter in Weak Grid using Paralleled GFM Inverter: Hardware Validation", authors: "H R Sai Kiran Pandit; Sarasij Das" },
      { id: "258", title: "An Improved Differential Admittance Based Fault Detection Algorithm for Low Voltage AC Microgrid", authors: "Joy Narayan Das; Dr. Biswajit Sahoo; Sandeep Banik" },
      { id: "286", title: "Short-Term Load Forecasting for Energy and Cost Savings: A Case Study", authors: "T. Praneeth; Gajangi Arun Kumar; P. Ram Kishore Kumar Reddy; Pradeep Kumar Yemula" },
    ],
  },
  {
    title: "Session X — Power System Protection, Stability & Optimization",
    time: "09 Dec, 09:00-10:30",
    papers: [
      { id: "61", title: "Advanced Power Grid Feeder Protection and Control Functions for Wildfire Mitigation and Control", authors: "Srujana Yenigalla; Nagarjuna Koppakula; Sai Pramod Tati; Priya Kumari; Balakrishna Pamulaparthy" },
      { id: "70", title: "An Integrated Approach for Fault Diagnosis and Localization in DC Microgrid", authors: "Anu Bhalla; Bhavesh R. Bhalja" },
      { id: "136", title: "Sequence Component-Based Protection Strategies for Fully Inverter-Dominated Microgrids", authors: "Arjita Pal; Rabindra Mohanty; Bijaya Ketan Panigrahi" },
      { id: "170", title: "Transmission Networks Connected With GFM Inverters: Protection Challenges and Opportunities", authors: "OD Naidu; Aarthi V; Neethu George; Vedanta Pradhan" },
      { id: "236", title: "Analysis of Grid Protection in the North-East Regional Network of India Using Actual Fault Data Under High Solar PV Penetration", authors: "Subhash Kumar; Karan Katariya; Sachin Singh; Subhra Ghosh; Amba Tiwari; Neeraj Kumar; Sajan George; Deepak Pullaguram; Ashok Pradhan" },
      { id: "237", title: "A New Facile Time-Voltage-Current Characteristics for Numerical Distance Relay Coordination in Modern Power Grids and FPGA Implementation", authors: "Praneeth N; STP Srinivas; Alivelu Manga Parimi" },
    ],
  },
  {
    title: "Session XI — AI & Data Analytics in Power Grids",
    time: "09 Dec, 09:00-10:30",
    papers: [
      { id: "102", title: "Optimized Hybrid CNN-Transformer-LSTM Architecture for Accurate Solar Irradiance Forecasting under Variable Weather Conditions", authors: "Shanker M; Vikram Kulkarni" },
      { id: "124", title: "Efficient Wide Area Data Compression — A Ramanujan's Sum-Based Approach", authors: "Manish Pandit; Ranjana Sodhi" },
      { id: "144", title: "Sectoral Disaggregation of India's Peak Day Load Curve: A Pathway to Demand Flexibility", authors: "Pallavi Buwa; Anupama Kowli" },
      { id: "172", title: "OTC Platforms in Indian Power Markets - Driving Digitalization and Data Analytics for Economy, Efficiency, and Transparency", authors: "Vinod Kumar Agrawal; Kapil Dev; Ashish Shrivastav; Sahil Kapoor; Nitesh Jha; Gaurav Rupani; Amit Chauhan; Arunima Mishra; Sushil Kumar Soonee" },
      { id: "183", title: "Cybersecure Line Differential Relay Based on Transient Signatures and Decision Tree Classification", authors: "Suryanarayana Gangolu; Rakesh Kumar Panda; Suman M; CH Venkateswarlu" },
      { id: "187", title: "Constrained Loss Function Optimization based Short-Term Load Forecasting", authors: "Murari Jha; Ankit Singhal" },
    ],
  },
  {
    title: "Session XII — Control in Power Systems / Power Electronics",
    time: "09 Dec, 09:00-10:30",
    papers: [
      { id: "82", title: "Cyber-Physical Vulnerabilities of Distributed Secondary Control in DC Microgrids: The Role of DoS Attacks and CPLs", authors: "Bazila Rashid; K. Shanti Swarup" },
      { id: "129", title: "Controller design for Three level boost converter with single-phase inverter load", authors: "Vaishnavvignesh G Iyer; Cilaveni Satish Chandra; Ravindranath Adda; Sreenath J G; Praveen Tripathy" },
      { id: "193", title: "LVRT-Enabled Virtual Synchronous Generator Control for Grid-Forming Inverter-Based Resources", authors: "Supriya Sharma; Yashasvi Bansal" },
      { id: "198", title: "A 3-phase 2-level inverter with AC side boost and CMV mitigation scheme", authors: "S S Phaniram Musti; Ravikumar Bhimasingu" },
      { id: "220", title: "Modified Control Strategy to Improve the CC-CV Mode Transition Performance in Variable DC-Link Voltage On-Board Chargers", authors: "Cilaveni Satish Chandra; Vaishnavvignesh G Iyer; Ravindranath Adda; Sreenath J G; Praveen Tripathy" },
      { id: "226", title: "Controller Output Dynamic Limiting Technique for Overshoot Suppression in Current-Controlled Grid-Following PV Systems", authors: "Ajay Jena; Arun Rahul S" },
    ],
  },
  {
    title: "Session XIII — Power System Planning & Operations",
    time: "09 Dec, 16:15-17:45",
    papers: [
      { id: "185", title: "Decentralized Energy Exchange: A Blockchain-Based Smart contract Pricing Model for Sustainable Distributed Energy Markets", authors: "Tharun Tejavath; Surendra Srinivas" },
      { id: "207", title: "Utilization of Spinning Reserves in Largest Hydro Electric Power Plant in India — A Base Case", authors: "Rajesh Kumar; Absar Ahmad; Pavitra Malik; B. Raviteja" },
      { id: "233", title: "Optimal reliability planning of radial distribution network considering hourly energy availability with renewables integration", authors: "Dharmendra Trivedi; Naveen Jain; Umesh Agarwal; Manoj Kumawat" },
      { id: "259", title: "Real-Time Oscillation Analytics for Power Grids: A Wavelet-Assisted Matrix Pencil Approach in SLDC Operations", authors: "Raja Shekar Nalluri; Bhanu Ganesh Ganta; Pradeep Kumar Yemula; Chandra Sekhar Maragoni; Nataraj Pathri" },
      { id: "287", title: "Markov Modeling Based Reliability Evaluation of Compressed Air Energy Storage in Grid Operations", authors: "Abhishek Harit; Prerna Jain; Satish Sharma" },
    ],
  },
  {
    title: "Session XIV — Control in Power Systems / Power Electronics",
    time: "09 Dec, 16:15-17:45",
    papers: [
      { id: "119", title: "Impact of Filters on Grid Connected BESS: Experimental Analysis and Validation", authors: "Nivedika Kher; Sonam Gupta; Anup Shukla" },
      { id: "127", title: "A Soft-Switched Dual Active Push-Pull Converter", authors: "Jabi Ali; Mandeep Singh Rana" },
      { id: "252", title: "Remaining Useful Life Prediction of Boiler Feed Pump Motor: A Statistical and Condition Monitoring Approach for Industry 5.0", authors: "Koti Reddy Butukuri; Hari Preetham Golla; Pradeep Kumar Yemula; Gali Sridhar; Tadiparti Koti Reddy" },
      { id: "253", title: "Multilevel Inverter for Grid Connected and Standalone applications", authors: "Shoubhik Mukherjee; Dr. Rupesh Wandhare; Deepak Gehlot; A.S Krishnapriya" },
      { id: "269", title: "Unbalanced Reference Voltage generation for Grid Forming Inverter Control During Asymmetrical Faults", authors: "Sunil Gajula; Ravikumar Bhimasingu" },
      { id: "271", title: "Modified Direct Power Control of Photovoltaic to Grid tied Voltage Source Converter with Active Filtering Capability", authors: "Praveen Vankadari; Korivi Yogananda Reddy; Sree Hari J B; Akshay Chabukswar; Avinash Naramu; Rupesh Wandhare" },
    ],
  },
  {
    title: "Session XV — Electric Vehicles and Drives",
    time: "09 Dec, 16:15-17:45",
    papers: [
      { id: "49", title: "Implications of induction of Electric Vehicles in India", authors: "Goutam Bhaskhar; Saumen Majumdar; Debabrata Chattopadhyay; S.K. Soonee; Debasis De" },
      { id: "69", title: "Swarm-Based EV Fleet with Grid-Aware Charging and Traffic-Adaptive Routing in Urban Networks", authors: "Greeshma Potnuru; K Shanti Swarup" },
      { id: "256", title: "Assessing Impact of Dynamic Parameters on Electric Vehicle Energy Consumption using Parameter Perturbation Analysis", authors: "Bhanu Ganesh Ganta; Raja Shekhar Nalluri; V S B Chaitanya Duvvury; Pradeep Kumar Yemula" },
      { id: "263", title: "Physics-Guided Indicators with PSO-Tuned Regression for EV Battery SOH Estimation", authors: "V. Yashwanth; Y. Likhith; B. Nikhil; C. Priyanka; K. H. Phanishree" },
      { id: "267", title: "Optimal EV Charging under Marginal Emission Factors and Time-of-Use Tariffs: Comparison of Telangana and Karnataka", authors: "Aishree Boruah; Gaddam Vardhan; Parmar Aryan Jasvantkumar; Pritha Chatterjee" },
      { id: "279", title: "Real-time Monitoring of Energy Dynamics in Electric Vehicles", authors: "Bhanu Ganesh Ganta; Pradeep Kumar Yemula; Koti Reddy B" },
    ],
  },
  {
    title: "Session XVI — Electric Vehicles and Drives",
    time: "09 Dec, 16:15-17:45",
    papers: [
      { id: "10", title: "Real-Time Fault Analysis and System Optimization in EV Controllers with Field-Oriented Control: A Practical Investigation on Monitoring Diagnostics and Enhancements", authors: "Suganya R; L.M.I. Leo Joseph; K Sreedhar" },
      { id: "181", title: "Multilayer Winding Configuration for Variable Pole Induction Motor Drives", authors: "Monika Jain; B Prathap Reddy" },
      { id: "250", title: "An Enhanced VMD-DT-Based Fault Protection Scheme for AC Microgrid", authors: "Sandeep Banik; Dr. Biswajit Sahoo; Prof. Jyoti Prakash Mishra" },
      { id: "265", title: "A Constant Switching Controller based DTC Scheme for Speed Control of Five-Phase Open End Winding Induction Motor", authors: "C Venkata Subba Reddy; Sabavath Akhila; Nalla Akshitha; Gunji Poojitha; Yadlapalli Ragini" },
      { id: "270", title: "Robust Optimal Non-Linear Control Technique for Efficient EV Drive Applications", authors: "Akshay Chabukswar; Sree Hari J B; Ponnaganti Sirisha Devi; Korivi Yogananda Reddy; Chekka Supriya; Rupesh Wandhare" },
      { id: "272", title: "Simulink-Based Modeling of Regenerative Braking with Energy Recovery Optimization for Electric Vehicles", authors: "Sadia Begum; Ujwala Gajula; Gouthami Eragamreddy; Swapna Raghunath" },
    ],
  },
  {
    title: "Session XVII — Smart Grid & Power Systems",
    time: "09 Dec, 16:15-17:45",
    papers: [
      { id: "44", title: "Design and Implementation of Blockchain-Enabled P2P Energy Trading Testbed", authors: "Shweta Arvind Kadam; Debasmita Panda; Ashutosh Yadav" },
      { id: "84", title: "Operational Analysis of Shipboard DC Microgrid Integrated with Advanced Storage Solutions", authors: "Ayush Bhatia; Rabindra Mohanty; Avanish Tripathi" },
      { id: "86", title: "Hybrid Islanding Detection in Grid-Connected PV-Battery Microgrid", authors: "Suraj Mishra; P Amritansh Naidu; Bijaya Ketan Panigrahi" },
      { id: "190", title: "Identification and Exploitation of Critical Lines through Targeted LR Attacks", authors: "V. Bharat Kumar; Satish Sharma" },
      { id: "194", title: "Practicing Advanced Technology Implementation for Indian Transmission Grid", authors: "Dr. Amit R. Kulkarni" },
      { id: "210", title: "Experimental Validation of Online Frequency Response Estimation of a Multi-port LTI Apparatus using Power System Ring-down Events", authors: "Santosh Singh; Anil Kulkarni" },
    ],
  },
  {
    title: "Session XVIII — Renewable Energy Systems",
    time: "09 Dec, 16:15-17:45",
    papers: [
      { id: "50", title: "Fault Detection in Unequal-Rated PV Strings Using Normalized Power and Snapshot Median Filtering", authors: "Jayakumar J; Justin Salamon M; Aswin Kumar M; Perachi Selvam P; Subramanyam L; Kesavan Nair K.P" },
      { id: "79", title: "Techno-Economic Modeling of a Renewable Hybrid Energy System", authors: "Kavya E M; Monisha M; Pasela Ramtej; K Shanthi Swarup" },
      { id: "96", title: "Next-Gen Offshore Wind Year Ahead Forecasting Aided Modelling for Techno-Economic Feasibility", authors: "Nidhi Gummaraju; Shri Varshini C; Sree Vyshnavi Mamilla; Greeshma Potnuru; K Shanti Swarup" },
      { id: "218", title: "Impact of High Temperature on Wind Turbine Performance in India and Need for Climate-Resilient Design", authors: "Abhijeet Prakash; Priyanka Meena; Lav Kumar Khandelwal; Manas Ranjan Chand; Shailendra Verma; Priyam Jain; Vivek Pandey" },
      { id: "247", title: "Capacity credits for renewable energy and value of cross-border transmission in South Asian power systems", authors: "Suruchi Uppal; Srishty Jain; Puneet Chitkara; Sushil Kumar Soonee" },
      { id: "281", title: "Techno-Economic Feasibility Analysis of a Building Integrated Agrovoltaics Model", authors: "Alan Sam; Bhanu Ganta; Pradeep Kumar Yemula; Rayudu Katuri" },
    ],
  },
  {
    title: "Online Presentations",
    time: "09 Dec, 09:00-10:30",
    papers: [
      { id: "73", title: "Evaluating Cascading Failure for Grid Resilience under Extreme Weather Events", authors: "Chandan Chaudhary; Alaaeldein Abdelkader; Mohammed Benidris; Joydeep Mitra" },
      { id: "81", title: "Design and Modeling of Campus Microgrid for Future Sustainable Energy Operations", authors: "Mahmuda Akter; Jannatul Ferdous; Samiul Hasan Emon; Shah Mohazzem Hossain" },
      { id: "138", title: "Comparative Analysis of Flywheel and Battery Energy Storage Systems for Smoothing Photovoltaic Power Output", authors: "Anil Bhatt; Bipin Subedi; Nita Kumari Phuyal; Aashish Yakami; Gaurav Tamrakar" },
      { id: "141", title: "Space Vector PWM Inverter Based Indirect Field Oriented Control for Induction Motor", authors: "Aayush Bhatta; Sandip Timsina; Ritesh Basnet; Urusha Kisi; Rojan Tamang; Hari Bhusal; Mensun Lakhemaru" },
      { id: "244", title: "Techno-Economic and Environmental Assessment of On-Grid Rooftop Solar Integration for Diesel-Dependent Urban Markets", authors: "Md. Sabbir Alam; Shah Mohazzem Hossain" },
      { id: "245", title: "Exploring a Hybrid Renewable Energy System to Meet Bangladesh's Future Energy Needs", authors: "Md. Aminul Hoque; MD. Nahid Billah; Shah Mohazzem Hossain" },
    ],
  },
];

export const posterSession: PaperSession = {
  title: "Poster Session",
  time: "08 Dec, 16:15-17:45",
  papers: [
    { id: "41", title: "Intra state SCED, dispatch using LP optimization in Maharashtra - A case study", authors: "Debasis De; Sushil K Soonee; Prof. Zakir Hussain Rather; Shashank Jewalikar; Akhilesh Panwar; Dr. Deb Chattopadhyay" },
    { id: "62", title: "Data-Driven Inertia Estimation using BiLSTM and XGBoost for RES Integrated Power Networks", authors: "Magam Vasista Sai; Shahbazuddin Syed; Altaf Q. H. Badar; Prachi Salodkar" },
    { id: "65", title: "Study of Dielectric Performance of Insulating Stand-offs Under Lightning Impulse", authors: "Gyanendra Kumar Kurmi; Basanta Kumar Gautam" },
    { id: "66", title: "Experimental study of the surface dielectric strength of insulating tubes on basis of geometry under lightning impulse voltages", authors: "Akrit Acharya; Basanta Kumar Gautam" },
    { id: "74", title: "Review of Mathematical Modeling and Scheduling Strategies of an Electric Vehicle Aggregator", authors: "SSSR Sarathbabu Duvvuri; Bala Sai Kiran P; Pinnamraju Sadhvika; Kukkala Varshini; Majji Vaishnavi; Jillabathula Pavithra" },
    { id: "76", title: "Adaptive Electric Vehicle EMS with Secure V2G Energy Transactions using Blockchain", authors: "C Shri Varshini; Nidhi Gummaraju; K Shanthi Swarup" },
    { id: "91", title: "Power Electronics Converter Topologies and Control Methods for On-Board and Off-Board Electric Vehicle Charging Systems: An Overview", authors: "Jajjalya Kashyap; E S N Raju P" },
    { id: "92", title: "A Survey on Fault Location, PMU Deployment, and Fault Behavior of Distributed Generators and Active Loads in Medium-Voltage Distribution Networks", authors: "Anchal Maurya; E S N Raju P" },
    { id: "100", title: "Multi-part Innovative Tariff Framework for the Renewables for ambitious Net Zero targets", authors: "Sushil Kumar Soonee; Dr Amit Kumar Singh Parihar; Ghansham Thakkar; Himanshu Mishra" },
    { id: "104", title: "Improving Wind Energy Forecast Accuracy Using Machine Learning", authors: "Tirunagaru V Sarathkumar; T Sanjeeva Rao; Arup Kumar Goswami; T Venkata Prasad" },
    { id: "116", title: "Virtualization of Protection in Distribution Substation: An Object-Oriented Approach", authors: "Bhaskar Sahu; K Shanthi Swarup" },
    { id: "137", title: "Key Insights from Security-Constrained Economic Dispatch: A Case Study for Uttar Pradesh", authors: "Nishant Kumar; Abheejeet Mohapatra; Prabodh Bajpai; Swathi Battula; Sushil Kumar Soonee; Arun Kumar Mishra; Sangeeta" },
    { id: "143", title: "Detection and Localization of Low-Frequency Oscillations in North Eastern Region of India in the Presence of Inverter Based Resources", authors: "Karan Vasudev Katariya; Subhash Kumar; Palash Jyoti Borah; Kishore Kalita; Sajan George; Deepak Reddy Pullaguram; Ashok Kumar Pradhan" },
    { id: "192", title: "Optimising Power Despatch: Security Constrained Economic Despatch Initiative in Gujarat", authors: "Divya Sharma; Vatsalkumar Bhatt; Pandya Darshan Dilipkumar; Naran M. Pindoriya; Utpal Patel; Chetan Darji; A B Rathod; Sushil Kumar Soonee; Debasis De" },
    { id: "196", title: "Directional Overcurrent Relay Coordination in a Microgrid Environment by using Genetic Algorithm, and Breeder Genetic Algorithm", authors: "Ravindra Mankar; Pranav Darji" },
    { id: "205", title: "A Novel Development of a Single Switch DC DC Circuit for Fuel Cell Systems", authors: "Gurijala Sreedhar; CH Hussaian Basha; Likhitha R; Prathibha E; Muralikrishna Boddu" },
    { id: "212", title: "Impact of Different Current Limiting Strategies on Stable Power Swing Trajectories in Grid-Forming Converter-Integrated Power System", authors: "Balabhaskar S S; Sreenath B; Manas Kumar Jena" },
    { id: "219", title: "Shock-Proofing the Grid: Readiness of Indian Electricity Markets for Futures-Based Hedging Instruments", authors: "Ribhu Shankar; Dr. Parminder Kaur Bajaj" },
    { id: "264", title: "A Hybrid Symmetrical Optimum-Pattern Search tunned PI Based Three-Phase SRF PLL Synchronization System Under Grid Irregularities", authors: "C Bibhuti Prasad Sahoo; Adityansu Pati; Raseswari Pradhan" },
    { id: "278", title: "Security Constrained Economic Despatch for TGSLDC: Architecture, Data Pipeline, and MOD Benchmarking", authors: "Avik Ghosh; Pradeep Kumar Yemula; P. Suresh Babu; B. Raja Thirupathi; L. Sarveswar" },
    { id: "280", title: "Adaptive Distance Relay Protecting Transmission Lines Connecting Inverter Based Resources", authors: "Chandra Panda; Deepak Pullaguram; Ashok Kumar Pradhan" },
    { id: "285", title: "Remaining Useful Life Estimation of Aged Power Transformers: A Case Study Using Degree of Polymerisation and Furan Analysis", authors: "Koti Reddy B; Pradeep Kumar Yemula; Vishal Devulapalli; Rammohan Rao Vemula; Bhanu Ganesh Ganta" },
  ],
};
