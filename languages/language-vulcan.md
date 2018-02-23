
## Language Vulcan.NET ##
---
- Author: Russell Diehl
- Date: 05/26/08
- Info: http
- Score:  (2.91 in 11 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-vulcan.net-1790.html
---

```USING System
USING System.ServiceProcess
USING System.Diagnostics
USING System.Timers

FUNCTION Start() AS VOID
    ServiceBase.Run(VulcanService{})
    RETURN

CLASS VulcanService INHERIT ServiceBase
    PROTECTED timer AS Timer

CONSTRUCTOR() CLASS VulcanService
    SUPER()

    CanPauseAndContinue := TRUE
    ServiceName := "Vulcan Sample Service"

    timer := Timer{}
    timer:Interval := 10000
    timer:Elapsed += ElapsedEventHandler{SELF, @VulcanService.OnTimer}

    RETURN

METHOD OnContinue() AS VOID CLASS VulcanService 

    EventLog:WriteEntry("Vulcan Sample Service continued")
    timer:Enabled := TRUE
    RETURN

METHOD OnPause() AS VOID CLASS VulcanService
    EventLog:WriteEntry("Vulcan Sample Service paused")
    timer:Enabled := FALSE
    RETURN

METHOD OnStart(args AS STRING[]) AS VOID CLASS VulcanService
    EventLog:WriteEntry("Vulcan Sample Service started")
    timer:Enabled := TRUE
    RETURN

METHOD OnStop() AS VOID CLASS VulcanService
    EventLog:WriteEntry("Vulcan Sample Service stopped")
    timer:Enabled := FALSE
    RETURN


METHOD OnTimer(source AS OBJECT, e AS ElapsedEventArgs) AS VOID CLASS VulcanService
    EventLog:WriteEntry("Hello Vulcan!")
    RETURN```