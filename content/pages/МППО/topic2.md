---
layout: layouts/base.njk
title: "Тема 2: Unified Modelling Language (UML)"
---

{% contentblock %}

# Unified Modelling Language (UML)

{% endcontentblock %}

{% contentblock %}

{% files %}
    {% summarylink "МППО тема 2.txt" "topic2/МППО тема 2.txt" %}
{% endfiles %}

{% endcontentblock %}

{% contentblock %}

## UML: Назначение

- Анализ требований

- Проектирование

- Документирование

## UML: Особенности

- Язык графического описания

- Стандартные диаграммы

- Стандартный способ отображения элементов

{% endcontentblock %}

{% contentblock %}

## Типы диаграмм

- Структурные диаграммы

- Диаграммы поведения

- Диаграммы взаимодействия

{% endcontentblock %}

{% contentblock %}

## Структурные диаграммы

- Диаграмма классов

- Диаграмма компонентов

- Диаграмма композитной структуры

- Диаграмма развертывания

- Диаграмма объектов

- Диаграмма пакетов

{% endcontentblock %}

{% contentblock %}

## Диаграммы поведения

- Диаграмма деятельности

- Диаграмма состояний

- Диаграмма вариантов использования

{% endcontentblock %}

{% contentblock %}

## Диаграммы взаимодействия

- Диаграмма кооперации

- Диаграмма последовательности

{% endcontentblock %}

{% contentblock %}

## UML: преимущества

- Объектно-ориентирован

- Стандартное разностороннее описание системы

- Простые для понимания диаграммы

- Динамично развивается

- Интеграция в RAD-системы

## UML: Способы построения

- Визуальные
            
    - Rational Rose
    - MS Visio
    - Umbrello

- WYSIWYM
            
    - WebSequenceDiagrams.com
    - PlantUML

{% endcontentblock %}

{% contentblock %}

## MS Visio

## Визуальные: Преимущества

- Наглядное построение

- Полный контроль над отображением

- Интеграция с кодом (опционально)

## Визуальные: Недостатки

- Трудоемкое поддержание в актуальном состоянии

- Сложно отслеживать изменения

- Сложно организовать коллективную работу

- Пропириетарные форматы файлов

{% endcontentblock %}

{% contentblock %}

## PlantUML

- WYSIWYM

- Текстовое описание элементов UML-диаграмм

- Открытые инструменты разработки и генерации диаграмм

{% endcontentblock %}

{% contentblock %}

## PlantUML: Диаграмма последовательности

```
@startuml
Alice -> Bob: Authentication
    Request
Bob --> Alice: Authentication
Response
Alice -> Bob: Another request
Alice <-- Bob: Another response
@enduml
```

```
@startuml
Bob -&gt;x Alice
Bob -&gt; Alice
Bob -&gt;&gt; Alice
Bob -\ Alice
Bob \\- Alice
Bob //-- Alice
Bob -&gt;o Alice
Bob o\\-- Alice
Bob &lt;-&gt; Alice
Bob &lt;-&gt;o Alice
@enduml
```

{% endcontentblock %}

{% contentblock %}

## PlantUML: Диаграмма использования

```
@startuml
(Start) as Start
    (Use the application) as Using
User -&gt; Start
User --&gt; Using : A small label
:Main Admin: ---&gt; Using : This is\nyet
    another\nlabel
@enduml
```

{% endcontentblock %}

{% contentblock %}

## PlantUML: Диаграмма классов

```
@startuml
interface Product {
    + setName(String name)
    + getName()
}
class ConcreteProduct {
    - String name
    + setName(String name)
    + getName()
}
abstract class Creator {
    + Product factoryMethod()
}
class ConcreteCreator {
    + Product factoryMethod()
}
Product &lt;|- ConcreteProduct
    Creator &lt;|- ConcreteCreator
    ConcreteProduct &lt;.. ConcreteCreator
@enduml
```

{% endcontentblock %}

{% contentblock %}

## PlantUML: Диаграмма деятельности

```
@startuml
start
:Прослушать лекции;
:Выполнить лабораторные работы;
repeat
:Подготовиться к экзамену;
if (Есть допуск?) then
    :Прийти на экзамен;
endif
    repeat while (Как экзамен?) is (:()
stop
@enduml
```

{% endcontentblock %}

{% contentblock %}

## PlantUML: Диаграмма компонентов

```
@startuml
package "Some Group" {
    HTTP - [First Component]
    [Another Component]
    }
    node "Other Groups" {
    FTP - [Second Component]
    [First Component] --&gt; FTP
    }
    cloud {
    [Example 1]
    }
    database "MySql" {
    folder "This is my folder" {
    [Folder 3]
    }
    frame "Foo" {
    [Frame 4]
    }
    }
    [Another Component] --&gt; [Example 1]
    [Example 1] --&gt; [Folder 3]
    [Folder 3] --&gt; [Frame 4]
@enduml
```

{% endcontentblock %}

{% contentblock %}

## PlantUML: Диаграмма состояний

```
@startuml
[*] --&gt; NotShooting
    state "Not Shooting State" as NotShooting {
    state "Idle mode" as Idle
    state "Configuring mode" as Configuring
    [*] --&gt; Idle
    Idle --&gt; Configuring : EvConfig
    Configuring --&gt; Idle : EvConfig
    }
note right of NotShooting : This is a\nnote on a
    composite state
@enduml
```

{% endcontentblock %}

{% contentblock %}

## PlantUML: Диаграмма развертывания

```
@startuml
node "&lt;<device>&gt;\nWeb Server" as
    WebServer {
    artifact Website
    }
    node "&lt;<device>&gt;\n:DB Server" as
    DbServer {
    artifact "MySQL DB"
    }
    node "&lt;<device>&gt;\n:User Client" as
    UserClient {
    node "&lt;<device>&gt;\nBrowser" {
    artifact "HTML 5"
    }
    }
WebServer –- DbServer
WebServer -- UserClient : http:80
@enduml
</device></device></device></device>
```

{% endcontentblock %}

{% contentblock %}

## PlantUML: Диаграмма объектов

```
@startuml
object User {
    id = 123
    name = "John Doe"
    }
object AuthToken {
    salt = "w34a290sdfh2i8dsf"
    secret = "2237w3bed023usdf799"
    }
User "1" o-- "1" AuthToken
@enduml
```

{% endcontentblock %}

{% contentblock %}

## Что использовать?

- «Серебрянной пули» нет

- Отталкивайтесь от ваших потребностей

{% endcontentblock %}

