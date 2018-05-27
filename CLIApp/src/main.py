from TaskObject import TaskObject
from DateTimeNLPEngine import DateTimeNLPEngine


if __name__ == "__main__":
    taskObj = TaskObject("This is due on tuesday")
    DateTimeNLPEngine(taskObj.task).printString()