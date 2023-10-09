# Домашнее задание к лекции «Object, Reflection и Proxy»
Важно: каждая задача выполняется в виде отдельного проекта с собственным GitHub репозиторием.

Важно: код должен проходить ESLint без ошибок

Важно: тесты должны обеспечивать 100% покрытие тестируемых функций по строкам

Важно: решения должны быть построены на базе шаблона Webpack.

В личном кабинете на сайте netology.ru в поле комментария к домашней работе вставьте ссылки на ваш GitHub-проекты.

# for ... in
# Легенда
В рамках разработки игры периодически нужно печатать таблички, отображающие свойства объектов. Вам нужно реализовать функцию, которая для переданного объекта возвращает массив его свойств со значениями, отсортированный по свойствам (порядок сортировки свойств - второй аргумент).

Описание
Дан объект, например:

const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40}
Дан порядок сортировки свойств:

["name", "level"]
Пример вызова вашей функции:

orderByProps(obj, ["name", "level"])
После обработки вашей функцией:

[
  {key: "name", value: "мечник"}, // порядок взят из массива с ключами
  {key: "level", value: 2}, // порядок взят из массива с ключами
  {key: "attack", value: 80}, // порядок по алфавиту (т.к. в массиве с ключами нет значения "attack")
  {key: "defence", value: 40}, // порядок по алфавиту (т.к. в массиве с ключами нет значения "defence")
  {key: "health", value: 10} // порядок по алфавиту (т.к. в массиве с ключами нет значения "health")
]
Т.е. сначала идёт сортировка по тому, как указано в массиве сортировки, для тех ключей, для которых в массиве сортировки нет записи, сортировка идёт в алфавитном порядке.

Используйте возможности for-in для перебора свойств объекта. Не забудьте написать unit-тесты, которые обеспечивают 100% покрытие функции, которую вы тестируете.