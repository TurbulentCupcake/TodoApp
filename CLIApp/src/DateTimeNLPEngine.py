from TaskObject import TaskObject
import datetime

class DateTimeNLPEngine:

    def __init__(self, taskObj_str):
        self.taskObj_str = taskObj_str

    def printString(self):
        print("Task:  ", self.taskObj_str)
    
    def parseForTime(self):
        """ This function is required to extract time by which
        a task should be completed. This is currently a primary implementation.
        Returns a Date object
        """
        # break down the words
        words = self.taskObj_str.split(" ")
        # create a dictionary that represents the
        # appropriate date of next 
        time_dict = {
            "today": datetime.datetime.today(),
            "tomorrow": datetime.datetime.now() + datetime.timedelta(days=1),
            "next week": datetime.datetime.now() + datetime.timedelta(days=7),
            "yesterday": datetime.datetime.now() - datetime.timedelta(days=1)
        }

        # records the numerical representation of each 
        # day of the week
        days_dict = {
            "mon":0,
            "Mon":0,
            "tues":1,
            "tue":1,
            "Tues":1,
            "Tue":1,
            "Wedn":2,
            "wedn":2,
            "Thurs":3,
            "thurs":3,
            "fri":4,
            "Fri":4,
            "Satur":5,
            "satur":5,
            "Sund":6,
            "sund":6
        }

        next_week = False # user asking to schedule for next week or last week 
        # iterate through each word
        duedate = None
        for i  in range(len(words)):

            if words[i] == "next":
                next_week = True
            # check if the duedate for task is sunday 
            # iterate through the next 7 days to see which one corresponds
            # to the due date of the task 
            for day_key in days_dict.keys():
                if day_key in words[i]:
                    for day in range(7):
                        new_day = datetime.datetime.now()+datetime.timedelta(days=day)
                        if (new_day.weekday() == days_dict[day_key]):
                            if next_week: # if next <day of the week> scale by a week
                                duedate = new_day + datetime.timedelta(days=7)
                            else: # else its this week
                                duedate = new_day
                            break
            
            if duedate is None and words[i] in time_dict.keys():
                duedate = time_dict[words[i]]
        
        return duedate
    
    def parseForPriority(self):
        "Returns a priority number depending on the word in context"
        words = self.taskObj_str.split(" ")

        priority_dict = { 
            "soon":2,
            "later":4,
            "asap":1,
            "ASAP":1,
            "Asap":1
        }

        for w in words:
            if w in priority_dict.keys():
                return priority_dict[w]


