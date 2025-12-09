export interface University {
    name: string;
    location: string;
    description: string;
    highlights: string[];
}

export interface Country {
    name: string;
    slug: string;
    code: string;
    flag: string;
    description: string;
    overview: string;
    duration: string;
    universities: University[];
    admissionRequirements: string[];
    feeRange: string;
    climate: string;
    whyChoose: string[];
    safety: string;
    food: string;
}

export const countries: Country[] = [
    {
        name: "Kyrgyzstan",
        slug: "kyrgyzstan",
        code: "KG",
        flag: "🇰🇬",
        description: "Affordable MBBS options with a friendly environment for international students.",
        overview: "Kyrgyzstan is known for its affordable MBBS programs, friendly environment for international students, and recognized medical universities. It offers a moderate cost of living, making it an attractive destination for students seeking quality education on a budget.",
        duration: "5 Years + 1 Year Internship",
        universities: [
            {
                name: "Osh State University",
                location: "Osh",
                description: "One of the largest and most prestigious universities in Kyrgyzstan, offering high-quality medical education.",
                highlights: ["Affordable", "Recognized", "English-medium"]
            },
            {
                name: "Osh International University",
                location: "Osh",
                description: "A modern university focused on international standards and providing a supportive learning environment.",
                highlights: ["Affordable", "Recognized", "English-medium"]
            },
            {
                name: "Jalalabad State University",
                location: "Jalal-Abad",
                description: "A public university with a strong emphasis on practical medical training and research.",
                highlights: ["Affordable", "Recognized", "English-medium"]
            },
            {
                name: "Jalalabad International University",
                location: "Jalal-Abad",
                description: "Dedicated to international students, offering a curriculum aligned with global medical standards.",
                highlights: ["Affordable", "Recognized", "English-medium"]
            }
        ],
        admissionRequirements: [
            "50% Marks in PCB in Class 12th",
            "NEET Qualified",
            "Minimum 17 years of age"
        ],
        feeRange: "15 - 20 Lakhs INR (Total)",
        climate: "Continental climate with cold winters and warm summers.",
        whyChoose: [
            "Affordable tuition fees",
            "English-medium programs",
            "Recognized by WHO, NMC, etc.",
            "Safe for students from Kashmir",
            "Many Kashmiri students already enrolled"
        ],
        safety: "Generally safe with a welcoming local population.",
        food: "Local cuisine is halal; Indian food is available in university messes."
    },
    {
        name: "Uzbekistan",
        slug: "uzbekistan",
        code: "UZ",
        flag: "🇺🇿",
        description: "Emerging top destination with modern infrastructure and cultural familiarity.",
        overview: "Uzbekistan is rapidly becoming a top destination for MBBS due to its modern infrastructure, safe and culturally familiar environment, and high-quality medical education.",
        duration: "5 Years + 1 Year Internship",
        universities: [
            {
                name: "Tashkent State Medical University",
                location: "Tashkent",
                description: "The leading medical institute in Central Asia, known for its rigorous academic standards.",
                highlights: ["Affordable", "Recognized", "English-medium"]
            },
            {
                name: "Fergana Medical Institute of Public Health",
                location: "Fergana",
                description: "A government university focusing on public health and modern medical practices.",
                highlights: ["Affordable", "Recognized", "English-medium"]
            },
            {
                name: "Namangan State University",
                location: "Namangan",
                description: "Offers a comprehensive medical curriculum with a focus on clinical skills.",
                highlights: ["Affordable", "Recognized", "English-medium"]
            },
            {
                name: "Samarkand State Medical University",
                location: "Samarkand",
                description: "One of the oldest and most respected medical universities in the region.",
                highlights: ["Affordable", "Recognized", "English-medium"]
            },
            {
                name: "Bukhara State Medical University",
                location: "Bukhara",
                description: "Renowned for its experienced faculty and strong international collaborations.",
                highlights: ["Affordable", "Recognized", "English-medium"]
            }
        ],
        admissionRequirements: [
            "50% Marks in PCB",
            "NEET Qualified"
        ],
        feeRange: "18 - 22 Lakhs INR (Total)",
        climate: "Continental climate, manageable for Indian students.",
        whyChoose: [
            "Affordable compared to Europe",
            "English-medium instruction",
            "Indian food availability",
            "Good climate for Kashmiri students",
            "Increasingly popular among Indian MBBS aspirants"
        ],
        safety: "Strict laws ensuring high safety for international students.",
        food: "Similar food habits to India; Indian mess easily available."
    },
    {
        name: "Kazakhstan",
        slug: "kazakhstan",
        code: "KZ",
        flag: "🇰🇿",
        description: "Strong medical infrastructure with WHO/NMC recognized universities.",
        overview: "Kazakhstan is known for its strong medical infrastructure, WHO/NMC-recognized universities, and a safe environment for international students.",
        duration: "5 Years + 1 Year Internship",
        universities: [
            {
                name: "Semey State University",
                location: "Semey",
                description: "Historical university with a rich tradition in medical education and research.",
                highlights: ["Affordable", "Recognized", "English-medium"]
            },
            {
                name: "West Kazakh State Medical University",
                location: "Aktobe",
                description: "A major medical center offering high-quality education and clinical training.",
                highlights: ["Affordable", "Recognized", "English-medium"]
            },
            {
                name: "Kazakh National Medical University",
                location: "Almaty",
                description: "The top-ranked medical university in Kazakhstan, located in the vibrant city of Almaty.",
                highlights: ["Affordable", "Recognized", "English-medium"]
            },
            {
                name: "South Kazakh Medical Academy",
                location: "Shymkent",
                description: "Known for its modern facilities and student-centric approach to education.",
                highlights: ["Affordable", "Recognized", "English-medium"]
            }
        ],
        admissionRequirements: [
            "50% in PCB",
            "NEET Qualification"
        ],
        feeRange: "20 - 25 Lakhs INR (Total)",
        climate: "Cold winters, warm summers.",
        whyChoose: [
            "Modern medical labs",
            "Good patient exposure",
            "Affordable fees",
            "Indian community present",
            "Climate manageable for Kashmiri students"
        ],
        safety: "Political stability and student-friendly environment.",
        food: "Central Asian cuisine; Indian food available."
    },
    {
        name: "Bangladesh",
        slug: "bangladesh",
        code: "BD",
        flag: "🇧🇩",
        description: "Culture and curriculum very similar to India, high FMGE success.",
        overview: "Bangladesh is the best choice for students who want an environment exactly like India. It boasts a very similar culture and lifestyle, with high MCI/NMC passing rates and strong clinical exposure.",
        duration: "5 Years + 1 Year Internship",
        universities: [
            {
                name: "Bangladesh Medical College",
                location: "Dhaka",
                description: "The first private medical college in Bangladesh, known for academic excellence.",
                highlights: ["Affordable", "Recognized", "English-medium"]
            },
            {
                name: "East West Medical College",
                location: "Dhaka",
                description: "A modern institution with a beautiful campus and attached hospital.",
                highlights: ["Affordable", "Recognized", "English-medium"]
            },
            {
                name: "Dhaka National Medical College",
                location: "Dhaka",
                description: "Located in the heart of Dhaka, offering vast clinical exposure.",
                highlights: ["Affordable", "Recognized", "English-medium"]
            }
        ],
        admissionRequirements: [
            "GPA 7.0 in SSC+HSC",
            "Biology must be 3.5 GPA"
        ],
        feeRange: "30 - 40 Lakhs INR (Total)",
        climate: "Tropical, exactly like West Bengal/India.",
        whyChoose: [
            "Indian-style hospital training",
            "Food, language, culture feel familiar",
            "High academic standards",
            "Affordable fee structure"
        ],
        safety: "Very safe and culturally familiar.",
        food: "Rice and Curry diet, same as India."
    },
    {
        name: "Georgia",
        slug: "georgia",
        code: "GE",
        flag: "🇬🇪",
        description: "European-style education in a safe and beautiful country.",
        overview: "Georgia offers European-style medical education in a safe and beautiful country. Its universities are known for strong English-medium medical programs.",
        duration: "6 Years",
        universities: [
            {
                name: "Batumi Shota Rustaveli State University",
                location: "Batumi",
                description: "Located in a coastal city, offering a blend of high-quality education and quality of life.",
                highlights: ["Affordable", "Recognized", "English-medium"]
            },
            {
                name: "Tbilisi State Medical University",
                location: "Tbilisi",
                description: "The leading medical university in Georgia with a rich history and global recognition.",
                highlights: ["Affordable", "Recognized", "English-medium"]
            },
            {
                name: "Akaki Tsereteli State University",
                location: "Kutaisi",
                description: "A major educational center offering diverse programs and modern facilities.",
                highlights: ["Affordable", "Recognized", "English-medium"]
            },
            {
                name: "David Tvildiani Medical University",
                location: "Tbilisi",
                description: "A prestigious private university focused solely on medical education.",
                highlights: ["Affordable", "Recognized", "English-medium"]
            }
        ],
        admissionRequirements: [
            "50% in PCB",
            "NEET Qualification",
            "Interview may be required"
        ],
        feeRange: "25 - 35 Lakhs INR (Total)",
        climate: "Moderate European climate.",
        whyChoose: [
            "Globally recognized universities",
            "High-quality campus life",
            "Modern labs and teaching methods",
            "English-medium programs"
        ],
        safety: "Ranked as one of the safest countries in the world.",
        food: "European and diverse food options available."
    },
    {
        name: "Iran",
        slug: "iran",
        code: "IR",
        flag: "🇮🇷",
        description: "Strong medical education tradition with affordable fees.",
        overview: "Iran has a strong medical education tradition and is recognized by international bodies. It is an affordable option for Kashmiri students offering high standards.",
        duration: "7 Years",
        universities: [
            {
                name: "Urmia University of Medical Sciences",
                location: "Urmia",
                description: "A prominent university known for its medical research and education.",
                highlights: ["Affordable", "Recognized", "English-medium"]
            },
            {
                name: "IAU Tehran",
                location: "Tehran",
                description: "The medical branch of the Islamic Azad University, offering vast resources.",
                highlights: ["Affordable", "Recognized", "English-medium"]
            },
            {
                name: "Shahid Beheshti University of Medical Sciences",
                location: "Tehran",
                description: "One of the top medical universities in Iran with a massive hospital network.",
                highlights: ["Affordable", "Recognized", "English-medium"]
            }
        ],
        admissionRequirements: [
            "50% in PCB",
            "NEET Qualification"
        ],
        feeRange: "15 - 20 Lakhs INR (Total)",
        climate: "Diverse climate with four distinct seasons.",
        whyChoose: [
            "Excellent academic standards",
            "Safe and culturally familiar environment",
            "Experienced faculty",
            "Affordable fees"
        ],
        safety: "Safe and hospitable environment for students.",
        food: "Halal food is the norm; very compatible with Kashmiri diet."
    }
];

