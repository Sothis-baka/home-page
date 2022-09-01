const enum Language {
    C_sharp = 'C#',
    Java = 'Java',
    JavaScript = 'JavaScript',
    TypeScript = 'TypeScript',
    SQL = 'SQL',
    GraphQL = 'GraphQL'
}

const enum Framework {
    Asp_dot_net = 'ASP.NET',
    React = 'React.js',
    Vue = 'Vue.js',
    Express = 'Express.js',
    Apollo_server = 'Apollo Server'
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

type Tag = Language | Framework | Tool | DB;

export { type Tag, Language, Framework, Tool, DB };