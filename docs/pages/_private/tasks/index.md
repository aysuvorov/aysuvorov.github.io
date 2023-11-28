
<script type="text/javascript" id="MathJax-script" async
  src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
</script>

<script>
MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']]
  }
};
</script>
<script id="MathJax-script" async
  src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js">
</script>

<img src="https://i.pinimg.com/564x/d6/0d/56/d60d56d0590e41ae363f42da31127a50.jpg" style="display: block; margin: 0 auto"/>

## Задания

- [Задания](#задания)
  - [Задание 1](#задание-1)

### Задание 1

Напишите функцию, которая в качестве аргументов:

- берет 2 массива значений - реальные классы и предсказанные,
- значение параметра `random seed`, по умолчанию оно будет 0,
- тип выходной таблицы - таблица  `pandas` или `markdown`, по умолчанию `markdown`

(Что такое random seed можно почитать [здесь](https://en.wikipedia.org/wiki/Random_seed))

Для предсказанного массива нужно рассчитать:

- AUC
- Sensitivity
- Specificity
- NPV
- PPV
- Accuracy
- Balanced accuracy

- вишенка на торте - рассчитать также 95% ДИ вышеуказанных статистик.
Используйте для этого бутстреп с соответствующим `random seed`.

Вывод функции - в виде таблицы `pandas` или `markdown`

Таблица должна быть следующего вида:

| Параметр | Статистика | 95% ДИ      |
|------------------|----------------------|---------------|
| AUC              | 0.68                 | (0.45 - 0.84) |
| ...                 |      ...                |    ...           |

**Массивы:**

```
real_values = [0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0]
predicted_values = [0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0]
```
