const enum Language {
    C_sharp = 'C#',
    Java = 'Java',
    JavaScript = 'JavaScript',
    TypeScript = 'TypeScript',
    SQL = 'SQL',
    GraphQL = 'GraphQL',
    Python = 'Python'
}

const enum Framework {
    Asp_dot_net = 'ASP.NET',
    React = 'React.js',
    Vue = 'Vue.js',
    Express = 'Express.js',
    Apollo_server = 'Apollo Server',
    Zmq = 'ZeroMQ'
}

const enum Tool {
    Docker = 'Docker',
    Kubernetes = 'Kubernetes',
    CI_CD = 'CI/CD',
    Aws_s3 = 'AWS s3',
    Watson = 'IBM Watson'
}

const enum DB {
    MongoDB = 'MongoDB',
    Vertica = 'Vertica'
}

const enum Platform {
    Android = 'Android',
    Raspberrypi = 'Raspberry Pi'
}

const enum LeetCode {
    leetcode = 'LeetCode',
    DP = 'DP',
    DFS = 'DFS',
    PQ = 'Priority Queue',
    Double_pointers = '2 pointers',
    Greedy = 'Greedy',
    Tricky = 'Tricky',
    Bit = 'Bit',
    Trie= 'Trie'
}

type Tag = Language | Framework | Tool | DB | Platform | LeetCode;

export { type Tag, Language, Framework, Tool, DB, Platform, LeetCode };