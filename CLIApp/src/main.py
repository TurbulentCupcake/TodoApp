from TaskObject import TaskObject

if __name__ == "__main__":
    task = TaskObject("Complete the homework next week")
    task.parseForTime()
    task.printTask()
