---
layout: layouts/base.njk
title: "Тема 3: Метод искусственного базиса"
---

{% contentblock %}

# Метод искусственного базиса

{% endcontentblock %}

{% contentblock %}

{% files %}
    {% summarylink "ММИО 3 тема.docx" "topic3/ММИО 3 тема.docx" %}
{% endfiles %}

{% endcontentblock %}

{% contentblock %}

## Сущность метода

Цель метода искусственного базиса – построение начального   базисного допустимого плана (БДП)

БДП (либо установить отсутствие БДП). 

ЗЛП задана в канонической форме:

{% image "../images/Topic4/topic4.image (1).png" %}

Этого всегда можно добиться, умножив уравнения на

ЗЛП (1):

{% image "../images/Topic4/topic4.image (2).png" %}

Вспомогательная задача к ЗЛП (1): 

ЗЛП (2)

{% image "../images/Topic4/topic4.image (3).png" %}

Вектор  составлен из естественных переменных ЗЛП (1.) и искусственных переменных, введенных в ЗЛП (2):

{% image "../images/Topic4/topic4.image (4).png" %}

Искусственные переменные не несут никакого экономического смысла. Они необходимы только для поиска начального БДП. 

Единичные векторы An+1, An+2, …, An+m  образуют искусственный базис системы ограничений ЗЛП (2). Они представляют собой единичную матрицу размера  m x m.   

В ЗЛП (2) мы имеем начальный БДП, в котором первые n координат равны нулю.

Пусть множество допустимых планов задачи (1) - D1, а множество допустимых планов задачи (2) -  D2.

{% endcontentblock %}

{% contentblock %}

## Теорема. О существовании плана ЗЛП.  

{% image "../images/Topic4/topic4.image (5).png" %}

Замечание. Вспомогательная задача (2) всегда имеет оптимальный план.

{% endcontentblock %}

{% contentblock %}

## Пример

Рассмотрим ЗЛП:

{% image "../images/Topic4/topic4.image (6).png" %}

Приведем данную ЗЛП к каноническому виду:

{% image "../images/Topic4/topic4.image (7).png" %}

Единичного базиса нет, поэтому построим вспомогательную задачу, предварительно введя две искусственные переменные х5 ≥ 0 и  х6 ≥ 0.

{% image "../images/Topic4/topic4.image (8).png" %}

<table>
    <tr>
        <th rowspan="2" colspan="3"></th>
        <th>-2</th>
        <th>1</th>
        <th>0</th>
        <th>0</th>
        <th>х</th>
        <th>х</th>
    </tr>
    <tr>
        <th>0</th>
        <th>0</th>
        <th>0</th>
        <th>0</th>
        <th>-1</th>
        <th>-1</th>
    </tr>
    <tr>
        <td>cs</td>
        <td>Базис</td>
        <td>A0=b</td>
        <td>A1</td>
        <td>A2</td>
        <td>A3</td>
        <td>A4</td>
        <td>A5</td>
        <td>A6</td>
    </tr>
    <tr>
        <td>-1<br><br>-1</td>
        <td>A5<br><br>А6</td>
        <td>14<br><br>8</td>
        <td>1<br><br>1</td>
        <td>1<br><br>-1</td>
        <td>-1<br><br>0</td>
        <td>0<br><br>-1</td>
        <td>1<br><br>0</td>
        <td>0<br><br>1</td>
    </tr>
    <tr>
        <td></td>
        <td>/Dj</td>
        <td>-22</td>
        <td>-2</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
    </tr>
    <tr>
        <td>-1<br><br>0</td>
        <td>A5<br><br>A1</td>
        <td>6<br><br>8</td>
        <td>0<br><br>1</td>
        <td>2<br><br>-1</td>
        <td>-1<br><br>0</td>
        <td>1<br><br>-1</td>
        <td>1<br><br>0</td>
        <td>-1<br><br>1</td>
    </tr>
    <tr>
        <td></td>
        <td>/Dj</td>
        <td>-6</td>
        <td>0</td>
        <td>-2</td>
        <td>1</td>
        <td>-1</td>
        <td>0</td>
        <td>2</td>
    </tr>
    <tr>
        <td>0<br><br>0</td>
        <td>A2<br><br>A1</td>
        <td>3<br><br>11</td>
        <td>0<br><br>1</td>
        <td>1<br><br>0</td>
        <td>-0,5<br><br>-0,5</td>
        <td>0,5<br><br>-0,5</td>
        <td>0,5<br><br>0,5</td>
        <td>-0,5<br><br>0,5</td>
    </tr>
    <tr>
        <td></td>
        <td>/Dj</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
    </tr>
    <tr>
        <td>0<br><br>0</td>
        <td>A2<br><br>A1</td>
        <td>3<br><br>11</td>
        <td>0<br><br>1</td>
        <td>1<br><br>0</td>
        <td>-0,5<br><br>-0,5</td>
        <td>0,5<br><br>-0,5</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td>/Dj</td>
        <td>-19</td>
        <td>0</td>
        <td>0</td>
        <td>0,5</td>
        <td>1,5</td>
        <td>0</td>
        <td>1</td>
    </tr>
