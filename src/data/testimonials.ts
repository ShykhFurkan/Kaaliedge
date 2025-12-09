export interface Testimonial {
    name: string;
    university: string;
    country: string;
    year: string;
    message: string;
    image?: string; // Placeholder or omit for now
}

export const testimonials: Testimonial[] = [
    {
        name: "Aadil Bhat",
        university: "Kazan Federal University",
        country: "Russia",
        year: "2023",
        message: "Kaali Edge made the entire process so smooth. Dr. Mustansir guided me personally and helped me choose the best university within my budget. The team even helped me with the visa and travel arrangements.",
    },
    {
        name: "Sana Mir",
        university: "Samarkand State Medical University",
        country: "Uzbekistan",
        year: "2022",
        message: "I was very confused about which country to choose. The counseling session at Kaali Edge cleared all my doubts. They are very transparent about the fees and facilities.",
    },
    {
        name: "Umar Farooq",
        university: "Dhaka National Medical College",
        country: "Bangladesh",
        year: "2021",
        message: "Studying in Bangladesh feels like home. Thanks to Kaali Edge for suggesting this option. The documentation support was excellent.",
    },
    {
        name: "Zainab Rashid",
        university: "Osh State University",
        country: "Kyrgyzstan",
        year: "2023",
        message: "The local support provided by Kaali Edge after reaching Kyrgyzstan was a lifesaver. They helped us settle in the hostel and get our SIM cards. Highly recommended!",
    },
    {
        name: "Danish Wani",
        university: "Astana Medical University",
        country: "Kazakhstan",
        year: "2022",
        message: "Professional and honest. They delivered exactly what they promised. No hidden charges at all.",
    },
    {
        name: "Iqra Nabi",
        university: "Tbilisi State Medical University",
        country: "Georgia",
        year: "2023",
        message: "The best consultancy in Kashmir without a doubt. From admission letter to visa stamping, everything was handled perfectly by the team.",
    },
];
