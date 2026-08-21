export interface University {
    name: string;
    location: string;
    description: string;
    highlights: string[];
    tuitionFeeUSD?: string;
    established?: string;
}

export interface FAQ {
    question: string;
    answer: string;
}

export interface FeeBreakdown {
    tuitionPerYear: string;
    hostelMessPerYear: string;
    totalPackageINR: string;
    totalPackageUSD: string;
}

export interface Country {
    name: string;
    slug: string;
    code: string;
    flag: string;
    description: string;
    overview: string;
    duration: string;
    medium: string;
    intakePeriod: string;
    feeRange: string;
    feeBreakdown: FeeBreakdown;
    accreditations: string[];
    universities: University[];
    admissionRequirements: string[];
    documentsRequired: string[];
    climate: string;
    whyChoose: string[];
    safety: string;
    food: string;
    faqs: FAQ[];
}

export const countries: Country[] = [
    {
        name: "Kyrgyzstan",
        slug: "kyrgyzstan",
        code: "KG",
        flag: "🇰🇬",
        description: "Affordable 5-year MBBS programs with 100% English medium, WHO/NMC recognition, and a large Kashmiri student community.",
        overview: "Kyrgyzstan is one of the most cost-effective medical destinations for Indian and Kashmiri students seeking a quality MBBS degree abroad. Offering a streamlined 5-year academic program plus a 1-year compulsory clinical internship, Kyrgyz medical universities adhere to the latest National Medical Commission (NMC) 2021 gazette guidelines. With direct flight access, low living expenses, and established Indian messes, Kyrgyzstan provides a safe and supportive learning environment.",
        duration: "5 Years + 1 Year Internship",
        medium: "100% English Medium",
        intakePeriod: "September – October 2026",
        feeRange: "₹15–20 Lakhs Total",
        feeBreakdown: {
            tuitionPerYear: "$3,200 – $4,200 / yr",
            hostelMessPerYear: "$1,200 / yr",
            totalPackageINR: "₹15.5 Lakhs – ₹19.5 Lakhs",
            totalPackageUSD: "$18,500 – $23,500 Total"
        },
        accreditations: [
            "NMC (National Medical Commission)",
            "WHO (World Health Organization)",
            "FAIMER",
            "WDOMS Registered",
            "Ministry of Education Kyrgyzstan"
        ],
        universities: [
            {
                name: "Osh State University (Medical Faculty)",
                location: "Osh City",
                description: "The largest government medical university in Kyrgyzstan with over 3,000 Indian students and 8 affiliated teaching hospitals.",
                highlights: ["Government University", "WHO & NMC Recognized", "100% English Medium", "Kashmiri Mess Available"],
                tuitionFeeUSD: "$3,800/yr",
                established: "1951"
            },
            {
                name: "Jalal-Abad State University",
                location: "Jalal-Abad",
                description: "A premier state government medical institution renowned for comprehensive practical anatomy labs and clinical training.",
                highlights: ["State Government", "High FMGE Pass Rate", "Affordable Hostel", "Active Student Community"],
                tuitionFeeUSD: "$3,400/yr",
                established: "1993"
            },
            {
                name: "International School of Medicine (ISM)",
                location: "Bishkek",
                description: "A leading private medical institute in Bishkek with state-of-the-art simulation centers and international faculty.",
                highlights: ["Capital City Location", "Modern Simulation Labs", "ECFMG Certified", "Halal & Indian Food"],
                tuitionFeeUSD: "$4,500/yr",
                established: "2003"
            },
            {
                name: "Asian Medical Institute",
                location: "Kant",
                description: "Located near Bishkek, offering student-friendly tuition schedules, English instruction, and dedicated Indian hostels.",
                highlights: ["Low Living Cost", "NMC Compliant", "English Medium", "24/7 Security"],
                tuitionFeeUSD: "$3,200/yr",
                established: "2004"
            }
        ],
        admissionRequirements: [
            "50% aggregate in Physics, Chemistry, and Biology in Class 12th (40% for Reserved categories)",
            "Qualifying NEET score in the year of admission or preceding 2 years",
            "Minimum 17 years of age on or before December 31st of the admission year"
        ],
        documentsRequired: [
            "10th & 12th Marksheets & Passing Certificates",
            "Valid NEET Score Card",
            "Original Passport (Minimum 2 years validity)",
            "10 Passport-size photographs (White background)",
            "Medical Fitness Certificate & HIV Negative Test Report"
        ],
        climate: "Continental climate with cold snowy winters (similar to Kashmir valley) and pleasant summers (20°C to 30°C).",
        whyChoose: [
            "Extremely affordable total budget (₹15L–20L total package including hostel)",
            "NMC 2021 Gazette compliant: 54 months course + 12 months internship",
            "Dedicated Kashmiri and Indian food messes serving authentic Halal meals",
            "Over 10,000 Indian medical students currently studying in Kyrgyzstan",
            "Direct counseling and campus support from Dr. Mustansir & Kaali Edge team"
        ],
        safety: "Kyrgyzstan is extremely safe for international students. Campus hostels feature 24/7 CCTV surveillance, female security wardens, and biometric entry.",
        food: "Indian messes operate across all major university hostels providing daily North Indian, South Indian, and authentic Kashmiri rice, dal, and Halal meat options.",
        faqs: [
            {
                question: "Is Kyrgyzstan MBBS recognized by the NMC in India?",
                answer: "Yes, top medical universities in Kyrgyzstan like Osh State University and Jalal-Abad State University are listed in the WDOMS and recognized by the National Medical Commission (NMC). Graduates are eligible to appear for the NEXT/FMGE exam in India."
            },
            {
                question: "What is the total cost of studying MBBS in Kyrgyzstan in Rupees?",
                answer: "The total 5-year budget for MBBS in Kyrgyzstan ranges between ₹15.5 Lakhs to ₹19.5 Lakhs, including university tuition fees, hostel accommodation, and Indian mess charges."
            },
            {
                question: "Is NEET mandatory for MBBS admission in Kyrgyzstan?",
                answer: "Yes, qualifying NEET is mandatory for all Indian citizens planning to study MBBS abroad and practice medicine in India after graduation."
            },
            {
                question: "Are Kashmiri food and Halal options available in Kyrgyzstan?",
                answer: "Yes, all major university hostels feature dedicated Indian messes serving 100% Halal food, including familiar rice, Kashmiri tea, and North Indian meals."
            }
        ]
    },
    {
        name: "Uzbekistan",
        slug: "uzbekistan",
        code: "UZ",
        flag: "🇺🇿",
        description: "Emerging top choice with modern European curriculum, affordable fees, high safety standards, and close cultural ties.",
        overview: "Uzbekistan has swiftly risen to become one of the premier destinations for Indian medical aspirants. Backed by government initiatives, Uzbek medical universities have revamped their infrastructure, upgraded to European-standard medical simulation labs, and aligned their 5+1 year curriculum directly with NMC guidelines. With low living costs, peaceful surroundings, and rich silk-road cultural connections, Uzbekistan provides an outstanding academic environment.",
        duration: "5 Years + 1 Year Internship",
        medium: "100% English Medium",
        intakePeriod: "September – October 2026",
        feeRange: "₹18–22 Lakhs Total",
        feeBreakdown: {
            tuitionPerYear: "$3,500 – $4,500 / yr",
            hostelMessPerYear: "$1,300 / yr",
            totalPackageINR: "₹18.0 Lakhs – ₹22.5 Lakhs",
            totalPackageUSD: "$21,500 – $26,500 Total"
        },
        accreditations: [
            "NMC (National Medical Commission)",
            "WHO (World Health Organization)",
            "FAIMER",
            "UNESCO Recognized",
            "Ministry of Higher Education Uzbekistan"
        ],
        universities: [
            {
                name: "Tashkent Medical Academy",
                location: "Tashkent",
                description: "The flagship medical university in Central Asia with state-of-the-art teaching clinics, organ transplant research, and international accreditations.",
                highlights: ["Top-Ranked Institute", "Capital Location", "Advanced Surgery Labs", "100% English Medium"],
                tuitionFeeUSD: "$4,200/yr",
                established: "1919"
            },
            {
                name: "Samarkand State Medical University",
                location: "Samarkand",
                description: "One of the oldest and most distinguished medical academies with modern smart classrooms and 5 affiliated tertiary care hospitals.",
                highlights: ["Historic Campus", "NMC & WHO Recognized", "High Practical Hours", "Indian Food Mess"],
                tuitionFeeUSD: "$3,800/yr",
                established: "1930"
            },
            {
                name: "Bukhara State Medical Institute",
                location: "Bukhara",
                description: "Famous for student exchange programs with European universities, low student-to-teacher ratios, and comfortable modern hostels.",
                highlights: ["European Collaboration", "Modern Hostels", "Strong Clinical Focus", "Safe City"],
                tuitionFeeUSD: "$3,600/yr",
                established: "1990"
            },
            {
                name: "Fergana Medical Institute of Public Health",
                location: "Fergana",
                description: "A government medical institute offering innovative public health training, English medium MBBS, and affordable fee structures.",
                highlights: ["Government Institute", "Low Tuition Fee", "100% English Medium", "High Safety"],
                tuitionFeeUSD: "$3,400/yr",
                established: "1991"
            }
        ],
        admissionRequirements: [
            "Minimum 50% marks in Physics, Chemistry, and Biology in 10+2",
            "Valid NEET qualification certificate",
            "Minimum age of 17 years by December 31, 2026"
        ],
        documentsRequired: [
            "Class 10th and 12th Marksheets & Certificates",
            "NEET Admit Card & Score Card",
            "Passport with at least 18 months validity",
            "12 Passport photos with white background",
            "Medical check-up report including Blood test & HIV test"
        ],
        climate: "Mild continental climate. Pleasant springs and autumns, warm summers, and moderate winter snow similar to Kashmir.",
        whyChoose: [
            "Government-backed medical infrastructure with advanced clinical simulation centers",
            "NMC Gazette 2021 fully compliant (5 years course + 1 year compulsory internship)",
            "Very safe environment with strict law enforcement and friendly local citizens",
            "Authentic Halal Indian mess catering specifically to Kashmiri and Indian dietary needs",
            "Direct support from Kaali Edge counselors in Tashkent and Samarkand"
        ],
        safety: "Uzbekistan is globally rated as one of the safest countries for international students. University campuses feature 24/7 guarded premises and electronic keycard entry.",
        food: "Local Uzbek cuisine shares deep historical roots with Kashmiri food (biryani, pilaf, fresh bread). Hostels have dedicated Indian cooks preparing daily fresh meals.",
        faqs: [
            {
                question: "Is MBBS in Uzbekistan valid for practicing in India?",
                answer: "Yes, degrees awarded by WHO & NMC recognized Uzbek medical universities are valid worldwide. Graduates can sit for the NEXT/FMGE examination to practice in India."
            },
            {
                question: "What is the medium of instruction for MBBS in Uzbekistan?",
                answer: "The entire 5-year MBBS course is taught 100% in English for international students, with basic Uzbek/Russian taught for patient interaction during clinical rotations."
            },
            {
                question: "What is the fee structure for Tashkent Medical Academy?",
                answer: "Tashkent Medical Academy's annual tuition fee is approximately $4,200 per year, with hostel and Indian mess expenses averaging $1,200 per year."
            }
        ]
    },
    {
        name: "Kazakhstan",
        slug: "kazakhstan",
        code: "KZ",
        flag: "🇰🇿",
        description: "High practical clinical exposure, top-ranked national universities, and advanced medical infrastructure.",
        overview: "Kazakhstan stands out as a leading destination for medical education in Eurasia. Featuring government-funded universities, vast clinical hospital networks, and European credit transfer options (ECTS), Kazakh institutions deliver world-class training in medicine. Programs adhere to NMC 2021 norms with 5 years of academic study and 1 year of compulsory rotating internship.",
        duration: "5 Years + 1 Year Internship",
        medium: "100% English Medium",
        intakePeriod: "September – October 2026",
        feeRange: "₹20–25 Lakhs Total",
        feeBreakdown: {
            tuitionPerYear: "$4,000 – $5,200 / yr",
            hostelMessPerYear: "$1,300 / yr",
            totalPackageINR: "₹20.0 Lakhs – ₹25.0 Lakhs",
            totalPackageUSD: "$24,000 – $30,000 Total"
        },
        accreditations: [
            "NMC (National Medical Commission)",
            "WHO (World Health Organization)",
            "FAIMER",
            "WFME (World Federation for Medical Education)",
            "Ministry of Education & Science Kazakhstan"
        ],
        universities: [
            {
                name: "Kazakh National Medical University (KazNMU)",
                location: "Almaty",
                description: "The premier medical university of Kazakhstan located in Almaty. Boasts 7 specialized university hospitals and over 80 clinical departments.",
                highlights: ["Ranked #1 in Kazakhstan", "Almaty City Location", "7 University Hospitals", "100% English Medium"],
                tuitionFeeUSD: "$5,200/yr",
                established: "1930"
            },
            {
                name: "Semey State Medical University",
                location: "Semey",
                description: "Renowned for its large hospital base and high pass percentage in screening exams, offering dedicated research laboratories.",
                highlights: ["State University", "High Clinical Exposure", "NMC Recognized", "Indian Student Association"],
                tuitionFeeUSD: "$4,200/yr",
                established: "1953"
            },
            {
                name: "Astana Medical University",
                location: "Astana (Capital)",
                description: "Located in the modern capital city, featuring modern digital learning centers, international faculty, and European clinical training.",
                highlights: ["Capital City", "Modern Campus", "ECFMG Recognized", "Halal Food Available"],
                tuitionFeeUSD: "$4,800/yr",
                established: "1964"
            },
            {
                name: "West Kazakhstan Marat Ospanov State Medical University",
                location: "Aktobe",
                description: "A leading medical research center in western Kazakhstan with low tuition fees and excellent hostel infrastructure.",
                highlights: ["Affordable Fees", "High Clinical Rotations", "Government Institute", "24/7 Hostels"],
                tuitionFeeUSD: "$3,800/yr",
                established: "1957"
            }
        ],
        admissionRequirements: [
            "50% aggregate in Physics, Chemistry & Biology in 12th Standard",
            "Must be NEET qualified",
            "Age 17 years or above at admission time"
        ],
        documentsRequired: [
            "Class 10th & 12th Original Marksheets & Passing Certificates",
            "NEET Score Card Copy",
            "Valid Passport with minimum 2 years validity",
            "12 Passport photos (3.5x4.5 cm, white background)",
            "Medical clearance report and HIV test"
        ],
        climate: "Cold snowy winters (sub-zero temperatures similar to high altitude Kashmir) and warm pleasant summers.",
        whyChoose: [
            "Top national universities with vast government hospital networks for hands-on clinical exposure",
            "Fully compliant with NMC Gazette 2021 criteria (5 years academic + 1 year internship)",
            "WFME & ECFMG accreditation allowing graduates to pursue USMLE (USA) and PLAB (UK)",
            "Vibrant cosmopolitan cities like Almaty & Astana with international safety standards",
            "Established Kashmiri student representation and active Indian cultural events"
        ],
        safety: "Kazakhstan boasts high social stability, modern infrastructure, and safe city transit systems. Hostels have round-the-clock security supervision.",
        food: "Indian food messes operate in all major hostels. Fresh vegetables, dairy, Kashmiri tea, and Halal meat are readily accessible.",
        faqs: [
            {
                question: "What is the duration of MBBS in Kazakhstan according to NMC guidelines?",
                answer: "The MBBS program in Kazakhstan is 5 years of academic instruction plus 1 year of mandatory clinical internship, fully satisfying the NMC 2021 Gazette rules."
            },
            {
                question: "Can I appear for USMLE or PLAB after MBBS in Kazakhstan?",
                answer: "Yes, leading universities like KazNMU and Astana Medical University are WFME and FAIMER accredited, making graduates eligible for USMLE, PLAB, and NEXT exams."
            }
        ]
    },
    {
        name: "Russia",
        slug: "russia",
        code: "RU",
        flag: "🇷🇺",
        description: "World-renowned 6-year medical programs with century-old clinical heritage, advanced hospital exposure, and top FMGE results.",
        overview: "Russia has been the premier global destination for medical education for over 60 years. Russian medical universities hold worldwide recognition for their rigorous clinical practicals, state-of-the-art hospital infrastructure, and low subsidized tuition rates. Offering 6-year bilingual or 100% English medium programs, Russian medical degrees are valued across India, Europe, the USA, and the Gulf.",
        duration: "6 Years (Includes Practical Rotations)",
        medium: "100% English Medium",
        intakePeriod: "September – October 2026",
        feeRange: "₹18–25 Lakhs Total",
        feeBreakdown: {
            tuitionPerYear: "$3,500 – $4,800 / yr",
            hostelMessPerYear: "$1,200 / yr",
            totalPackageINR: "₹18.5 Lakhs – ₹25.5 Lakhs",
            totalPackageUSD: "$22,000 – $30,000 Total"
        },
        accreditations: [
            "NMC (National Medical Commission)",
            "WHO (World Health Organization)",
            "Ministry of Health & Science Russian Federation",
            "FAIMER & ECFMG Certified",
            "WDOMS Listed"
        ],
        universities: [
            {
                name: "Kazan Federal University (Institute of Fundamental Medicine)",
                location: "Kazan City",
                description: "One of Russia's top 3 federal universities with advanced genomic research centers, cadaver dissections, and university hospitals.",
                highlights: ["Federal University", "World Top 400", "High FMGE Pass Rate", "100% English Medium"],
                tuitionFeeUSD: "$4,500/yr",
                established: "1804"
            },
            {
                name: "Bashkir State Medical University",
                location: "Ufa",
                description: "A major medical center featuring Russia's top robotic surgery simulation hospital and over 2,000 international medical students.",
                highlights: ["Robotic Surgery Center", "State University", "Active Indian Mess", "High Practical Hours"],
                tuitionFeeUSD: "$3,800/yr",
                established: "1932"
            },
            {
                name: "Crimea State Medical University",
                location: "Simferopol",
                description: "Famous for its warm climate, large coastal campus, and long-standing reputation among Indian medical professionals.",
                highlights: ["Historic Institution", "Pleasant Climate", "WHO/NMC Listed", "Kashmiri Community"],
                tuitionFeeUSD: "$3,600/yr",
                established: "1931"
            },
            {
                name: "Volgograd State Medical University",
                location: "Volgograd",
                description: "Highly popular among Indian students for its experienced English faculty and affiliated general teaching hospitals.",
                highlights: ["NMC Recognized", "Experienced Faculty", "Central Location", "Affordable Hostels"],
                tuitionFeeUSD: "$4,000/yr",
                established: "1935"
            }
        ],
        admissionRequirements: [
            "50% aggregate in PCB in Class 12th (40% for SC/ST/OBC)",
            "NEET Qualification card",
            "17 years minimum age by December 31, 2026"
        ],
        documentsRequired: [
            "10th & 12th Original Marksheets with Apostille Attestation",
            "Valid Passport with minimum 2 years validity",
            "NEET Scorecard Copy",
            "12 Passport photos (3.5 x 4.5 cm, matte finish)",
            "HIV Negative test report & General Fitness Certificate"
        ],
        climate: "Varies by region. Central Russia features snowy winters (-5°C to -15°C) and warm pleasant summers (22°C to 28°C).",
        whyChoose: [
            "Subsidized government fee structures backed by the Russian Ministry of Education",
            "Unrivaled clinical training with access to massive multi-specialty municipal hospitals",
            "High success rate in Indian FMGE / NEXT exams due to rigorous clinical examinations",
            "Rich international campus culture with tens of thousands of Indian alumni worldwide",
            "Direct counseling, visa processing, and on-ground hosteler assistance from Kaali Edge"
        ],
        safety: "Russian university towns maintain strict campus security, biometric card access, and 24/7 video monitoring.",
        food: "Indian mess facilities operate in all major university dormitories, providing fresh North Indian and Halal meals daily.",
        faqs: [
            {
                question: "Is Russian MBBS degree recognized in India and globally?",
                answer: "Yes, Russian medical degrees (MD General Medicine, equivalent to MBBS) are recognized by WHO, NMC, ECFMG (USA), AMC (Australia), and medical councils worldwide."
            },
            {
                question: "What is the duration of MBBS in Russia?",
                answer: "The duration of the English-medium MBBS program in Russia is 6 years, which includes comprehensive clinical rotations and hospital practicals."
            }
        ]
    },
    {
        name: "Bangladesh",
        slug: "bangladesh",
        code: "BD",
        flag: "🇧🇩",
        description: "Highest FMGE pass rates, identical syllabus & disease spectrum to India, and English-medium clinical instruction.",
        overview: "Bangladesh offers the closest academic and clinical match to the Indian medical education system. Sharing the same disease patterns, clinical treatment protocols, BMDC/NMC curriculum, and South Asian food culture, Bangladesh consistently records the highest FMGE/NEXT pass percentage among all foreign medical destinations. Private medical colleges in Dhaka deliver 100% English instruction with high patient inflow.",
        duration: "5 Years + 1 Year Internship",
        medium: "100% English Medium",
        intakePeriod: "January – February 2027",
        feeRange: "₹30–40 Lakhs Total",
        feeBreakdown: {
            tuitionPerYear: "$6,000 – $8,000 / yr",
            hostelMessPerYear: "$1,200 / yr",
            totalPackageINR: "₹30.0 Lakhs – ₹38.0 Lakhs",
            totalPackageUSD: "$36,000 – $45,000 Total"
        },
        accreditations: [
            "NMC (National Medical Commission India)",
            "BMDC (Bangladesh Medical & Dental Council)",
            "WHO Registered",
            "FAIMER & ECFMG Approved",
            "Ministry of Health Bangladesh"
        ],
        universities: [
            {
                name: "Dhaka National Medical College",
                location: "Dhaka",
                description: "One of the oldest private medical colleges in Dhaka with a 650-bed tertiary teaching hospital and high OPD patient load.",
                highlights: ["Dhaka Center Location", "650-Bed Hospital", "Highest FMGE Pass Rate", "Identical Indian Syllabus"],
                tuitionFeeUSD: "$7,500/yr",
                established: "1925"
            },
            {
                name: "Bangladesh Medical College",
                location: "Dhanmondi, Dhaka",
                description: "The pioneer private medical college in Bangladesh, renowned for top academic faculty and clinical rigor.",
                highlights: ["Pioneer Institute", "NMC Approved", "High OPD Traffic", "100% English"],
                tuitionFeeUSD: "$8,000/yr",
                established: "1986"
            },
            {
                name: "East West Medical College",
                location: "Dhaka",
                description: "Features a modern green campus, 650-bed hospital, comfortable single hostels, and strong academic results.",
                highlights: ["Modern Campus", "Attached Hospital", "Safe Hostels", "Indian Food"],
                tuitionFeeUSD: "$7,000/yr",
                established: "2000"
            }
        ],
        admissionRequirements: [
            "GPA calculation criteria: Minimum total GPA of 7.0 in SSC & HSC combined",
            "Minimum GPA of 3.5 in Biology in HSC (Class 12th)",
            "Qualifying NEET score in the current year",
            "Gap limit: No more than 1 year gap after Class 12th"
        ],
        documentsRequired: [
            "Class 10th & 12th Marksheets & Certificates attested by Ministry of External Affairs (MEA)",
            "Equivalence Certificate from Director General of Health Services (DGHS) Bangladesh",
            "NEET Scorecard",
            "Passport copy with at least 1 year validity",
            "10 Passport photographs"
        ],
        climate: "Tropical monsoon climate, virtually identical to West Bengal and North India.",
        whyChoose: [
            "Consistent #1 rank in FMGE / NEXT exam pass percentage among all foreign medical graduates",
            "Identical clinical case studies, medical textbooks (Standard Indian authors), and disease patterns",
            "Zero cultural shock: Food, habits, and daily lifestyle feel just like home",
            "NMC Gazette 2021 compliant: 5 years study + 12 months clinical internship",
            "High patient OPD flow in attached 500+ bed teaching hospitals"
        ],
        safety: "Extremely safe and respectful environment for Indian students, with dedicated female hostels and campus security.",
        food: "Food is identical to Indian cuisine (rice, dal, fish, chicken, Kashmiri dishes). 100% Halal.",
        faqs: [
            {
                question: "Why does Bangladesh have the highest FMGE pass rate?",
                answer: "Because the curriculum, medical textbooks, disease spectrum, and hospital clinical training in Bangladesh are almost identical to Indian government medical colleges."
            },
            {
                question: "What is the GPA requirement for MBBS admission in Bangladesh?",
                answer: "Indian students need a combined GPA of at least 7.0 in SSC (Class 10) and HSC (Class 12), with a minimum Biology GPA of 3.5 in Class 12."
            }
        ]
    },
    {
        name: "Georgia",
        slug: "georgia",
        code: "GE",
        flag: "🇬🇪",
        description: "European medical standards, WFME & ECFMG accreditation, safe country ranking, and 6-year English medium curriculum.",
        overview: "Georgia offers world-class European medical education in a scenic, progressive, and ultra-safe country. Operating under the European Higher Education Area (EHEA) and ECTS credit system, Georgian medical universities deliver 6-year MD/MBBS programs taught entirely in English. With modern clinical simulation centers and USMLE-oriented training, Georgia is an ideal springboard for global medical careers.",
        duration: "6 Years (ECTS Credit System)",
        medium: "100% English Medium",
        intakePeriod: "September – October 2026",
        feeRange: "₹25–35 Lakhs Total",
        feeBreakdown: {
            tuitionPerYear: "$5,000 – $7,000 / yr",
            hostelMessPerYear: "$2,000 / yr",
            totalPackageINR: "₹25.0 Lakhs – ₹35.0 Lakhs",
            totalPackageUSD: "$30,000 – $42,000 Total"
        },
        accreditations: [
            "NMC (National Medical Commission)",
            "WHO (World Health Organization)",
            "WFME (World Federation for Medical Education)",
            "FAIMER & ECFMG Approved",
            "National Center for Educational Quality Enhancement Georgia"
        ],
        universities: [
            {
                name: "Tbilisi State Medical University (TSMU)",
                location: "Tbilisi",
                description: "The top public medical university in Georgia with over 85 years of medical training, international clinical affiliations, and USMLE preparation.",
                highlights: ["#1 Public Medical University", "Capital Location", "USMLE Integrated", "WFME Accredited"],
                tuitionFeeUSD: "$8,000/yr",
                established: "1930"
            },
            {
                name: "European University",
                location: "Tbilisi",
                description: "Features its own ultra-modern university hospital, high-tech simulation lab, and strong European faculty.",
                highlights: ["Own University Hospital", "Modern Simulation Center", "100% English", "Indian Mess"],
                tuitionFeeUSD: "$5,500/yr",
                established: "2012"
            },
            {
                name: "Batumi Shota Rustaveli State University",
                location: "Batumi City",
                description: "Located on the Black Sea coast, offering high academic standards, clinical training, and vibrant student living.",
                highlights: ["Coastal Location", "State University", "WHO/NMC Listed", "European Standard"],
                tuitionFeeUSD: "$5,000/yr",
                established: "1935"
            },
            {
                name: "Caucasus International University (CIU)",
                location: "Tbilisi",
                description: "Known for innovative anatomy labs, international clinical exposure, and dedicated international student welfare centers.",
                highlights: ["High Practical Hours", "Modern Labs", "Tbilisi Center", "Safe Campus"],
                tuitionFeeUSD: "$5,500/yr",
                established: "1995"
            }
        ],
        admissionRequirements: [
            "50% aggregate in Physics, Chemistry, and Biology in 10+2",
            "NEET Qualification",
            "Basic online video interview for English communication"
        ],
        documentsRequired: [
            "Class 10th & 12th Marksheets with Ministry & Apostille Attestation",
            "NEET Scorecard Copy",
            "Valid Passport (Minimum 2 years validity)",
            "10 Passport-size photographs",
            "Medical check-up report and HIV negative certificate"
        ],
        climate: "Subtropical to continental. Mild winters (2°C to 8°C) and warm pleasant summers (20°C to 28°C).",
        whyChoose: [
            "European ECTS credit system aligned with USMLE (USA) and PLAB (UK) syllabi",
            "Ranked among the top 10 safest countries globally with zero tolerance for crime",
            "100% English medium instruction with interactive problem-based learning (PBL)",
            "No NEET score barrier beyond basic qualification",
            "High quality of life in beautiful cities like Tbilisi and Batumi"
        ],
        safety: "Georgia is globally recognized as one of the safest countries in Europe for international students.",
        food: "Multiple Indian dining halls and private Kashmiri messes operate in Tbilisi and Batumi.",
        faqs: [
            {
                question: "Is MBBS in Georgia recognized by NMC and WHO?",
                answer: "Yes, Georgian medical universities are listed in WDOMS, WHO, and accredited by WFME and NMC."
            },
            {
                question: "What is the total duration of MBBS in Georgia?",
                answer: "The MD (MBBS) program in Georgia is 6 years (360 ECTS credits), which includes clinical clerkships and hospital practicals."
            }
        ]
    }
];
