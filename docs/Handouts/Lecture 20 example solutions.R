# Load example data
data <- read.csv(file = 'Lecture 20 Log wind profile example.csv', header = TRUE)

# Create new column for ln(z)
data$lnz <- log(data$z)
  
# Display data
head(data)

# Plot wind speed vs. height 
suppressMessages(library("ggplot2")) # load plotting package first

ggplot(data, aes(x = U, y = lnz)) + 
  geom_point() + 
  labs(
    x = "U (m/s)",
    y = "ln(z) (m)") +
  geom_smooth(method = "lm", se = FALSE) # Linear fit


# Fit line through data. Note for this use the function lm
modelFit <- lm(lnz~U, data=data) 
summary(modelFit)$coefficients # Details of model fit 

# estimate z0. Hint - summary(modelFit)$coefficients[1] will be helpful here
z0 <- exp(summary(modelFit)$coefficients[1])
cat("z0 is: ", round(z0,3), "m", "\n")

# To estimate the slope, use:
slope <- summary(modelFit)$coefficients[2]