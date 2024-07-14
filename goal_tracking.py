# Alexandra Koroleva
# 07/14/24
# Tracking workouts, calculating calories burnt, setting and monitoring fitness goals, visualizing the data
# Need different categories: Nutrition, weight, PR's
import matplotlib.pyplot as plt
import pandas as pd

# DataFrame to store the data
df = pd.DataFrame(columns=['Date', 'Workout', 'Duration', 'Calories'])


# Adding data to the tracker
def add_workout(date, workout, duration, calories):
    global df
    new_entry = pd.DataFrame({'Date': [date], 'Workout': [workout], 'Duration': [duration], 'Calories': [calories]})
    df = pd.concat([df, new_entry], ignore_index=True)


# Adding fitness goal
# DataFrame to store goals
goals_df = pd.DataFrame(columns=['Goal', 'Target'])


def add_goal(goal, target):
    global goals_df
    new_goal = pd.DataFrame({'Goal': [goal], 'Target': [target]})
    goals_df = pd.concat([goals_df, new_goal], ignore_index=True)


# Visualizing data with Matplotlib
def plot_data():
    df.plot(x='Date', y="Calories", kind='bar', title='Calories Burnt', figsize=(15, 10), legend=True, fontsize=12)
    plt.show()


# Checking progress towards goals
def check_progress():
    for index, row in goals_df.iterrows():
        goal_cal = df[df['Workout'] == row['Goal']].Calories.sum()
        print(f"Progress for goal {row['Goal']}: {goal_cal}/{row['Target']}")


# Sample usage
# Adding workouts
add_workout('2024-07-14', 'Running', 30, 200)
add_workout('2024-07-15', 'Cycling', 45, 250)

# Adding a goal
add_goal('Running', 1000)

# Checking progress
check_progress()

# Visualize data
plot_data()
