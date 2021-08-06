// LexicalEnviroment - спец. внутренний объект, который имеет каждый блок кода:
//    1. Environment Record - объект для хранения переменных.
//    2. Link - ссылка на внешнее лексическое окружение.

// Замыкание (closure) - умение функции видеть и запоминать свои внешние переменные, и получать к ним доступ.
// Все функции в javascript - замыкание, кроме new Function (создает не замыкания).