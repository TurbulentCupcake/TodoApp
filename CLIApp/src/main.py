import getopt, sys
from TaskObject import TaskObject
from DateTimeNLPEngine import DateTimeNLPEngine


def showHelp():
    print("Usage: python main.py -t <task> -d <duedate> -p <priorty>")

if __name__ == "__main__":
    args = sys.argv[1:len(sys.argv)]
    options, args = getopt.getopt(args, 'fht:d:p:')
    task = None
    duedate = None
    priority = None
    forceOption = False  # if user is missing one or more options, warn

    if len(options) != 0: # enter task the manual way
        for opt, val in options:
            if opt == "-t": # collect task name
                task = val
            elif opt == "-d": # collect the duedate
                duedate = val
            elif opt == "-p": # collect the priority of task
                priority = val
            elif opt == "-h": # display help
                showHelp()
                sys.exit(0)
            elif opt == "-f": # force option if some options are missing
                forceOption = True
        
        # check if user wants to continue if they have missing options
        if forceOption and task == None or duedate == None or priority == None:
            print("Warning: Missing one or more options. Proceed?")
            proceed_opt = input()
            if "n" in proceed_opt or "N" in proceed_opt:
                sys.exit(0)
        
        duedate = DateTimeNLPEngine(duedate).parseForTime() # obtain due date from text
        priority = DateTimeNLPEngine(priority).parseForPriority() # obtain priority from text
        taskObj = TaskObject(task, duedate, priority) # create a task object for this task
        taskObj.printTask()
    else: # enter task directly 
        print("fail lol")
        