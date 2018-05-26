import datetime 


class TaskObject:
    """ Main object necessary to deal with individual tasks """ 
    def __init__(self, task):
        self.task = task
        self.time = datetime.datetime.now()
        self.duedate = None
    


    def printTask(self):
        print("Task: ", self.task)
        print("Task Entry Time: ", self.time)
        print("Task Due: ", self.duedate)
    
    def parseForTime(self):
        # break down the words
        words = self.task.split(" ")
        # create a dictionary that represents the
        # appropriate date of next 
        time_dict = {
            "today": self.time.today(),
            "tomorrow": self.time.now() + datetime.timedelta(days=1),
            "next week": self.time.now() + datetime.timedelta(days=7),
            "yesterday": self.time.now() - datetime.timedelta(days=1)
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

        next_week = False
        # iterate through each word
        for i  in range(len(words)):

            if words[i] == "next":
                next_week = True
            # check if the duedate for task is sunday 
            # iterate through the next 7 days to see which one corresponds
            # to the due date of the task 
            for day_key in days_dict.keys():
                if day_key in words[i]:
                    for day in range(7):
                        new_day = self.time.now()+datetime.timedelta(days=day)
                        if (new_day.weekday() == days_dict[day_key]):
                            if next_week: # if next <day of the week> scale by a week
                                self.duedate = new_day + datetime.timedelta(days=7)
                            else: # else its this week
                                self.duedate = new_day
                            break
            

            if self.duedate is not None and words[i] in time_dict.keys():
                self.duedate = time_dict[words[i]]