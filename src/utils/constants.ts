const myIntro: string = `
        Software Engineer.
        I'm a new MCS student at the University of California, Irvine.
        Previously, I was an undergrad majoring in Computer Information Science, minoring in Statistics and Psychology at the Ohio State University.
        I have internship experiences at The Trade Desk and Piesat Information Technology co. ltd, developing Web & mobile app on both frond-end and back-end.
        I'm always enthusiastic about exploring new areas and I do enjoy solving problems. I'm looking for opportunities to apply my knowledge and learn new skills.
    `;

const mySkills: Map<string, string[]> = new Map([
    [
        'Programming languages', [
    'C#', 'Java', 'JavaScript', 'TypeScript', 'Python', 'R', 'SQL', 'GraphQL'
    ]
    ],
    [
        'Frameworks',
        [
            'ASP.NET', 'ADO.NET', 'Java Spring', 'Express.js', 'React.js', 'Vue.js', 'Apollo GraphQL', 'D3.js'
        ]
    ],
    [
        'Production Tools',
        [
            'CI/CD', 'Docker', 'Kubernetes', 'KeyCloak', 'Vault', 'Storybook', 'React Testing Library', 'Electron', 'Expo'
        ]
    ]
]);

interface Education{
    institution: string,
    major: string,
    time: string
}

const myEducations: Education[] = [
    {
        institution: 'University of California, Irvine',
        major: 'Master of Computer Science',
        time: 'Sep 2022 - Dec 2023',
    },
    {
        institution: 'The Ohio State University',
        major: 'Bachelor of Science in Computer Information Science',
        time: 'Jan 2019 - Dec 2021',
    }
]

interface Experience{
    company: string,
    position: string,
    team: string,
    time: string
}

const myExperience: Experience[] = [
    {
        company: 'The Trade Desk',
        position: 'Software Engineer, Full time intern',
        team: 'Ad Serving Team',
        time: 'Jun 2022 - Aug 2022'
    },
    {
        company: 'Piesat Information Technology Co.,ltd',
        position: 'Software Engineer, Full time intern',
        team: 'Remote Sensing Application Team',
        time: 'Mar 2022 - May 2022'
    }
];

const myLinks = {
    github: 'https://github.com/Sothis-baka',
    linkedin: 'https://www.linkedin.com/in/yuanpei-li',
    email: 'mailto:archmagus02@gmail.com',
    discord: 'https://discord.com/users/633865420822282260'
}

const constants = {
    myIntro,
    mySkills,
    myEducations,
    myExperience,
    myLinks
}

export default constants;