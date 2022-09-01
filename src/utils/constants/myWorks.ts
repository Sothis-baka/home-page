import { Work } from '../types/Work';
import { DB, Framework, Language, Tool } from '../types/Tag';

const myWorks: Work[] = [
    {
        name: 'Pre Pink Pony',
        description: 'An agile service running in AWS cluster to query data from Vertica, process and display to the users.',
        tags: [Language.C_sharp, Language.TypeScript, Language.SQL, Framework.Asp_dot_net, Framework.React, Tool.Docker, Tool.Kubernetes, Tool.CI_CD, DB.Vertica],
    },
    {
        name: 'Force Bidding Integration',
        description: 'An Ops Platform Integration to trigger RCR command, read logs from AWS s3.',
        tags: [Language.C_sharp, Language.JavaScript, Framework.Asp_dot_net, Tool.Aws_s3]
    },
    {
        name: 'Mobile Ad Inspector',
        description: 'An Android app to display Vast creative with custom players.',
        tags: [Language.Java]
    },
    {
        name: "Sothis's Home Page",
        description: 'Here it is !',
        tags: [Language.TypeScript, Framework.React, Tool.CI_CD],
        source_code: 'https://github.com/Sothis-baka/home-page',
        deployment: 'https://sothis-baka.github.io'
    },
    {
        name: "Share Here",
        description: 'Full-stack social web app.',
        tags: [Language.JavaScript, Language.GraphQL, Framework.React, Framework.Apollo_server, DB.MongoDB],
        source_code: 'https://github.com/Sothis-baka/Share_here_client',
        deployment: 'https://share-here.herokuapp.com'
    },
    {
        name: 'Damage Mitigation Application',
        description: 'Collaborated on frontend development of this project.',
        tags: [Language.JavaScript, Framework.Vue]
    },
    {
        name: 'Java Coding Helper',
        description: 'An Intellij Idea plugin to turn your words to Java code.',
        tags: [Language.Java, Language.JavaScript, Framework.Express, Tool.Watson],
        source_code: 'https://github.com/Sothis-baka/JavaCodingHelper',
        deployment: 'https://plugins.jetbrains.com/plugin/17271-javacodinghelper/versions/stable/128734'
    },
    {
        name: 'Spoken IDE',
        description: 'An web app to turn your voice to Java code (online compiler).',
        tags: [Language.JavaScript, Framework.React, Framework.Express, Tool.Watson],
        source_code: 'https://github.com/Sothis-baka/SpokenIDE',
        deployment: 'https://aqueous-refuge-42292.herokuapp.com'
    },
    {
        name: 'Danmuji',
        description: 'Bilibili live chat box, display the information of audiences interaction and gift.',
        tags: [Language.JavaScript, Framework.React],
        source_code: 'https://github.com/Sothis-baka/danmuji'
    },
    {
        name: 'Sudoku',
        description: 'Sudoku game.',
        tags: [Language.JavaScript, Framework.React],
        source_code: 'https://github.com/Sothis-baka/sudoku',
        deployment: 'https://sudoku-rework.herokuapp.com'
    },
    {
        name: 'Clockkkk',
        description: 'A simple clock app.',
        tags: [Language.JavaScript, Framework.React],
        source_code: 'https://github.com/Sothis-baka/Clockkkk',
        deployment: 'https://clockkkkk.herokuapp.com'
    },
    {
        name: 'My Solutions',
        description: 'LeetCode :)',
        tags: [Language.Java],
        source_code: 'https://github.com/Sothis-baka/my_solutions'
    }
];

export default myWorks;