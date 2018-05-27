import datetime 


class TaskObject:
    """ Main object necessary to deal with individual tasks """ 
    def __init__(self, task, duedate = None, priority = None):
        "Initialize task from simple text input"
        self.task = task
        self.time = datetime.datetime.now()
        self.duedate = duedate
        self.priority = priority # begin all tasks at lowest priority

    def printTask(self):
        print("Task: ", self.task)
        print("Task Entry Time: ", self.time)
        print("Task Due: ", self.duedate) 
    
    