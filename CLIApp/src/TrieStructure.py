
# Each node is used to store a word 
class Node:
    """ This class is responsible to create a tree """

    def __init__(self, word = None):
        self.word = word # word contained by the node
        self.children = {} # contains next words
        self.lastWord = False # if it is the last word
    
    def addChild(self, childWord, childNode):
        self.children[childWord] = childNode
    
    def getChild(self, childWord):
        return self.children[childWord]
    
    def __getitem__(self, childWord):
        return self.children[childWord]



 
    



