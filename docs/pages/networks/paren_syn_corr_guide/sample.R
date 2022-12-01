library(readxl)
library(ggplot2)
library(dplyr)
library(MASS)

set.seed(0)
x = rnorm(15, 10.0, 10.0)
y = rnorm(15, 30.0, 10.0)

df = cbind.data.frame(x,y)

dens = kde2d(x, y)

image(dens) 
contour(dens, add=T)

gr <- data.frame(with(dens, expand.grid(x,y)), as.vector(dens$z))
names(gr) <- c("xgr", "ygr", "zgr")
mod <- loess(zgr~xgr*ygr, data=gr)

summary(mod)

df$pointdens <- predict(mod, newdata=data.frame(xgr=df[,1], ygr=df[,2]))
print(df$pointdens)
sum(df$pointdens)

gr$preds <- predict(mod, newdata=data.frame(xgr=gr[,1], ygr=gr[,2]))
print(gr$preds)
sum(gr$preds)

df$pointdens <- df$pointdens/sum(gr$preds)

gr$preds <- gr$preds/sum(gr$preds)

center <- subset(gr, gr$preds == max(gr$preds,na.rm=T))






# +-----------------------------------------------------------------------------
kernel_parenclitic_kde <- function(df) {
  set.seed(1)
  df_train_0 <- df
  dens <- try(MASS::kde2d(df_train_0[,1],df_train_0[,2]))
  if(class(dens)  != "try-error") {
    gr <- data.frame(with(dens, expand.grid(x,y)), as.vector(dens$z))
    names(gr) <- c("xgr", "ygr", "zgr")
    mod <- loess(zgr~xgr*ygr, data=gr)
    
    df$pointdens <- predict(mod, newdata=data.frame(xgr=df[,1], ygr=df[,2]))
    
    gr$preds <- predict(mod, newdata=data.frame(xgr=gr[,1], ygr=gr[,2]))
    df$pointdens <- df$pointdens/sum(gr$preds)
    gr$preds <- gr$preds/sum(gr$preds)
    
    center <- subset(gr, gr$preds == max(gr$preds,na.rm=T))
    gr$dist_to_center <- sqrt((gr$xgr - as.numeric(center[1,1]))**2 + (gr$ygr - as.numeric(center[1,2]))**2)
    
    
    gr_countour <- subset(gr,gr$xgr == max(gr$xgr) | gr$ygr == max(gr$ygr) | gr$xgr == min(gr$xgr) | gr$ygr == min(gr$ygr))
    v <-  gr$preds
    df$pointdens3 <- unlist(lapply(df$pointdens, function(x) 1-sum(v[v<=x], na.rm=T)))
    
    df$pointdens2 <- apply(df,1,function(x) ifelse(is.na(x[6]) == T, distance_extension(x, gr_countour,center), as.numeric(x[6])))
  } else {
    df$pointdens2 = 0
  }
  return(df$pointdens2)
}

distance_extension <- function(x, gr_countour,center) {
  return(1)
}
# +-----------------------------------------------------------------------------

kernel_parenclitic_kde(df)
