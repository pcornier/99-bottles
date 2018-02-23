
## Language Grok ##
---
- Author: d2m
- Date: 08/02/08
- Info: http
- Score:  (3.00 in 1 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-grok-1833.html
---

```import grok

class Wall(grok.Application,grok.Container):
    
    def add_99_bottles(self):
        for n in range(1,100):
            self[str(n)]=Bottle()

    def describe_me(self):
        num_bottles=len(self.items())
        if num_bottles == 0:
            text='No more bottles of beer'
        elif num_bottles == 1:
            text='1 bottle of beer'
        else:
            text='%d bottles of beer' % num_bottles
        return text
    
    def enum(self):
        return len(self.items())

class Bottle(grok.Model):
    pass

class Index(grok.View):
    grok.context(Wall)

    def still_beer(self):
        return self.context.enum() > 0
    
    def take_one_down(self):
        bottles=self.context.keys()
        del self.context[bottles[-1]]

    def buy_some_more(self):
        self.context.add_99_bottles()
        
    def render(self):
        context=self.context
        out=[]
        while self.still_beer():
            description=context.describe_me()
            out.append('%s on the wall, %s.' % (description, description.lower()))
            self.take_one_down()
            description=context.describe_me()
            out.append('Take one down and pass it around, %s.\n' % description.lower())
        description=context.describe_me()
        out.append('%s on the wall, %s.' % (description, description.lower()))
        self.buy_some_more()
        description=context.describe_me()
        out.append('Go to the store and buy some more, %s.' % description.lower())
        return '\n'.join(out)
        
@grok.subscribe(Wall, grok.IObjectAddedEvent)
def handle(obj, event):
    obj.add_99_bottles()```