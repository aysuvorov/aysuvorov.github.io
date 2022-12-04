"""
Заметки и графика к статье

"""
x <- seq(- 5, 5, by = 0.01)
y <- dt(x, df = 50)

# расчет критических значений
critical = qt(p=0.05/2, df=length(x), lower.tail=F)
critical_one_sided = qt(p=0.05, df=length(x), lower.tail=F)


"""
График 1. T - распределение
"""

plot(x, 
  y, 
  type = "l", 
  main = " ",
  xlab="t-статистики", ylab="Плотность вероятности",
  las=1,
  col = 'blue'
  )
lines(rep(critical,
  times=length(x)), 
  y, 
  lty='dotted', 
  col='darkgreen'
  )
lines(rep(-1*critical,
  times=length(x)), 
  y, 
  lty='dotted', 
  col='darkgreen'
  )

"""
График 2. Наблюдаемое значение с t-статистикой = 2.5
"""


plot(x, 
     y, 
     type = "l", 
     main = " ",
     xlab="t-статистики", ylab="Плотность вероятности",
     las=1,
     col = 'blue'
)
lines(rep(critical,
          times=length(x)), 
      y, 
      lty='dotted', 
      col='darkgreen'
)
lines(rep(-1*critical,
          times=length(x)), 
      y, 
      lty='dotted', 
      col='darkgreen'
)

lines(rep(2.5,
          times=length(x)), 
      y,  
      col='darkred'
)

# p-value
pt(2.5, df=length(x), lower.tail=F)*2



"""
График 3. Двусторонний тест
"""


plot(x, 
     y, 
     type = "l", 
     main = " ",
     xlab="t-статистики", ylab="Плотность вероятности",
     las=1,
     col = 'blue'
)
lines(rep(critical,
          times=length(x)), 
      y, 
      lty='dotted', 
      col='darkgreen'
)
lines(rep(-1*critical,
          times=length(x)), 
      y, 
      lty='dotted', 
      col='darkgreen'
)

lines(rep(2.5,
          times=length(x)), 
      y,  
      col='darkred'
)

lines(rep(-3,
          times=length(x)), 
      y,  
      col='darkred'
)

# p-value
pt(2.5, df=length(x), lower.tail=F)*2

"""
График 4. Односторонний тест
"""


plot(x, 
     y, 
     type = "l", 
     main = " ",
     xlab="t-статистики", ylab="Плотность вероятности",
     las=1,
     col = 'blue'
)
lines(rep(critical_one_sided,
      times=length(x)), 
      y, 
      lty='dotted', 
      col='darkgreen'
      )

lines(rep(2.5,
      times=length(x)), 
      y,  
      col='darkred'
      )


# p-value
pt(2.5, df=length(x), lower.tail=F)


"""
График 5. Мощность
"""
#z <- sort(rnorm(1000, 0, 3))#seq(-5, 5, by = 0.001) 
#q <- dnorm(z)
#critical_pwr = qnorm(p=0.05/2, lower.tail=T)

z <- seq(-5, 5, by = 0.01)
q <- dt(z, df = 50)

# расчет критических значений
critical_pwr = qt(p=0.05/2, df=length(z), lower.tail=F)

plot(z, 
     q, 
     type = "l", 
     main = " ",
     xlab="t-статистики", ylab="Плотность вероятности",
     las=1,
     col = 'blue',
     xlim=c(-4, 8),  #(-4, 6)  (-4, 8)
     ylim=c(0, 0.4)
      )
lines(z+5, 
     q, 
     type = "l", 
     main = " ",
     las=1,
     col = 'purple'
    )
lines(rep(critical_pwr,
          times=length(z)), 
      q, 
      lty='dotted', 
      col='darkgreen'
      )
lines(rep(-1*critical_pwr,
          times=length(z)), 
      q, 
      lty='dotted', 
      col='darkgreen'
      )

