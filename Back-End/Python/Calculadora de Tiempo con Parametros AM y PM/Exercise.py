def add_time(startTime, durationTime, newDay):
    if len(startTime) > 7:
        initialHour = startTime[0:2]
        initialMinutes = startTime[3:6]
    else:
        initialHour = startTime[0:1]
        initialMinutes = startTime[2:5]
    if len(durationTime) > 4:
        hoursPassed = durationTime.split(":")[0]
        minutesPassed = durationTime.split(":")[1]
    else:
        hoursPassed = durationTime[0:1]
        minutesPassed = durationTime[2:5]
    newHour = int(initialHour) + int(hoursPassed)
    newMinute = int(initialMinutes) + int(minutesPassed)

    if newDay == "Monday":
        numberDay = 0
    elif newDay == "Tuesday":
        numberDay = 1
    elif newDay == "Wednesday":
        numberDay = 2
    elif newDay == "Thursday":
        numberDay = 3
    elif newDay == "Friday":
        numberDay = 4
    elif newDay == "Saturday":
        numberDay = 5
    elif newDay == "Sunday":
        numberDay = 6

    while newMinute >= 60:
        newHour += 1
        newMinute = newMinute - 60
    if startTime[6:8] == "AM" or startTime[5:7] == "AM":
        value = " AM"
        while newHour >= 13:
            newHour = newHour - 12
            numberDay += 0.5
            if value == " AM":
                value = " PM"
            else:
                value = " AM"
            if numberDay == 7:
                numberDay -= 7
        if newHour == 12:
            value = " PM"
            numberDay += 1
    else:
        value = " PM"
        numberDay += 0.5
        while newHour >= 13:
            newHour = newHour - 12
            numberDay += 0.5
            if numberDay == 7.0:
                numberDay = numberDay - 7
            if value == " PM":
                value = " AM"
            else:
                if newHour == 12:
                    value = " AM"
                else:
                    value = " PM"
        if newHour == 12:
            value = " AM"
            numberDay += 1

    exactMinute = str(newMinute)
    if newMinute < 10:
        exactMinute = "0" + exactMinute
    if numberDay < 1:
        newDay = "Monday"
    elif 1 <= numberDay < 2:
        newDay = "Tuesday"
    elif 2 <= numberDay < 3:
        newDay = "Wednesday"
    elif 3 <= numberDay < 4:
        newDay = "Thursday"
    elif 4 <= numberDay < 5:
        newDay = "Friday"
    elif 5 <= numberDay < 6:
        newDay = "Saturday"
    elif 6 <= numberDay < 7:
        newDay = "Sunday"

    return str(newHour) + ":" + exactMinute + value + ", " + newDay

print(add_time("6:30 PM", "205:12", "Tuesday"))