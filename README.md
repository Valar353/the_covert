# React + redux + saga/thunk + router. 
Для имитации бека можно юзать https://mocklab.io/ или аналоги.
Два экрана, на одном список сотрудников с аватарками (gravatar или whatever), имя, фамилия, должность. 
При клике заходим на личную страничку, тут к предыдущим полям: адрес и 5 последних комментариев + форма добавления комментария. 
Форма: заголовок, текст, телефон. Заголовок не менее 5 символов, не более 80, текст не более 128, телефон позволяет ввести только телефон.
При вводе неверных данных кнопка disabled, при потере фокуса сообщения под элементами. 
Над всем этим всегда доступна карусель из аватарок сотрудников, по клику переходим на его страницу + генерация нового юзера в стейт (только на фроте). 
POST запрос на бек может не добавлять реально комментарий, тогда комментарий заносится дополнительно сам в стейт. 
Стек по вёрстке на усмотрение разработчика (но "сетка" на flex).