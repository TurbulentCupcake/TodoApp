import datetime 


class TaskObject:
    """ Main object necessary to deal with individual tasks """ 
    def __init__(self, task):
        self.task = task
        self.time = datetime.datetime.now()
    


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
            "next week": self.time.now() + datetime.timedelta(days=7)
        }

        # iterate through each word
        for i  in range(len(words)):
            if words[i] == "next":
                if words[i+1] == "week":
                    self.duedate = time_dict["next week"]
                elif words[i+1] == "Sunday" or words[i+1] == "sunday":
                    self.duedate = 

            if words[i] in time_dict.keys():
                self.duedate = time_dict[words[i]]