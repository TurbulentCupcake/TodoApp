from TaskObject import TaskObject

if __name__ == "__main__":
    task = TaskObject("Complete the homework on tues")
    task.parseForTime()
    task.printTask()
