const fs = require('fs')

const folders = [
    'Numpy Arrays',
    'Pandas Basics',
    'Generators',
    'List Comprehensions',
    'Lambda functions',
    'Multiple Function Arguments',
    'Regular Expressions',
    'Exception Handling',
    'Sets',
    'Serialization',
    'Partial functions',
    'Code Introspection',
    'Closures',
    'Decorators',
    'Map, Filter, Reduce',
    'Contributing Tutorials',
]

function create() {
    for (let i = 0; i < folders.length; ++i) {
        const name = folders[i].toLowerCase().replaceAll(',', '').replace(' ', '-')
        if (!fs.existsSync(name)) {
            fs.mkdirSync(name)
            fs.writeFileSync(`./${name}/main.py`, '')
        }
    }
}

create()
