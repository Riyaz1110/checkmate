// import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function Publications() {
  const publications = [
    {
      number: 1,
      authors: "Neelakandan, S & Paulraj, D 2020",
      title: "A gradient boosted decision tree-based sentiment classification of twitter data",
      journal: "International Journal of Wavelets, Multiresolution and Information Processing, vol. 18, no. 4, pp. 205027 1-21",
      doi: "10.1142/S0219691320500277"
    },
    {
      number: 2,
      authors: "Neelakandan, S & Paulraj, D 2020",
      title: "An Automated Exploring And Learning Model For Data Prediction Using Balanced CA-SVM",
      journal: "Journal of Ambient Intelligence and Humanized Computing, Vol.12, no.5, April 2020",
      doi: "10.1007/s12652-020-01937-9"
    },
    {
      number: 3,
      authors: "Neelakandan, S & Paulraj, D 2020",
      title: "An Automated Learning Model for Sentiment Analysis and Data Classification of Twitter Data Using Balanced CA-SVM",
      journal: "Concurrent Engineering Research and Applications, Vol.29, No.4, pp 386-395",
      doi: "10.1177/1063293X20915307"
    },
    {
      number: 4,
      authors: "Neelakandan, S., Berlin, M.A., Tripathi, S. et al.",
      title: "IoT-based traffic prediction and traffic signal control system for smart city",
      journal: "Soft Computing (2021)",
      doi: "10.1007/s00500-021-05896-x"
    },
    {
      number: 5,
      authors: "R. Kamalraj, S. Neelakandan, M. Ranjith Kumar, V. Chandra Shekhar Rao, Rohit Anand, Harinder Singh",
      title: "Interpretable filter based convolutional neural network (IF-CNN) for glucose prediction and classification using PD-SS algorithm",
      journal: "Measurement, Vol.183,2021",
      doi: "10.1016/j.measurement.2021.109804"
    },
    {
      number: 6,
      authors: "Kavitha, T., Mathai, P.P., Karthikeyan, C. et al.",
      title: "Deep Learning Based Capsule Neural Network Model for Breast Cancer Diagnosis Using Mammogram Images.",
      journal: "Interdiscip Sci Comput Life Sci (2021)",
      doi: "10.1007/s12539-021-00467-y"
    },
    {
      number: 7,
      authors: "C Pretty Diana Cyril, J Rene Beulah, Neelakandan Subramani, Prakash Mohan, A Harshavardhan, D Sivabalaselvamani.",
      title: " An automated learning model for sentiment analysis and data classification of Twitter data using balanced CA-SVM",
      journal: "Concurrent Engineering Research and Applications,Vol.29,No.4,pp 386-395.",
      doi: ""
    },
    {
      number: 8,
      authors: "Reshma, G., Al-Atroshi, C., Nassa, V. K., Geetha, B., Neelakandan.S. et al. (2022). ",
      title: "Deep Learning-Based Skin Lesion Diagnosis Model Using Dermoscopic Images.",
      journal: "Intelligent Automation & Soft Computing, vol.31,no.1, pp.621–634.",
      doi: ""
    },
    {
      number: 9,
      authors: "Neelakandan, S., Arun, A., Bhukya, R. R., Hardas, B. M., Ch., T. et al. (2022).",
      title: "An Automated Word Embedding with Parameter Tuned Model for Web Crawling.",
      journal: "Intelligent Automation & Soft Computing, 32(3), 1617–1632.",
      doi: ""
    },
    {
      number: 10,
      authors: "P. Asha, L. Natrayan, B.T. Geetha, J. Rene Beulah, R. Sumathy, G. Varalakshmi, S. Neelakandan.",
      title: "IoT enabled environmental toxicology for air pollution monitoring using AI techniques.",
      journal: "Environmental Research, Volume 205, 2022, 112574",
      doi: "10.1016/j.envres.2021.112574"
    },
    {
      number: 11,
      authors: "D. Venu, A.V.R. Mayuri, S. Neelakandan, G.L.N. Murthy, N. Arulkumar, Nilesh Shelke",
      title: "An efficient low complexity compression based optimal homomorphic encryption for secure fiber optic communication.",
      journal: "Optik, Vol 252,2022,pp.168545",
      doi: "10.1016/j.ijleo.2021.168545"
    },
    {
      number: 12,
      authors: "D. K. Jain, S. K. S. Tyagi, S. Neelakandan, M. Prakash and L. Natrayan",
      title: "Metaheuristic Optimization-Based Resource Allocation Technique for Cybertwin-Driven 6G on IoE Environment.",
      journal: "IEEE Transactions on Industrial Informatics, vol. 18, no. 7, pp. 4884-4892, July 2022",
      doi: "10.1109/TII.2021.3138915."
    },
    {
      number: 13,
      authors: "Subramani, Neelakandan, Prakash Mohan, Youseef Alotaibi, Saleh Alghamdi, and Osamah I. Khalaf. 2022",
      title: "An Efficient Metaheuristic-Based Clustering with Routing Protocol for Underwater Wireless Sensor Networks Sensors ",
      journal: " 22, no. 2: 415",
      doi: "10.3390/s22020415"
    },
    {
      number: 14,
      authors: "Gurram Sunitha, K. Geetha, S. Neelakandan, Aditya Kumar Singh Pundir, S. Hemalatha, Vinay Kumar",
      title: "Intelligent deep learning-based Clustring and classification using facial images, Image and Vision Computing",
      journal: "Vol. 121,2022",
      doi: "10.1016/j.imavis.2022.104404"
    },
    {
      number: 15,
      authors: "Mohan.P, Subramani, N.; Alotaibi, Y.; Alghamdi, S.; Khalaf, O.I.; Ulaganathan, S.",
      title: "Improved Metaheuristics-Based Clustering with Multihop Routing Protocol for Underwater Wireless Sensor Networks",
      journal: "Sensors 2022, 22, 1618.",
      doi: "10.3390/s22041618"
    },
    {
      number: 16,
      authors: "Harinder Singh, D. Ramya, R. Saravanakumar, Nayani Sateesh, Rohit Anand, Swarnjit Singh, S. Neelakandan",
      title: "Artificial intelligence based quality of transmission predictive model for cognitive optical networks",
      journal: "Optik, Vol. 257, 2022",
      doi: "10.1016/j.ijleo.2022.168789"
    },
    {
      number: 17,
      authors: "Anuradha, D.; Subramani, N.; Khalaf, O.I.; Alotaibi, Y.; Alghamdi, S.; Rajagopal, M.",
      title: "Chaotic Search-and-Rescue-Optimization-Based Multi-Hop Data Transmission Protocol for Underwater Wireless Sensor Networks.",
      journal: "Sensors 2022, 22, 2867.",
      doi: "0.3390/s22082867"
    },
    {
      number: 18,
      authors: "B.T. Geetha, P. Santhosh Kumar, B. Sathya Bama, S. Neelakandan, Chiranjit Dutta, D. Vijendra Babu.",
      title: "Green energy aware and cluster-based communication for future load prediction in IoT, Sustainable Energy Technologies and Assessments",
      journal: "Vol.52,2022,102244",
      doi: "10.1016/j.seta.2022.102244"
    },
    {
      number: 19,
      authors: "A. Harshavardhan, Prasanthi Boyapati, S. Neelakandan, Alhassan Alolo Abdul-Rasheed Akeji, Aditya Kumar Singh Pundir, Ranjan Walia.",
      title: "LSGDM with Biogeography-Based Optimization (BBO) Model for Healthcare Applications, Journal of Healthcare Engineering.",
      journal: "vol. 2022, Article ID 2170839, 11 pages, 2022. ",
      doi: "10.1155/2022/2170839"
    },
    {
      number: 20,
      authors: "S. Parthiban, A. Harshavardhan, S. Neelakandan, Vempaty Prashanthi, Abdul-Rasheed Akeji Alhassan Alolo, S. Velmurugan, Chaotic Salp Swarm.",
      title: "Optimization-Based Energy-Aware VMP Technique for Cloud Data Centers, Computational Intelligence and Neuroscience.",
      journal: "vol. 2022, Article ID 4343476, 9 pages, 2022.",
      doi: "10.1155/2022/4343476"
    },
    {
      number: 21,
      authors: "M. Kavitha, B. Sankara Babu, B. Sumathy, T. Jackulin, N. Ramkumar et al",
      title: "M. Kavitha, B. Sankara Babu, B. Sumathy, T. Jackulin, N. Ramkumar et al., Convolutional neural networks-based video reconstruction and computation in digital twins, Intelligent Automation & Soft Computing",
      journal: "vol. 34, no.3, pp. 1571–1586, 2022.",
      doi: ""
    },
    {
      number: 22,
      authors: "S.Raghavendar,A.Hardhavardhan,S.Neelakandan,R.Partheepan,Ranjan Walia and V.Chandra Shekar Rao",
      title: " Multilayer Stacked Probabilistic Belief Network-Based Brain Tumor Segmentation and Classification “International Journal of Foundations of Computer Science",
      journal: "",
      doi: "https://doi.org/10.1142/S0129054122420047"
    },
    {
      number: 23,
      authors: "Neelakandan S, Perumal SK, Kallimani JS, Ulaganathan S, Bhargava S, Meckanizi S",
      title: "Controlling energy aware clustering and multihop routing protocol for IoT assisted wireless sensor networks.",
      journal: "",
      doi: ""
    },
    {
  number: 24,
  authors: "Neelakandan S, Sridevi M, Saravanan Chandrasekaran, Murugeswari, Bheema Lingaiah",
  title: "Deep Learning Approaches for Cyberbullying Detection and Classification on Social Media",
  journal: "Computational Intelligence and Neuroscience, Vol. 2022",
  doi: "https://doi.org/10.1155/2022/2163458"
},
{
  number: 25,
  authors: "Deepak Kumar Jain, S. Neelakandan, T. Veeramani, Surbhi Bhatia, Fida Hussain Memon",
  title: "Design of fuzzy logic-based energy management and traffic predictive model for cyber physical systems",
  journal: "Computers and Electrical Engineering, Vol. 102, 2022, Article 108135",
  doi: "https://doi.org/10.1016/j.compeleceng.2022.108135"
},
{
  number: 26,
  authors: "Lakshmanna K, Subramani N, Alotaibi Y, Alghamdi S, Khalafand OI, Nanda AK",
  title: "Improved Metaheuristic-Driven Energy-Aware Cluster-Based Routing Scheme for IoT-Assisted Wireless Sensor Networks",
  journal: "Sustainability, Vol. 14, 2022, Article 7712",
  doi: "https://doi.org/10.3390/su14137712"
},
{
  number: 27,
  authors: "Neelakandan S, Paulraj D, Ezhumalai P, Prakash M",
  title: "A Deep Learning Modified Neural Network (DLMNN) based proficient sentiment analysis technique on Twitter data",
  journal: "Journal of Experimental & Theoretical Artificial Intelligence, 2022",
  doi: "https://doi.org/10.1080/0952813X.2022.2093405"
},
{
  number: 28,
  authors: "Keshetti Sreekala, Pretty Diana Cyril C, Neelakandan S, Saravanan Chandrasekaran, Ranjan Walia, Eric Ofori Martinson",
  title: "Capsule Network-Based Deep Transfer Learning Model for Face Recognition",
  journal: "Wireless Communications and Mobile Computing, Vol. 2022",
  doi: "https://doi.org/10.1155/2022/2086613"
},
{
  number: 29,
  authors: "Neelakandan S, Ahmed Mohammed Metwally, Madhappan Santhamoorthy, Satyanarayana Gupta M",
  title: "Metaheuristics with Deep Transfer Learning Enabled Detection and classification model for industrial waste management",
  journal: "Chemosphere, 2022, Article 136046",
  doi: "https://doi.org/10.1016/j.chemosphere.2022.136046"
},
{
  number: 30,
  authors: "Deepak Kumar Jain, Xue Liu, Subramani Neelakandan, Mohan Prakash",
  title: "Modeling of human action recognition using hyperparameter tuned deep learning model",
  journal: "Journal of Electronic Imaging, Vol. 32, No. 1, 2022",
  doi: "https://doi.org/10.1117/1.JEI.32.1.011211"
},
{
  number: 31,
  authors: "Faritha Banu J, Neelakandan S, Geetha BT, Selvalakshmi V, Umadevi A, Eric Ofori Martinson",
  title: "Artificial Intelligence Based Customer Churn Prediction Model for Business Markets",
  journal: "Computational Intelligence and Neuroscience, Vol. 2022",
  doi: "https://doi.org/10.1155/2022/1703696"
},
{
  number: 32,
  authors: "Raghavendra S, Neelakandan S, Prakash M, Geetha BT, Mary Rexcy Asha S, Michaelraj Kingston Roberts",
  title: "Artificial Humming Bird with Data Science Enabled Stability Prediction Model for Smart Grids",
  journal: "Sustainable Computing: Informatics and Systems, Vol. 36, 2022",
  doi: "https://doi.org/10.1016/j.suscom.2022.100821"
},
{
  number: 33,
  authors: "Awari H, Subramani N, Janagaraj A, Thanammal GB, Thangarasu J, Kohar R",
  title: "Three-dimensional dental image segmentation and classification using deep learning with tunicate swarm algorithm",
  journal: "Expert Systems, 2022",
  doi: "https://doi.org/10.1111/exsy.13198"
},
{
  number: 34,
  authors: "Gangathimmappa M, Subramani N, Sambath V, Ramanujam RAM, Sammeta M",
  title: "Deep learning enabled cross-lingual search with metaheuristic web-based query optimization model for multi-document summarization",
  journal: "Concurrency and Computation: Practice and Experience, 2022",
  doi: "https://doi.org/10.1002/cpe.7476"
},
{
  number: 35,
  authors: "Shanmugavadivel K, Sathishkumar VE, Neelakandan S",
  title: "Deep learning based sentiment analysis and offensive language identification on multilingual code-mixed data",
  journal: "Scientific Reports, Vol. 12, 2022",
  doi: "https://doi.org/10.1038/s41598-022-26092-3"
},
{
  number: 36,
  authors: "Mohan P, Easwaramoorthy SV, Subramani N, Subramanian M, Meckanzi S",
  title: "Handcrafted Deep-Feature-Based Brain Tumor Detection and Classification Using MRI Images",
  journal: "Electronics, Vol. 11, 2022",
  doi: "https://doi.org/10.3390/electronics11244178"
},
{
  number: 37,
  authors: "Arul Vinyaakam Rajasimman M, Manoharan RK, Subramani N, Aridoss M, Galety MG",
  title: "Robust Facial Expression Recognition Using An Evolutionary Algorithm with a Deep Learning Model",
  journal: "Applied Sciences, Vol. 13, No. 1, 2023",
  doi: "https://doi.org/10.3390/app13010468"
},
{
  number: 38,
  authors: "Zhenwei Zhao, Xiaoming Li, Bing Luan, Weining Jiang, Weidong Gao, Subramani Neelakandan",
  title: "Secure Internet of Things using a Novel Brooks Iyengar Quantum Byzantine Agreement-centered Blockchain Networking Model in Smart Healthcare",
  journal: "Information Sciences, 2023",
  doi: "https://doi.org/10.1016/j.ins.2023.01.020"
},
{
  number: 39,
  authors: "Alharbi M, Neelakandan S, Gupta S",
  title: "Mobility aware load balancing using Kho–Kho optimization algorithm for hybrid Li-Fi and Wi-Fi network",
  journal: "Wireless Networks, 2023",
  doi: "https://doi.org/10.1007/s11276-022-03225-0"
},
{
  number: 40,
  authors: "Neelakandan S, Mardani A, Mohan P, Mishra AR, Ezhumalai P",
  title: "A fuzzy logic and DEEC protocol-based clustering routing method for wireless sensor networks",
  journal: "AIMS Mathematics, Vol. 8, No. 4, 2023",
  doi: "https://doi.org/10.3934/math.2023419"
},
{
  number: 41,
  authors: "Saravanan G, Neelakandan S, Ezhumalai P",
  title: "Improved wild horse optimization with levy flight algorithm for effective task scheduling in cloud computing",
  journal: "Journal of Cloud Computing, Vol. 12, 2023",
  doi: "https://doi.org/10.1186/s13677-023-00401-1"
},
{
  number: 42,
  authors: "Prakash Mohan, Neelakandan S, Abbas Mardani, Sudhanshu Maurya, Arulkumar N",
  title: "Eagle Strategy Arithmetic Optimisation Algorithm with Optimal Deep Convolutional Forest Based FinTech Application for Hyper-automation",
  journal: "Enterprise Information Systems, 2023",
  doi: "https://doi.org/10.1080/17517575.2023.2188123"
},
{
  number: 43,
  authors: "Paulraj D, Sethukarasi T, Neelakandan S, Prakash M, Baburaj E",
  title: "An Efficient Hybrid Job Scheduling Optimization approach for cloud environment",
  journal: "PLOS ONE, Vol. 18, No. 3, 2023",
  doi: "https://doi.org/10.1371/journal.pone.0282600"
},
{
  number: 44,
  authors: "Neelakandan S, Reddy NV, Ghfar AA, Pandey S, Kiran S, Thillai Arasu P",
  title: "Internet of things with nanomaterials-based predictive model for wastewater treatment",
  journal: "Water Reuse, 2023",
  doi: "https://doi.org/10.2166/wrd.2023.006"
},
{
  number: 45,
  authors: "Jain DK, Neelakandan S, Vidyarthi A, Gupta D",
  title: "Deep learning-based intelligent system for fingerprint identification using decision-based median filter",
  journal: "Pattern Recognition Letters, Vol. 174, 2023",
  doi: "https://doi.org/10.1016/j.patrec.2023.06.003"
},
{
  number: 46,
  authors: "Deepa S, Umamageswari A, Neelakandan S, Bhukya H",
  title: "Deep Belief Network-Based User and Entity Behavior Analytics for Web Applications",
  journal: "International Journal of Cooperative Information Systems, 2023",
  doi: "https://doi.org/10.1142/S0218843023500168"
},
{
  number: 47,
  authors: "Prakash M, Neelakandan S, Tamilselvi M, Velmurugan S",
  title: "Deep Learning-Based Wildfire Image Detection and Classification Systems for Controlling Biomass",
  journal: "International Journal of Intelligent Systems, 2023",
  doi: "https://doi.org/10.1155/2023/7939516"
},
{
  number: 48,
  authors: "Shadrach FD, Kandasamy G, Neelakandan S, Lingaiah TB",
  title: "Optimal transfer learning based nutrient deficiency classification model in ridge gourd",
  journal: "Scientific Reports, Vol. 13, 2023",
  doi: "https://doi.org/10.1038/s41598-023-14108-3"
},
{
  number: 49,
  authors: "Paulraj D, Neelakandan S, Prakash M, Baburaj E",
  title: "Admission control policy and key agreement based on anonymous identity in cloud computing",
  journal: "Journal of Cloud Computing, Vol. 12, 2023",
  doi: "https://doi.org/10.1186/s13677-023-00471-1"
},
{
  number: 50,
  authors: "Neelakandan S, Easwaramoorthy SV, Chinnasamy A, Cho J",
  title: "Fuzzy adaptive learning control network for image clustering and content-based image retrieval",
  journal: "AIMS Mathematics, Vol. 8, No. 8, 2023",
  doi: "https://doi.org/10.3934/math.2023942"
},
{
  number: 51,
  authors: "Xu Z, Jain DK, Neelakandan S",
  title: "Hunger games search optimization with deep learning model for sustainable supply chain management",
  journal: "Discover Internet of Things, Vol. 3, 2023",
  doi: "https://doi.org/10.1007/s43926-023-00040-7"
},
{
  number: 52,
  authors: "Menaka SR, Prakash M, Neelakandan S",
  title: "A novel WGF-LN based edge driven intelligence for wearable devices in human activity recognition",
  journal: "Scientific Reports, Vol. 13, 2023",
  doi: "https://doi.org/10.1038/s41598-023-44213-4"
},
{
  number: 53,
  authors: "Paulraj D, Mohamed Junaid KA, Sethukarasi T, Vigilson Prem M",
  title: "Rank-Revealing QR matrix and Schur decomposition method for big data mining and clustering",
  journal: "Information Sciences, Vol. 657, 2024",
  doi: "https://doi.org/10.1016/j.ins.2023.119957"
},
{
  number: 54,
  authors: "Neelakandan S, Annamalai R, Rayen SJ, Arunajsmine J",
  title: "Social Media Networks Owing to Disruptions For Effective Learning",
  journal: "Procedia Computer Science, Vol.172, pp.145–151, 2020",
  doi: "10.1016/j.procs.2020.05.022"
},
{
  number: 55,
  authors: "Neelakandan S, Gokul Anand J",
  title: "Trust based optimal routing in MANETs",
  journal: "International Conference on Emerging Trends in Electrical and Computer Technology (ICETECT), 2011, pp.1150–1156",
  doi: "10.1109/ICETECT.2011.5760293"
},
{
  number: 56,
  authors: "Divyabharathi S",
  title: "Large scale optimization to minimize network traffic using MapReduce in big data applications",
  journal: "ICCPEIC 2016, pp.193–199",
  doi: "10.1109/ICCPEIC.2016.7557196"
},
{
  number: 57,
  authors: "Itnal S, Kannan KS, Suma KG, Neelakandan S",
  title: "A Secured Healthcare Medical System Using Blockchain Technology",
  journal: "Lecture Notes in Electrical Engineering, Vol. 828, Springer, 2022",
  doi: "10.1007/978-981-16-7985-8_17"
},
{
  number: 58,
  authors: "Neelakandan S, Rene Beulah J, Prathiba L, Murthy GLN, Fantin Irudaya Raj E, Arulkumar N",
  title: "Blockchain with deep learning-enabled secure healthcare data transmission and diagnostic model",
  journal: "International Journal of Modeling, Simulation, and Scientific Computing, 2022",
  doi: "10.1142/S1793962322410069"
},
{
  number: 59,
  authors: "Neelakandan S, Prakash M, Bhargava S, Mohan K, Robert NR, Upadhye S",
  title: "Optimal Stacked Sparse Autoencoder Based Traffic Flow Prediction in Intelligent Transportation Systems",
  journal: "Studies in Systems, Decision and Control, Vol. 412, Springer, 2022",
  doi: "10.1007/978-3-030-94102-4_6"
},
{
  number: 60,
  authors: "Siripuri Kiran, Neelakandan S, Pratapa Reddy A, Sonali Goyal, Balajee Maram, Chandra Shekhar Rao V",
  title: "IoT and wearables-enabled Alzheimer detection using stacked sparse autoencoder",
  journal: "Wearable Telemedicine Technology for the Healthcare Industry, Academic Press, 2022",
  doi: "10.1016/B978-0-323-85854-0.00012-5"
},
{
  number: 61,
  authors: "Neelakandan S, Keerthika K, Ilanchezhian P, Madeswaran TS",
  title: "Quantum Invasive Weed Optimization Based Energy Aware Task Scheduling for Cyber–Physical Systems",
  journal: "International Journal of Modeling, Simulation, and Scientific Computing, 2023",
  doi: "10.1142/S1793962323410167"
},
{
  number: 62,
  authors: "Prakash PR, Anuradha D, Javid Iqbal, Galety MG, Ruby Singh, Neelakandan S",
  title: "A novel CNN with GRU for automated speech emotion recognition",
  journal: "Journal of Control and Decision, 2022",
  doi: "10.1080/23307706.2022.2085198"
},
{
  number: 63,
  authors: "Al-Atroshi CAI, Rene Beulah J, Singamaneni KK, Pretty Diana Cyril C, Neelakandan S, Velmurugan S",
  title: "Automated speech-based evaluation of mild cognitive impairment and Alzheimer’s disease",
  journal: "International Journal of Healthcare Management, 2022",
  doi: "10.1080/20479700.2022.2097764"
},
{
  number: 64,
  authors: "Upadhye S, Neelakandan S, Thangaraj K, Vijendra Babu D, Arulkumar N, Qureshi K",
  title: "Real-time traffic flow monitoring using deep learning and UAVs",
  journal: "Journal of Mobile Multimedia, Vol.19, No.2, 2023",
  doi: "10.13052/jmm1550-4646.1926"
},
{
  number: 65,
  authors: "Prakash PR, Anuradha D, Iqbal J, Galety MG, Singh R, Neelakandan S",
  title: "CNN-GRU based automated speech emotion recognition",
  journal: "Journal of Control and Decision, Vol.10, No.1, pp.54–63",
  doi: ""
},
{
  number: 66,
  authors: "Subramani N, Easwaramoorthy SV, Mohan P, Subramanian M, Sambath V",
  title: "Gradient Boosted Decision Tree-Based Influencer Prediction in Social Network Analysis",
  journal: "Big Data and Cognitive Computing, Vol.7, 2023",
  doi: "10.3390/bdcc7010006"
},
{
  number: 67,
  authors: "Nanda AK, Gupta S, Saleth ALM, Kiran S, Neelakandan S",
  title: "MLP neural network with optimization for greenhouse gas forecasting",
  journal: "Environmental Challenges, Vol.11, 2023",
  doi: "10.1016/j.envc.2023.100708"
},
{
  number: 68,
  authors: "Mayuri AVR, Rashmi V, Das B, Mandal A, Neelakandan S",
  title: "ANN with Chan–Vese Algorithm for Plant Disease Detection",
  journal: "ICAISC 2023, Dharwad, India",
  doi: "10.1109/ICAISC58445.2023.10199472"
},
{
  number: 69,
  authors: "Neelakandan S, Varma MB, Reddy KS, Reddy NY",
  title: "Forecasting Electricity Price using CNN with Chicken Swarm Optimization",
  journal: "ICAISC 2023, Dharwad, India",
  doi: "10.1109/ICAISC58445.2023.10200868"
},
{
  number: 70,
  authors: "Neelakandan S, Prakash V, PranavKumar MS, Balasubramaniam R",
  title: "Forecasting E-Commerce Sale Prediction using DL Modified Neural Networks",
  journal: "ICAISC 2023, Dharwad, India",
  doi: "10.1109/ICAISC58445.2023.10199817"
},
{
  number: 71,
  authors: "Neelakandan S, Rajesh P, Mahesh P, Karthik P, Mukesh M",
  title: "Efficient WBC Cancer Cell Prediction using DenseNet",
  journal: "ICAISC 2023, Dharwad, India",
  doi: "10.1109/ICAISC58445.2023.10199502"
},
{
  number: 72,
  authors: "Neelakandan S, Brinda A, Dheekshitha S, Divya Priya MS",
  title: "Extreme Gradient Boosting based Fetal Health Classification",
  journal: "ICAISC 2023, Dharwad, India",
  doi: "10.1109/ICAISC58445.2023.10200526"
},


  ];

  // Helper to get a valid DOI link
  const getDoiLink = (doi: string): string => {
    const trimmedDoi = doi.trim().replace(/\s+/g, "");
    if (trimmedDoi.startsWith("http://") || trimmedDoi.startsWith("https://")) {
      return trimmedDoi;
    }
    return `https://doi.org/${trimmedDoi}`;
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-indigo-50 via-white to-pink-50">
      {/* <Header /> */}
      <main className="flex-1">
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600" data-testid="text-publications-heading">
            Publications
          </h1>
          <p className="text-lg text-muted-foreground mb-12 italic tracking-wide">
            SCI/SCIE Indexed - ARTICLES
          </p>
          <div className="space-y-8">
            {publications.map((pub, idx) => (
              <Card 
                key={idx} 
                className="p-6 hover-elevate flex flex-col bg-gradient-to-r from-white via-purple-50 to-white border border-purple-200 shadow-lg hover:shadow-2xl transition-shadow duration-500 rounded-xl transform hover:-translate-y-1" 
                data-testid={`card-publication-${idx}`}
              >
                <div className="flex flex-col justify-center">
                  <div className="mb-2 font-semibold text-purple-900 hover:text-purple-700 transition-colors duration-300 cursor-default">
                    {pub.number}) <span className="font-bold">{pub.authors}</span>, {pub.title}
                  </div>
                  <div className="mb-2 text-muted-foreground font-mono">{pub.journal}</div>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="gap-2 w-fit border-purple-500 hover:bg-purple-100 text-purple-700 hover:text-purple-900 transition-colors duration-300"
                    data-testid={`button-doi-${idx}`}
                  >
                    <a href={getDoiLink(pub.doi)} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      DOI
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer
        professorName="Dr. S. Neelakandan"
        institution="R.M.K. Engineering College"
        email="drsnk730@gmail.com"
        linkedin="https://linkedin.com"
        youtube="https://youtube.com"
      />
    </div>
  );
}