</table>

Решив данную вспомогательную задачу симплекс-методом, мы найдем ее оптимальный план и значение целевой функции на этом плане:

{% image "../images/Topic4/topic4.image (9).png" %}

Оптимальный план вспомогательной задачи есть начальный БДП основной задачи. После чего необходимо приступить к ее решению также симплекс-методом.

Оптимальный план основной задачи:

{% image "../images/Topic4/topic4.image (10).png" %}

{% endcontentblock %}

{% contentblock %}

## Признак неограниченности целевой функции 

ЗЛП в канонической форме:

{% image "../images/Topic4/topic4.image (11).png" %}

В уравнении (2)  хσ0  представляет часть исходного вектора х0 , из которого удалены нулевые (свободные) компоненты. Для плана х0  можно построить симплекс-таблицу, причем предположим, что среди двойственных оценок имеются отрицательные , т.е. план не оптимальный.

{% endcontentblock %}

{% contentblock %}

## Теорема. О неразрешимости ЗЛП.

{% image "../images/Topic4/topic4.image (12).png" %}

Пример:

{% image "../images/Topic4/topic4.image (13).png" %}

Единичный базис состоит из векторов А3, А4, А5. Вырожденный БДП х0 = (0; 0; 1; 0; 3).

Решение ЗЛП 

<table>
    <tr>
        <th rowspan="2">cs</th>
        <th rowspan="2">Базис</th>
        <th rowspan="2">A0=b</th>
        <th>1</th>
        <th>1</th>
        <th>0</th>
        <th>0</th>
        <th>0</th>
    </tr>
    <tr>
        <th>A1</th>
        <th>A2</th>
        <th>A3</th>
        <th>A4</th>
        <th>A5</th>
    </tr>
    <tr>
        <td>0</td>
        <td>A3</td>
        <td>1</td>
        <td>-1↓</td>
        <td>1</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
    </tr>
    <tr>
        <td>0</td>
        <td>←A4</td>
        <td>0</td>
        <td><span class="circle-text">1</span></td>
        <td>-2</td>
        <td>0</td>
        <td>1</td>
        <td>0</td>
    </tr>
    <tr>
        <td>0</td>
        <td>A5</td>
        <td>3</td>
        <td>-1</td>
        <td>2</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
    </tr>
    <tr>
        <td></td>
        <td>С(х)/Dj</td>
        <td>0</td>
        <td>-1*</td>
        <td>-1</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
    </tr>
    <tr>
        <td>0</td>
        <td>A3</td>
        <td>1</td>
        <td>0</td>
        <td>-1</td>
        <td>1</td>
        <td>1</td>
        <td>0</td>
    </tr>
    <tr>
        <td>1</td>
        <td>A1</td>
        <td>0</td>
        <td>1</td>
        <td>-2</td>
        <td>0</td>
        <td>1</td>
        <td>0</td>
    </tr>
    <tr>
        <td>0</td>
        <td>A5</td>
        <td>3</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
    </tr>
    <tr>
        <td></td>
        <td>С(х)/Dj</td>
        <td>0</td>
        <td>0</td>
        <td>-3</td>
        <td>0</td>
        <td>1</td>
        <td>0</td>
    </tr>
</table>

На второй итерации 2 = -3  0. Вводим в базис вектор А2, однако координаты этого вектора . На основании только что доказанной теоремы можно сделать заключение, что данная ЗЛП неразрешима, она не имеет оптимальных планов, а ее целевая функция С(х) → +∞ на множестве допустимых планов. 

{% endcontentblock %}