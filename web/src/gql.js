import gql from 'graphql-tag';

const getTodosAndLabels = gql`
query GetTodos{
    todos {
        id
        title
        notes {
            text
            isCompleted
        }
        labels {
            id
            name
        }
        color
        isCheckboxMode
    }
    labels {
        id
        name
    }
    user {
        name
        email
        listMode
        darkMode
    }
}
`

const createLabel = gql`
mutation CreateLabel ($name: String!) {
    createLabel (name: $name) {
        id
    } 
}
`

const createTodo = gql`
mutation CreateTodo ($title: String!, $notes: [String!]!, $labels: [ID]!, $color: String, $isCheckboxMode: Boolean) {
    createTodo (title: $title, notes: $notes, labels: $labels, color: $color, isCheckboxMode: $isCheckboxMode) {
        id
    } 
}
`

const deleteTodo = gql`
mutation DeleteTodo ($id: ID!) {
    deleteTodo (id: $id) {
        id
    } 
}
`

const copyTodo = gql`
mutation CopyTodo ($id: ID!) {
    copyTodo (sourceId: $id) {
        id
    } 
}
`

const updateUser = gql`
mutation UpdateUser ($listMode: Boolean, $darkMode: Boolean) {
    updateUser (listMode: $listMode, darkMode: $darkMode) {
        listMode
        darkMode
    } 
}
`

const subscribeTodos = gql`
subscription SubcribeTodos{
    todoStream {
        action
        todo {
        id
        title
        notes {
            text
            isCompleted
        }
        labels {
            id
            name
        }
        color
        isCheckboxMode
        }
    }
}
`

const subscribeLabels = gql`
subscription SubcribeLabels{
    labelStream {
        action
        label {
            id
            name
        }
    }
}
`

export {
    getTodosAndLabels,
    createLabel,
    createTodo,
    deleteTodo,
    copyTodo,
    updateUser,
    subscribeTodos,
    subscribeLabels
}