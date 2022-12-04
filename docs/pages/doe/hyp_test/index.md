# Hypothesis testing concepts

- [Hypothesis testing concepts](#hypothesis-testing-concepts)
  - [Concept of planned studies](#concept-of-planned-studies)
  - [Research and statistical hypotheses](#research-and-statistical-hypotheses)
  - [Statistical tests](#statistical-tests)
  - [Effect size](#effect-size)
    - [How is the effect size estimated?](#how-is-the-effect-size-estimated)
  - [Effect size](#effect-size-1)
    - [How is the effect size estimated?](#how-is-the-effect-size-estimated-1)
  - [Forming research hypotheses and the concept of effect size](#forming-research-hypotheses-and-the-concept-of-effect-size)
  - [One-tailed and two-tailed statistical tests](#one-tailed-and-two-tailed-statistical-tests)
    - [Bilateral tests](#bilateral-tests)
    - [One-way tests](#one-way-tests)
  - [Type I and II errors](#type-i-and-ii-errors)
  - [The size of the required sample in the concept of testing statistical hypotheses](#the-size-of-the-required-sample-in-the-concept-of-testing-statistical-hypotheses)


## Concept of planned studies

In medical science, one way to conduct experiments is the concept of planned research.

With this approach, clear rules for conducting research are set with the designation of a number of strict framework conditions:

- the purpose of the study with a clearly defined *research question*;

- clearly defined *tasks*, with the help of which the goal will be achieved;

- one or more initial research hypotheses requiring confirmation within the framework of the research question (which is the research question);

- design aimed at maximizing the purpose of the study and reducing the likelihood of errors, while minimizing the likely bias;

- the design should be aimed at obtaining reliable and reproducible results;

- clear criteria for inclusion and non-inclusion in research;

- a step-by-step description of the analysis methods aimed at obtaining conclusions on each research task and on the research question posed.

Thus, when planning a study, some ideal state is modeled, which allows researchers to answer the research question and achieve the goal. The planned studies allow for relatively compact studies in terms of the number of participants and in terms of time.

Observational exploratory studies can be a somewhat opposite concept, however, they also have a goal, objectives and a study population (usually quite wide). The main difference from the planned studies is not the confirmation of the initial research hypotheses about the interaction of factors, but the search for such interactions.

Behind the planned research there is always its main question that needs to be answered. In observational studies, the focus is on finding any interactions within the studied population that are important from the point of view of the purpose of the study; the main research question requiring confirmation is usually absent.

This article focuses on planned research to understand the process of building a link between a research question and its answer in terms of research methodology.

## Research and statistical hypotheses

The beginning of any research and experiment is a *hypothesis* or scientific assumption. Researchers put forward such assumptions and try to prove and/or disprove them. for example, that the poor ecology of the region has some impact on the health of the inhabitants. Or that smoking can increase the risk of cardiovascular disease. Such assumptions are called *research hypotheses*.

They are contrasted with *statistical hypotheses*, which are reformulations of research hypotheses in such a way that they can be considered using statistical methods and the concept of experimental design.

A *statistical hypothesis* is a judgment about the parameters that describe a statistical population (but not a sample of it). In turn, *statistical population* is a group of homogeneous elements of interest in the present study or experiment.

The *Null Hypothesis* states that the observed effects, phenomena, or interactions occur due to chance. The null hypothesis is traditionally denoted as $H_0$. *Alternative hypothesis*, on the contrary, states that the observed phenomena are not random. The alternative hypothesis is traditionally denoted as $H_1$ or $H_A$.

For example, in a small study, the differences between 2 mean values ($\mu_1$ and $\mu_2$) are evaluated by some real (numerical) sign - by the level of total plasma cholesterol. The research hypothesis may be that the groups both differ and do not differ.

The null hypothesis, on the other hand, would state that there are no true differences between the means, and the observed differences are random:

- $H_0: \mu_1 = \mu_2$

An alternative hypothesis is the claim that true differences between means exist:

- $H_1: \mu_1 \neq \mu_2$

The null and alternative hypotheses are *mutually exclusive*, i.e. if $H_0$ is true, then $H_1$ is false and vice versa. Thus, in order to confirm the alternative hypothesis, we need to reject the null one.

## Statistical tests

Statistical test - a method of statistical evidence (or statistical inference) about whether it is possible to reject the null hypothesis. If $H_0$ is rejected, a statistical conclusion is drawn that the alternative hypothesis $H_1$ is true.

Each statistical test is a mathematical function that calculates the so-called. *test statistics*. This statistic shows how closely an observed value matches the expected distribution of values, given that the null hypothesis is true. The larger the statistics, the greater the discrepancy between the observed and expected distributions.

The set of test statistics of the test obeys a certain distribution law. For example, the t-test calculates t-statistics that follow a t-distribution. In order to reject the null hypothesis, a certain *threshold among the distribution of test statistics* is needed. This value of the threshold test statistic is called *critical value*, and the corresponding probability in the distribution of test statistic is the *significance level*.

The significance level, which is denoted as $\alpha$, is the probability that, with such a test statistic, the null hypothesis will be rejected if it is true. That is, the probability that a true null hypothesis will be erroneously rejected. This probability is also called *type I error* (we will talk about it a little later). The value of $\alpha$ and the corresponding critical value of the statistical test are initially declared by researchers in order to determine in advance the probability of erroneous rejection of the null hypothesis. The lower the significance level, the lower the probability of rejecting the null hypothesis if it is true.

After calculating the result of a statistical test in the form of some observable test statistic, the researchers obtain the corresponding *probability of obtaining the same or more extreme test results (compared to the observed ones), if the null hypothesis is true*. This probability is called $p-value\ (p)$. Small p-values indicate that, given the null hypothesis is true, the probability of obtaining the same or more extreme results is extremely small. Therefore, there is a high probability that the null hypothesis is false.

If $p \le \alpha$, the test statistic equals or exceeds the critical value, and the result itself is considered statistically significant.

**Picture 1**. T-distribution (for 50 degrees of freedom)

![ ](https://github.com/aysuvorov/clinstats/blob/master/docs/pages/stat_testing/images/%D0%93%D1%80%D0%B0%D1%84%D0%B8%D0 %BA%201.png?raw=true)

**- critical values 1.962337 and -1.962337 are shown on the chart, corresponding to the two-sided significance level $\alpha$ = 0.05.*

**Picture 2**. T-statistic = 2.5, exceeding the critical value of 1.962337

![ ](https://github.com/aysuvorov/clinstats/blob/master/docs/pages/stat_testing/images/%D0%93%D1%80%D0%B0%D1%84%D0%B8%D0 %BA%202.png?raw=true)

**- the red line on the graph shows t-statistic = 2.5, exceeding the critical value of 1.962337, $p-value$ = 0.0126 in a two-tailed t-test*

## Effect size

Research hypotheses are most often associated with the search for differences or associations between certain indicators.

For example, one study compared the proportions of a certain therapeutic effect in two groups, and they were 10% and 80%, respectively. We see that the shares differ, and quite significantly, the difference is 70%. In another study, similar proportions were 45% and 55%. We again see that the shares differ, but not so much, the difference is only 10%. In another study, the effectiveness of therapy in two groups was 75% and 80%. The shares differ, but the difference is very small - only 5%.

Another example is related to new antihypertensive drugs. The new drug X reduces systolic blood pressure (SBP) by an average of 15 mm Hg. Art. Drug Y also reduces SBP, but by an average of 8 mmHg. Finally, drug Z reduces SBP, but only by an average of 1 mm Hg. When using traditional antihypertensive therapy, the average decrease in blood pressure was 1 mm Hg.

In all examples, we see that there is a certain effect, but it is *different*, somewhere more, somewhere less.

*Effect size* is a fairly broad statistical concept that refers to a statistic or indicator showing the magnitude of differences or associations between distributions. The size of the effect in medicine is extremely important, because. it is tied not only to statistics, but also to the clinical significance of the results observed in the study. For example, we use the mean reduction in SBP as the effect size. An average decrease in SBP of 1 mm Hg is most likely not clinically significant - for a patient, drug Z will not be better than traditional therapy, thus, from a therapeutic standpoint, its prescription is meaningless. Too large effect size (drug X) may be associated with the development of complications against the background of a strong hypotensive response. Drug Y is probably the best choice among new drugs - it has sufficient, but at the same time rather modest antihypertensive effect.

It is extremely important to understand that when testing statistical hypotheses, we are trying to capture a certain effect size statistically. The true difference between the means is rarely 0. The difference can be small and clinically insignificant, either way. On the other hand, when testing statistical hypotheses, it is necessary to clearly introduce the criterion for the presence or absence (or lack of clinical meaning) of an effect.

For example, in the example of antihypertensive drugs, it is possible to define an effect size as absent for an average 2 mmHg decrease in SBP. Art. and less, moderate - with an average decrease of 3-10 mm Hg. Art., strong - with an average decrease in SBP above 10 mm Hg. Art. As a testable research hypothesis, we want to find out whether the average reduction in SBP with drugs X, Y, Z achieves at least a moderate effect size.

### How is the effect size estimated?

The psychologist and statistician Jacob Cohen made a huge contribution to the concept of effect size. Today, there are a large number of statistics that allow you to estimate the size of the effect, in fact, when testing any hypotheses.

There are standardized methods for estimating effect size and non-standardized methods. Standardized methods allow evaluating the effect for variables with different dimensions (for example, estimating the correlation coefficient for variables measured in different units), for assessing the aggregate results of different studies (meta-analysis and meta-regression), when comparing the results of studies using different metrics of variables (for example , using g/l in one study and mmol/l in another).

The following methods for estimating effect size are also distinguished:

- effect size, which estimates the association between distributions of numerical variables, or how much the distribution of one variable contributes to the distribution of another variable (correlation coefficient, coefficient of determination, etc.)

- effect size, which evaluates the difference between statistics (Cohen\`s d, Glass\` $\Delta$, risk difference, etc.)

## Effect size

Research hypotheses are most often associated with the search for differences or associations between certain indicators.

For example, one study compared the proportions of a certain therapeutic effect in two groups, and they were 10% and 80%, respectively. We see that the shares differ, and quite significantly, the difference is 70%. In another study, similar proportions were 45% and 55%. We again see that the shares differ, but not so much, the difference is only 10%. In another study, the effectiveness of therapy in two groups was 75% and 80%. The shares differ, but the difference is very small - only 5%.

Another example is related to new antihypertensive drugs. The new drug X reduces systolic blood pressure (SBP) by an average of 15 mm Hg. Art. Drug Y also reduces SBP, but by an average of 8 mmHg. Finally, drug Z reduces SBP, but only by an average of 1 mm Hg. When using traditional antihypertensive therapy, the average decrease in blood pressure was 1 mm Hg.

In all examples, we see that there is a certain effect, but it is *different*, somewhere more, somewhere less.

*Effect size* is a fairly broad statistical concept that refers to a statistic or indicator showing the magnitude of differences or associations between distributions. The size of the effect in medicine is extremely important, because. it is tied not only to statistics, but also to the clinical significance of the results observed in the study. For example, we use the mean reduction in SBP as the effect size. An average decrease in SBP of 1 mm Hg is most likely not clinically significant - for a patient, drug Z will not be better than traditional therapy, thus, from a therapeutic standpoint, its prescription is meaningless. Too large effect size (drug X) may be associated with the development of complications against the background of a strong hypotensive response. Drug Y is probably the best choice among new drugs - it has sufficient, but at the same time rather modest antihypertensive effect.

It is extremely important to understand that when testing statistical hypotheses, we are trying to capture a certain effect size statistically. The true difference between the means is rarely 0. The difference can be small and clinically insignificant, either way. On the other hand, when testing statistical hypotheses, it is necessary to clearly introduce the criterion for the presence or absence (or lack of clinical meaning) of an effect.

For example, in the example of antihypertensive drugs, it is possible to define an effect size as absent for an average 2 mmHg decrease in SBP. Art. and less, moderate - with an average decrease of 3-10 mm Hg. Art., strong - with an average decrease in SBP above 10 mm Hg. Art. As a testable research hypothesis, we want to find out whether the average reduction in SBP with drugs X, Y, Z achieves at least a moderate effect size.

### How is the effect size estimated?

The psychologist and statistician Jacob Cohen made a huge contribution to the concept of effect size. Today, there are a large number of statistics that allow you to estimate the size of the effect, in fact, when testing any hypotheses.

There are standardized methods for estimating effect size and non-standardized methods. Standardized methods allow evaluating the effect for variables with different dimensions (for example, estimating the correlation coefficient for variables measured in different units), for assessing the aggregate results of different studies (meta-analysis and meta-regression), when comparing the results of studies using different metrics of variables (for example , using g/l in one study and mmol/l in another).

The following methods for estimating effect size are also distinguished:

- effect size, which estimates the association between distributions of numerical variables, or how much the distribution of one variable contributes to the distribution of another variable (correlation coefficient, coefficient of determination, etc.)

- effect size, which evaluates the difference between statistics (Cohen\`s d, Glass\` $\Delta$, risk difference, etc.)

|             | Deseased | Healthy | Total             |
| ----------- | -------- | ------- | ----------------- |
| Not exposed | $D_N$    | $H_N$   | $D_N + H_N = T_N$ |
| Exposed     | $D_E$    | $H_E$   | $D_E + H_E = T_E$ |

## Forming research hypotheses and the concept of effect size

The effect size is given a key role in the formation of research and statistical hypotheses.

Initially, researchers raise the question of whether the effect they observe is random? For example, do levels of total cholesterol actually differ between treatment with a new drug and the control group? The observed differences may be due to chance. In order to check whether the effect actually exists, the so-called. exploratory and pilot studies, the main purpose of which is to determine the existence of an effect in principle. Such studies are called *hypothesis-forming*. Of course, if we can fix the effect, in pilot studies we look at its observed or hypothetical size. Pilot studies are often quite compact and only allow answering the question of the presence/absence of an effect, but not reliably determining its size.

**Diagram 1. Creation of hypothetical studies**

![2](https://github.com/aysuvorov/clinstats/blob/master/docs/pages/stat_testing/images/%D0%94%D0%B8%D0%B0%D0%B3%D1%80% D0%B0%D0%BC%D0%BC%D0%B0%201.png?raw=true)

The next phase of research, after the pilot, is called *confirmatory* studies, and is aimed at fixing the effect of a certain size.

For example, we found that smoking among men living in cities aged 35-45 increases the risk of developing cardiovascular diseases over 10 years, RR = X. We are faced with the question of the effect of smoking on a similar group of men living in countryside. In order to design such a study, we can build on previous results in an urban population and assume that we need to fix an effect size (RR) of at least X. Or, if according to our research assumptions (!), the effect will be less than expressed, for example, in $n$-times, we can plan the study in such a way as to detect an effect size (RR) of at least X/$n$.

**Diagram 2. Creation of confirmatory studies**

![2](https://github.com/aysuvorov/clinstats/blob/master/docs/pages/stat_testing/images/%D0%94%D0%B8%D0%B0%D0%B3%D1%80% D0%B0%D0%BC%D0%BC%D0%B0%202.png?raw=true)

Using the effect size allows you not to conduct pilot studies every time, and also to rely on experience from previous studies.

The concept of effect size requires physicians to understand that there is a threshold of effect size that they want to capture statistically, as such a threshold is appropriate from the point of view of medicine. And such a threshold requires precisely medical justification. For example, when studying a new drug for weight loss in patients weighing over 200 kg, a significant weight loss was obtained within 1 year, which amounted to 1 kg. As a result, the effect is fixed, it is significant, but from the point of view of helping patients, this effect is absolutely meaningless - within 1 year, nutritionists would certainly like to observe a more interesting figure in weight loss. It would probably be possible to introduce an effect size threshold of 15 or 20 kg.

## One-tailed and two-tailed statistical tests

### Bilateral tests

Let's return to the example of antihypertensive therapy. There is a new drug, let's call it TRT, which should reduce SBP, but we do not know how it will show itself in the experiment. There is also a traditional antihypertensive therapy, let's call it CTRL. If we measure the mean decrease in SBP at the end of the study, it would be $\mu_{TRT}$ in the TRT group and $\mu_{CTRL}$ in the CTRL group.

If we pose the research question as "which therapy is more effective?", the null hypothesis declares that $H_0: \mu_{TRT} = \mu_{CTRL}$. But the alternative hypothesis $H_1: \mu_{TRT} \neq \mu_{CTRL}$ will be composed of two simpler ones:

$H_1 = \begin{cases} \mu_{TRT} > \mu_{CTRL} \\ \mu_{TRT} < \mu_{CTRL} \end{cases}$

That is, we consider alternative hypotheses both in the case *when TRT is better* than CTRL, and vice versa, when TRT would be *significantly worse*. The tests used for such verification are called *two-tailed*. If we look at the distribution diagram of, for example, t-statistics, we will see 2 mirror critical values with different signs (with a significance level of $\alpha$=0.05 for a two-tailed test, the critical values will be -1.962 and 1.962).

In two-tailed tests, the overall significance level is halved, and the critical values on each side correspond to $\alpha/2$:

$\begin{cases} \alpha_{right} = \alpha / 2 \\ \alpha_{left} = \alpha / 2 \end{cases}$

At a significance level of 5%, the null hypothesis will be rejected if the t-statistic of the observed effect exceeds either of the two critical values (red lines) corresponding to 2.5% and 97.5%:
**Chart 3. Illustration of a two-tailed test (see text for explanations)**

![image-20220402105832836](/home/guest/snap/typora/57/.config/Typora/typora-user-images/image-20220402105832836.png)

Why do researchers need two-sided tests? Because we do not know the true effect of the TRT drug, a two-sided test will answer all scenarios: TRT is approximately the same in effect as CTRL, TRT is better than CTRL, TRT is worse than CTRL.

### One-way tests

On the other hand, if the main research question is "Is TRT a better alternative to CTRL?" our hypotheses will change. Now it is important for us to fix only the meaningful size of the effect when $\mu_{TRT} > \mu_{CTRL}$.

Thus, when formulating the null and alternative hypotheses, we get:

$\begin{cases} H_0 = \mu_{TRT} \leq \mu_{CTRL} \\ H_1 =\mu_{TRT} > \mu_{CTRL} \end{cases}$

To test such a hypothesis, a *one-sided test* is used, which allows not only to fix the *certain size of the effect*, but also its *direction*.

In this case, it is important for us to check whether the test statistic exceeds the critical value located on the distribution on the right:

  **Chart 4. Illustration of a one-tailed test (explanations in the text)**

![2](https://github.com/aysuvorov/clinstats/blob/master/docs/pages/stat_testing/images/%D0%93%D1%80%D0%B0%D1%84%D0%B8% D0%BA%204.png?raw=true)

**- the green line on the graph indicates the critical value 1.646377, corresponding to the one-sided significance level alpha = 0.05. For statistics t=2.5 (red line) p-value = 0.006*

With a one-sided test, the statistics correspond to the chosen level of significance.

## Type I and II errors

Obtaining and interpreting research results is associated with 2 types of errors.

*Type I error* (false positive result) - a situation where a true null hypothesis is rejected. An alternative hypothesis is accepted that is false.

*Type II error* (false negative result) - a situation where an incorrect null hypothesis is accepted. The correct alternative hypothesis is rejected.

| In the statistical population | During the study | Check result $H_0$ | Probability |
| -------------------- | -------------------- | -------------------------------- | ---------------- |
| $H_0$ is correct | $H_0$ accepted | Faithful Acceptance | $P = 1 - \alpha$ |
| $H_0$ is correct | $H_0$ rejected | False rejection, type I error | $P = \alpha$ |
| $H_0$ is invalid | $H_0$ accepted | False acceptance, type II error | $P = \beta$ |
| $H_0$ is invalid | $H_0$ rejected | Faithful rejection | $P = 1 - \beta$ |

For planning an experiment, it is important to try to minimize type I and type II errors.
Type I error, as we have already said, is the significance level of the test. A small type I error allows the null hypothesis to be accepted with a high probability, provided that it is true.

In turn, a type II error allows us to reject the null hypothesis with probability $1 - \beta$, provided that it is false. This probability is called *statistical test power*: $power = 1 - \beta$. In a number of medical studies, the minimum power corresponds to at least 80% (or the maximum type II error does not exceed 20%).

## The size of the required sample in the concept of testing statistical hypotheses

The final element required to test statistical hypotheses is the minimum sample size required to accept or reject the null hypothesis.

Thus, we can represent the concept of statistical hypothesis testing in the form of the following diagram:

**Diagram 3. The concept of testing statistical hypotheses**

![2](https://github.com/aysuvorov/clinstats/blob/master/docs/pages/stat_testing/images/%D0%94%D0%B8%D0%B0%D0%B3%D1%80% D0%B0%D0%BC%D0%BC%D0%B0%203.png?raw=true)

Having posed the research question and assuming the expected effect size, the researcher:

- selects the most appropriate statistical test associated with the law of effect size distribution in the statistical population;

- establishes an appropriate level of significance and power of the study;

- after that calculates the required sample size.

After that, you can proceed to perform a statistical test.

How can a researcher relate study power, significance level, effect size, and sample size?

Imagine that we are trying to statistically fix the effect size E with power $1 - \beta$, significance $\alpha$ (chart 5). To do this, we need a sample size of $n$. We note in advance that the significance level of the test must remain fixed for any development of events.

**Chart 5**

![@](https://github.com/aysuvorov/clinstats/blob/master/docs/pages/stat_testing/images/%D0%93%D1%80%D0%B0%D1%84%D0%B8% D0%BA%205.png?raw=true)

If the researcher wants to keep the sample size the same but increase the power, the simplest solution is to assume that we will observe a larger effect size, say 2 times (or E x 2). In this case, the power will actually increase (chart 6).

**Chart 6**

![2](https://github.com/aysuvorov/clinstats/blob/master/docs/pages/stat_testing/images/%D0%93%D1%80%D0%B0%D1%84%D0%B8% D0%BA%206.png?raw=true)

However, in real life, the researcher cannot voluntarily observe a larger or smaller effect; moreover, the assumption about the size of the effect is only a research hypothesis. In such a case, the effect size should also not increase (graph 7). At the same time, on graph 7, the power increased. If you look closely, the distributions resemble Chart 5, but in this case the size of the required sample was increased.

**Chart 7**

![@](https://github.com/aysuvorov/clinstats/blob/master/docs/pages/stat_testing/images/%D0%93%D1%80%D0%B0%D1%84%D0%B8% D0%BA%207.png?raw=true)

Thus, if one wants to capture a certain effect size with a strict level of significance, the only way to reduce the risk of falsely accepting the null hypothesis is to increase the size of the required sample.